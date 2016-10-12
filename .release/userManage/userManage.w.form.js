define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/pagerBar/pagerBar');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/bootstrap/pagination/pagination');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/toolBar/toolBar');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/dataTables/dataTables');
require('$model/UI2/system/components/justep/pagerLimitSelect/pagerLimitSelect');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/bootstrap/inputGroup/inputGroup');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/paitest/userManage'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c6Jfymy';
	this._flag_='37e6d78d4f2194539a8f197b3f27104e';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"admin":{"define":"admin","label":"admin","name":"admin","relation":"admin","type":"String"},"user_id":{"define":"user_id","label":"user_id","name":"user_id","relation":"user_id","type":"String"},"user_name":{"define":"user_name","label":"user_name","name":"user_name","relation":"user_name","type":"String"},"user_sex":{"define":"user_sex","label":"user_sex","name":"user_sex","relation":"user_sex","type":"String"}},"directDelete":false,"events":{},"idColumn":"user_id","limit":10,"queryAction":"queryPai_user","saveAction":"savePai_user","tableName":"pai_user","url":"/justep/pai","xid":"userData"});
}}); 
return __result;});