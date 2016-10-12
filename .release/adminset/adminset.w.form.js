define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/grid/grid');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/paitest/adminset'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='caYJVV3';
	this._flag_='18f51de9829d3eb560985063456e3fff';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"admin":{"define":"admin","label":"admin","name":"admin","relation":"admin","type":"String"},"user_id":{"define":"user_id","label":"user_id","name":"user_id","relation":"user_id","type":"String"},"user_name":{"define":"user_name","label":"user_name","name":"user_name","relation":"user_name","type":"String"},"user_sex":{"define":"user_sex","label":"user_sex","name":"user_sex","relation":"user_sex","type":"String"}},"directDelete":false,"events":{},"idColumn":"user_id","limit":20,"queryAction":"queryPai_user","saveAction":"savePai_user","tableName":"pai_user","url":"/justep/pai","xid":"paiUser"});
}}); 
return __result;});