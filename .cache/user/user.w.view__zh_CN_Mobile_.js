window.__justep.__ResourceEngine.loadCss([{url: '/v_d70b7bd20c504980b680477ca3d87d0el_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_99632be1396b4542b3555259844bec39l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_3467f6d47ba544e68ee4899a73e1d53dl_zh_CNs_d_m/system/core.min.js','/v_a1482a1dc4ef44c0859de5304766a381l_zh_CNs_d_m/system/common.min.js','/v_e61813dbb6704aaaa44ea5f63772f17cl_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/paitest/user'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cB7ry2y';
	this._flag_='2e3ca711d3ef972650dcacdb7742002c';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fCreateTime":{"define":"fCreateTime","label":"建立时间","name":"fCreateTime","relation":"fCreateTime","type":"String"},"fDescription":{"define":"fDescription","label":"描述","name":"fDescription","relation":"fDescription","type":"String"},"fDownloadPath":{"define":"fDownloadPath","label":"下载地址","name":"fDownloadPath","relation":"fDownloadPath","type":"String"},"fFileName":{"define":"fFileName","label":"文件名","name":"fFileName","relation":"fFileName","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","rules":{"integer":true},"type":"Integer"},"fOwner":{"define":"fOwner","label":"上传者","name":"fOwner","relation":"fOwner","type":"String"},"fPreviewPath":{"define":"fPreviewPath","label":"预览地址","name":"fPreviewPath","relation":"fPreviewPath","type":"String"},"fTaskID":{"define":"fTaskID","label":"fTaskID","name":"fTaskID","relation":"fTaskID","type":"String"},"fThumb":{"define":"fThumb","label":"缩略图地址","name":"fThumb","relation":"fThumb","type":"String"},"fUserName":{"define":"fUserName","label":"上传者姓名","name":"fUserName","relation":"fUserName","type":"String"}},"directDelete":false,"events":{},"filters":{"filter0":"","filter1":""},"idColumn":"fID","limit":-1,"orderBys":[{"relation":"fCreateTime","type":0}],"queryAction":"queryPai_pictures","saveAction":"savePai_pictures","tableName":"pai_pictures","url":"/justep/pai","xid":"paiData"});
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":false,"defCols":{"fileName":{"define":"fileName","name":"fileName","relation":"fileName","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{"onValueChanged":"dataValueChanged"},"idColumn":"id","initData":"[{\"id\":\"1\",\"fileName\":\"\"}]","limit":-1,"xid":"data"});
 new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"admin":{"define":"admin","label":"admin","name":"admin","relation":"admin","type":"String"},"user_id":{"define":"user_id","label":"user_id","name":"user_id","relation":"user_id","type":"String"},"user_name":{"define":"user_name","label":"user_name","name":"user_name","relation":"user_name","type":"String"},"user_sex":{"define":"user_sex","label":"user_sex","name":"user_sex","relation":"user_sex","type":"String"}},"directDelete":false,"events":{},"idColumn":"user_id","limit":20,"queryAction":"queryPai_user","saveAction":"savePai_user","tableName":"pai_user","url":"/justep/pai","xid":"paiUser"});
}}); 
return __result;});
