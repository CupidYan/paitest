window.__justep.__ResourceEngine.loadCss([{url: '/v_1efb476766994d648131cc1e7faeb6f6l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_f61f13ac87e348db8062b273076f9691l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_d528f4e81818415ea0acc8844d771ec2l_zh_CNs_d_m/system/components/comp2.min.js','/v_db20f147a3be4e5cb448bef73cd171d8l_zh_CNs_d_m/system/core.min.js','/v_2f9c3d9db69445848ca654e877e5d7a4l_zh_CNs_d_m/system/common.min.js','/v_f346fa48c27c485ea4872b01a0c213a5l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/bootstrap/carousel/carousel');
require('$model/UI2/system/components/justep/bar/bar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/paitest/userdetail'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cymmUjm';
	this._flag_='1734cc4b913ef52e909bcfbcb5db90d9';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":false,"defCols":{"fCreateTime":{"define":"fCreateTime","label":"建立时间","name":"fCreateTime","relation":"fCreateTime","type":"String"},"fDescription":{"define":"fDescription","label":"描述","name":"fDescription","relation":"fDescription","type":"String"},"fDownloadPath":{"define":"fDownloadPath","label":"下载地址","name":"fDownloadPath","relation":"fDownloadPath","type":"String"},"fFileName":{"define":"fFileName","label":"文件名","name":"fFileName","relation":"fFileName","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","rules":{"integer":true},"type":"Integer"},"fOwner":{"define":"fOwner","label":"上传者","name":"fOwner","relation":"fOwner","type":"String"},"fPreviewPath":{"define":"fPreviewPath","label":"预览地址","name":"fPreviewPath","relation":"fPreviewPath","type":"String"},"fTaskID":{"define":"fTaskID","label":"fTaskID","name":"fTaskID","relation":"fTaskID","type":"String"},"fUserName":{"define":"fUserName","label":"上传者姓名","name":"fUserName","relation":"fUserName","type":"String"}},"directDelete":true,"events":{},"idColumn":"fID","limit":-1,"queryAction":"queryPai_pictures","saveAction":"savePai_pictures","tableName":"pai_pictures","url":"/justep/pai","xid":"paiData"});
}}); 
return __result;});
