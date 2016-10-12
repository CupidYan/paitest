<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:pc" title="用户管理">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:194px;top:496px;"><div component="$UI/system/components/justep/data/baasData" autoLoad="true" xid="userData" saveAction="savePai_user" queryAction="queryPai_user" tableName="pai_user" url="/justep/pai" idColumn="user_id" limit="10">
   <column label="user_id" name="user_id" type="String" xid="default1"></column>
  <column label="user_name" name="user_name" type="String" xid="default2"></column>
  <column label="user_sex" name="user_sex" type="String" xid="default3"></column>
  <column label="admin" name="admin" type="String" xid="default4"></column></div></div> 

  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" title="用户管理" class="x-titlebar" xid="titleBar1">
   <div class="x-titlebar-left" xid="left1">
    <a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="{operation:'window.close'}" xid="backBtn">
     <i class="icon-chevron-left" xid="i1"></i>
     <span xid="span1"></span></a> </div> 
   <div class="x-titlebar-title" xid="title1">用户管理</div>
   <div class="x-titlebar-right reverse" xid="right1"></div></div><div class="x-titlebar-left" xid="left2" style="background-color:#393a3e;">
   
  </div>
  </div>
   <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/toolBar/toolBar" class="x-toolbar form-inline x-toolbar-spliter" xid="toolBar3">
   <a component="$UI/system/components/justep/button/button" class="btn btn-link" label="新增" xid="add" icon="icon-android-add" onClick="addClick">
    <i xid="i9" class="icon-android-add"></i>
    <span xid="span32">新增</span></a> 
   <a component="$UI/system/components/justep/button/button" class="btn btn-link" label="编辑" xid="edit" icon="icon-edit" onClick="editClick">
    <i xid="i10" class="icon-edit"></i>
    <span xid="span33">编辑</span></a> 
   <a component="$UI/system/components/justep/button/button" class="btn btn-link" label="删除" xid="delete" icon="icon-android-remove" onClick="deleteClick">
    <i xid="i12" class="icon-android-remove"></i>
    <span xid="span40">删除</span></a> 
  <div class="input-group pull-right" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup4">
   <input type="text" class="form-control" component="$UI/system/components/justep/input/input" xid="selectCondition" placeHolder="请输入"></input>
   <div class="input-group-btn" xid="layoutWizard2">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-only-icon" label="button" xid="select" icon="icon-android-search" onClick="selectClick">
     <i xid="i6" class="icon-android-search"></i>
     <span xid="span25"></span></a> </div> </div></div><div component="$UI/system/components/justep/dataTables/dataTables" flexibleWidth="true" responsive="true" rowActiveClass="blueActive" class="table table-hover table-striped" xid="userDataTables" data="userData" onRowDblClick="userDataTablesRowDblClick">
   <columns xid="columns2">
    <column name="user_id" xid="column1" label="员工编号"></column>
  <column name="user_name" xid="column2" label="员工姓名"></column>
  <column name="user_sex" xid="column4" label="性别"></column>
  <column name="admin" xid="column6" label="权限"></column></columns> </div><div component="$UI/system/components/justep/pagerBar/pagerBar" class="x-pagerbar container-fluid" xid="pagerBar3">
   <div class="row" xid="div19">
    <div class="col-sm-3" xid="div20">
     <div class="x-pagerbar-length" xid="div21">
      <label component="$UI/system/components/justep/pagerLimitSelect/pagerLimitSelect" class="x-pagerlimitselect" xid="pagerLimitSelect3" defaultValue="10">
       <span xid="span34">显示</span>
       <select component="$UI/system/components/justep/select/select" class="form-control input-sm" xid="select5">
        <option value="10" xid="default26">10</option>
        <option value="20" xid="default27">20</option>
        <option value="50" xid="default28">50</option>
        <option value="100" xid="default29">100</option></select> 
       <span xid="span35">条</span></label> </div> </div> 
    <div class="col-sm-3" xid="div22">
     <div class="x-pagerbar-info" xid="div23">当前显示0条，共0条</div></div> 
    <div class="col-sm-6" xid="div24">
     <div class="x-pagerbar-pagination" xid="div25">
      <ul class="pagination" component="$UI/system/components/bootstrap/pagination/pagination" xid="pagination3">
       <li class="prev" xid="li2">
        <a href="#" xid="a5">
         <span aria-hidden="true" xid="span36">«</span>
         <span class="sr-only" xid="span37">Previous</span></a> </li> 
       <li class="next" xid="li10">
        <a href="#" xid="a6">
         <span aria-hidden="true" xid="span38">»</span>
         <span class="sr-only" xid="span39">Next</span></a> </li> </ul> </div> </div> </div> </div><span component="$UI/system/components/justep/windowDialog/windowDialog" xid="userWindowDialog" src="addUser.w" width="100%" height="100%" showTitle="true" status="normal" title="新增会员" onReceived="userWindowDialogReceived" style="top:108px;left:44px;">
   <result concept="userData" operation="edit" origin="userData" xid="default34">
    <mapping from="user_id" to="user_id" locator="true" xid="default35"></mapping>
    <mapping from="user_name" to="user_name" xid="default36"></mapping>
    <mapping from="user_sex" to="user_sex" xid="default37"></mapping>
    <mapping from="admin" to="admin" xid="default38"></mapping></result> </span></div>
   <div class="x-panel-bottom" xid="bottom1"></div></div>
  
  </div>