define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');

	var Model = function() {
		this.callParent();
		window.models = new Object();
		var shellImpl = new ShellImpl(this, {
			"contentsXid" : "pages",
			"pageMappings" : {
				"main" : {
					url : require.toUrl('./main1.w')
				// 管理员界面
				},
				"detail" : {
					url : require.toUrl('./detail.w')
				},
				"uploadPic" : {
					url : require.toUrl('./uploadPic.w')
				},
				"userdetail" : {
					url : require.toUrl('./userdetail.w')
				},
				"welcome" : {
					url : require.toUrl('./welcome.w')
				},

				"userManage" : {
					url : require.toUrl('./userManage.w')
				},
				"index" : {
					url : require.toUrl('./index.w')
				},
				"user" : {
					url : require.toUrl('./user.w')
				}
			}
		});
		shellImpl.useDefaultExitHandler = false;

	};

	Model.prototype.modelLoad = function(event) {

		/*
		 * 1、接收参数 2、并查找数据 3、重定向地址
		 */

		// 获取url上的参数 - 用户授权uid，用于获取用户信息
		var uid = this.getContext().getRequestParameter("uid");
		var auth_token = this.getContext().getRequestParameter("auth_token");
		// var api_key = this.getContext().getRequestParameter("api_key");

		if (auth_token && auth_token != undefined) {
			var pU = this.comp("paiUser");

			pU.setFilter('filter1', "user_id like '" + uid + "'");
			pU.refreshData();
			// pU.loadAllPageData();

			// 获取数据库用户信息
			//var user_id = pU.getValue("user_id");
			var user_name = pU.getValue("user_name");
			var admin = pU.getValue("admin");
			// alert("user_id="+user_id);
			// alert("admin="+admin);

			// if (user_id == uid) { // 用户存在
			if (admin == 0) { // 管理员

				justep.Shell.showPage("main", {
					user_id : uid,
					auth_token : auth_token,
					user_name : user_name
				});

			} else { // 普通用户
				justep.Shell.showPage("user", {
					user_id : uid,
					auth_token : auth_token,
					user_name : user_name
				});
			}
			// } // if (user_id == uid)
			// else { // 返回状态正常，认证成功 ，未授权用户，无权限访问
			//
			// justep.Shell.showPage("welcome", {
			// user_id : uid
			// });
			// }
		} // end if (auth_token && auth_token != undefined)
		else { // 返回状态异常
			alert("返回状态异常,auth_token 为空或者未定义！");
		}
	};

	return Model;
});