define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var util = require("$UI/system/lib/base/util");

	require("$UI/system/lib/cordova/cordova");
	require("cordova!cordova-plugin-geolocation");
	require("cordova!com.justep.cordova.plugin.baidulocation");
	// require("./native");

	var Model = function() {
		this.callParent();
		window.models["user"] = this;
	};

	// 只能上传图片
	Model.prototype.modelLoad = function(event) {

		this.paiData = this.comp("paiData");
		this.paiData.setFilter('filter0', "fOwner like '" + this.params.user_id + "'");
		this.paiData.refreshData();
	};

	var userBACK = {
		transParas : function(data) {
			var m = models["user"];
			// var row = m.comp('data').getCurrentRow();
			m.comp('input1').val(JSON.stringify(data));
		}
	};
	window["userBACK"] = userBACK;

	// 上传
	Model.prototype.dataValueChanged = function(event) {
		/*
		 * 1、获取上传图片，组合预览地址 2、生成上传图片的fID 3、将上传图片信息保存到paiData
		 */

		var data = this.comp('data');
		var paiData = this.comp('paiData');

		var row = data.getCurrentRow();

		var jsonList = eval("(" + row.val('fileName') + ")");
		var ownerID = row.getID();

		var fileName = JSON.stringify(jsonList.fileName);
		var previewUrl = JSON.stringify(jsonList.uploadPath);
		previewUrl = previewUrl.substr(1, previewUrl.length - 2);// 去掉url两段引号“”
		var taskID = JSON.stringify(jsonList.taskID);
		
		var arr = new Array();
		arr = previewUrl.split("..");
		if (arr.length > 1) {
			var thumb=arr[0]+"small."+arr[1];
		}else{
		var thumb =previewUrl;
		}

		
		//var thumb = JSON.stringify(jsonList.thumb) || "";
		//thumb = thumb.substr(1, thumb.length - 2);// 去掉url两段引号“”
		// if(previewUrl.substring(0)=="\"")
		// {alert("454");
		// //字符串以"开头，去掉"
		// previewUrl=previewUrl.substr(1,previewUrl.length-1)
		// }
		// if(previewUrl.substring(previewUrl.length-1)=="\"")
		// {
		// //字符串以"结尾，去掉"
		// previewUrl=previewUrl.substr(0,previewUrl.length-1)
		// }

		// var operateType = "preview";// 预览

		// var fid = this.params.user_id + " " + justep.Date.toString(new
		// Date(), 'yyyy-MM-dd hh:mm:ss');
		var fid = 1;
		paiData.setFilter('filter0', "");
		paiData.refreshData();
		if (paiData.getCount() > 0) {
			paiData.first();
			fid = paiData.getValue("fID") + 1;
		}

		var options = {
			defaultValues : [ {
				fID : fid,// id
				fFileName : fileName || "",// 图片名
				fPreviewPath : previewUrl || "",// 预览地址
				fDownloadPath : JSON.stringify(jsonList.uploadPath) || "",// 下载时需要的json串
				fCreateTime : justep.Date.toString(new Date(), 'yyyy-MM-dd hh:mm:ss'),// 上传时间
				fDescription : "",// 描述
				fOwner : this.params.user_id,
				fUserName : this.params.user_name||"上传者姓名为空",
				fTaskID : taskID || "",
				fThumb : thumb || ""// 缩略图地址
			} ]
		};
		paiData.newData(options);
		paiData.saveData();

		// });
		data.refreshData();
		paiData.setFilter('filter0', "fOwner like '" + this.params.user_id + "'");
		paiData.refreshData();
		// paiData.refreshData({
		// "async" : false, // - 异步执行，默认：false，
		// "append" : true // - 增量刷新，不清除原有数据，默认：false，
		// });

		// 给管理员发送通知
		//this.sendInform();

	};

	// 发送通知
	Model.prototype.sendInform = function(event) {
		var paiUser = this.comp("paiUser");
		paiUser.setFilter('filter0', "admin like '0' and user_id not like '" + this.params.user_id + "'");
		paiUser.refreshData();
		paiUser.first();
		// var user;
		var uid = new Array();
		for (var i = 0; i < paiUser.count(); i++) {
			// alert("user_id"+paiUser.getValue("user_id"))
			uid[i] = paiUser.getValue("user_id");
			paiUser.next();
		}

		var arr = new Array();
		arr = this.params.user_id.split("@");
		if (arr.length > 1) {
			var eid = arr[1];
		}

		justep.Baas.sendRequest({
			"url" : "/justep/pai",
			"action" : "sendInform",
			"async" : true,
			"params" : {
				"abc" : "123",
				"auth_token" : this.params.auth_token,
				"uid" : uid,
				"eid" : eid,
				"user_name" : this.params.user_name

			},
			"success" : function(data) {
				// alert(data.count);
			}

		});

	};

	// 图片详细
	Model.prototype.imageClick = function(event) {
		/*
		 * 进入详细页
		 */
		var paiData = this.comp('paiData');
		justep.Shell.showPage("userdetail", {
			fid : paiData.getValue("fID"),
			user_id : this.params.user_id
		});
	};
	// 刷新paiData数据
	Model.prototype.modelActive = function(event) {
		this.comp('paiData').refreshData();
	};

	Model.prototype.addCartBtnClick = function(event) {

	};

	Model.prototype.contentsActiveChange = function(event) {

	};

	Model.prototype.picListClick = function(event) {

	};

	Model.prototype.setBtn1Click = function(event) {
		justep.Shell.showPage("userManage");
	};

	Model.prototype.chooseSheetPhoto = function(event) {

		var transferid = parseInt(new Date().getTime() / 1000);
		NativeInteractive.chooseSheetPhoto({
			"webAppTransferID" : transferid,
			"editType" : 0,
			"compressionQuality" : 0.5
		});
	};

	return Model;
});
