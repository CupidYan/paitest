window.__justep.__ResourceEngine.loadCss([{url: '/v_af548689189d416ebf8034377d4f808bl_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_4c07a7360edc4892b5fe257373ffa066l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_846acc9dea1543f89213e49142237d0bl_zh_CNs_d_m/system/components/comp2.min.js','/v_9f8ec8081154450b80d5d4eb009f2d8cl_zh_CNs_d_m/system/core.min.js','/v_9ab14bba447f4b8795c1dee6ce334d2fl_zh_CNs_d_m/system/common.min.js','/v_21693b5dd2e34160b4b119c1bc08f8f3l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/attachment/attachmentSimple');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/paitest/uploadPic'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cau2yea';
	this._flag_='8018b144c80045c7ec06224d7e32c6f0';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fCreateTime":{"define":"fCreateTime","label":"建立时间","name":"fCreateTime","relation":"fCreateTime","type":"String"},"fDescription":{"define":"fDescription","label":"描述","name":"fDescription","relation":"fDescription","type":"String"},"fDownloadPath":{"define":"fDownloadPath","label":"下载地址","name":"fDownloadPath","relation":"fDownloadPath","type":"String"},"fFileName":{"define":"fFileName","label":"文件名","name":"fFileName","relation":"fFileName","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","rules":{"integer":true},"type":"Integer"},"fPreviewPath":{"define":"fPreviewPath","label":"预览地址","name":"fPreviewPath","relation":"fPreviewPath","type":"String"},"fTopic":{"define":"fTopic","label":"fTopic","name":"fTopic","relation":"fTopic","type":"String"}},"directDelete":false,"events":{},"filters":{"filter0":"","filter1":""},"idColumn":"fID","limit":-1,"orderBys":[{"relation":"fID","type":0}],"queryAction":"queryPai_pictures","saveAction":"savePai_pictures","tableName":"pai_pictures","url":"/justep/pai","xid":"paiData"});
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":false,"defCols":{"fileName":{"define":"fileName","name":"fileName","relation":"fileName","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"fileName\":\"\"}]","limit":-1,"xid":"data"});
}}); 
return __result;});
