window.__justep.__ResourceEngine.loadCss([{url: '/v_ede81cf9f4134901bf9a2d6ef07050ddl_zh_CNs_desktopd_pc/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_2b14ad69335843b6befa81e24ce549b2l_zh_CNs_desktopd_pc/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_041811b21d9943848c3711bd48296a54l_zh_CNs_desktopd_pc/system/components/comp2.min.js','/v_9836b564121b43f99c0c058e1c044fc1l_zh_CNs_desktopd_pc/system/core.min.js','/v_78d1d4983961444b993674dc879a2ef0l_zh_CNs_desktopd_pc/system/common.min.js','/v_8ba67a6619984fdfbb376cd8052ee28el_zh_CNs_desktopd_pc/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/attachment/attachmentSimple');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/paitest/main'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cJZbyQv';
	this._flag_='c2e5f791191e79d309fbc85fc5ce6051';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fCreateTime":{"define":"fCreateTime","label":"建立时间","name":"fCreateTime","relation":"fCreateTime","type":"String"},"fDescription":{"define":"fDescription","label":"描述","name":"fDescription","relation":"fDescription","type":"String"},"fDownloadPath":{"define":"fDownloadPath","label":"下载地址","name":"fDownloadPath","relation":"fDownloadPath","type":"String"},"fFileName":{"define":"fFileName","label":"文件名","name":"fFileName","relation":"fFileName","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","rules":{"integer":true},"type":"Integer"},"fOwner":{"define":"fOwner","label":"上传者","name":"fOwner","relation":"fOwner","type":"String"},"fPreviewPath":{"define":"fPreviewPath","label":"预览地址","name":"fPreviewPath","relation":"fPreviewPath","type":"String"}},"directDelete":false,"events":{},"filters":{"filter0":"","filter1":""},"idColumn":"fID","limit":-1,"orderBys":[{"relation":"fCreateTime","type":0}],"queryAction":"queryPai_pictures","saveAction":"savePai_pictures","tableName":"pai_pictures","url":"/justep/pai","xid":"paiData"});
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":false,"defCols":{"fileName":{"define":"fileName","name":"fileName","relation":"fileName","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{"onValueChanged":"dataValueChanged"},"idColumn":"id","initData":"[{\"id\":\"1\",\"fileName\":\"\"}]","limit":-1,"xid":"data"});
}}); 
return __result;});
