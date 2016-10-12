<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;" title="会议记录">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:390px;top:161px;"
    onLoad="modelLoad"><div component="$UI/system/components/justep/data/baasData" autoLoad="true" xid="paiUser" queryAction="queryPai_user" saveAction="savePai_user" url="/justep/pai" tableName="pai_user" idColumn="user_id"><column label="user_id" name="user_id" type="String" xid="default1"></column>
  <column label="user_name" name="user_name" type="String" xid="default2"></column>
  <column label="user_sex" name="user_sex" type="String" xid="default3"></column>
  <column label="admin" name="admin" type="String" xid="default4"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="col0"><column name="col0" type="String" xid="xid1"></column>
  <column name="col1" type="String" xid="xid2"></column></div></div>  
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="pages" swipe="false"></div></div>
