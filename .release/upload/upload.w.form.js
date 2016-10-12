define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/attachment/attachmentSimple');
require('$model/UI2/system/components/justep/textarea/textarea');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/paitest/upload'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cvyEnq2';
	this._flag_='8d23f5a7a7e38bad9d322eb4e3b99cf6';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"comments":{"define":"comments","label":"comments","name":"comments","relation":"comments","type":"String"},"file_id":{"define":"file_id","label":"file_id","name":"file_id","relation":"file_id","type":"String"},"name":{"define":"name","label":"name","name":"name","relation":"name","type":"String"},"path":{"define":"path","label":"path","name":"path","relation":"path","type":"String"},"size":{"define":"size","label":"size","name":"size","relation":"size","type":"String"},"time":{"define":"time","label":"time","name":"time","relation":"time","type":"String"},"user_id":{"define":"user_id","label":"user_id","name":"user_id","relation":"user_id","type":"String"}},"directDelete":false,"events":{},"idColumn":"file_id","limit":20,"queryAction":"queryFile","saveAction":"saveFile","tableName":"file","url":"/justep/demo","xid":"baasData1"});
}}); 
return __result;});