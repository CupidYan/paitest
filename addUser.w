<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;" title="添加用户">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:390px;left:494px;">
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="userData" idColumn="user_id"><column label="员工编号" name="user_id" type="String" xid="xid1"></column>
  <column label="员工姓名" name="user_name" type="String" xid="xid2"></column>
  <column label="性别" name="user_sex" type="String" xid="xid3"></column>
  <column label="权限" name="admin" type="String" xid="xid4"></column></div>
  </div> 

  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-content" xid="content1"><div class="panel panel-default" component="$UI/system/components/bootstrap/panel/panel" xid="panel1">
   
   <div class="panel-body" xid="body1"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
   <label class="x-label" xid="label1" bind-text='$model.userData.label("user_id")'></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input1" bind-ref='$model.userData.ref("user_id")' placeHolder="员工编号"></input></div>
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
   <label class="x-label" xid="label2" bind-text='$model.userData.label("user_name")'></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input2" bind-ref='$model.userData.ref("user_name")' placeHolder="员工姓名"></input></div>
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit8">
   <label class="x-label" xid="label8" bind-text='$model.userData.label("user_sex")'></label>
   <select component="$UI/system/components/justep/select/select" bind-optionsCaption="请选择性别..." class="form-control x-edit" xid="sexselect1" bind-options="availableSex" bind-ref='$model.userData.ref("user_sex")'></select></div>
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit5">
   <label class="x-label" xid="label5" bind-text='$model.userData.label("admin")'></label>
  <select component="$UI/system/components/justep/select/select" bind-optionsCaption="请选择权限..." class="form-control x-edit" xid="select3" bind-options="availableAdmin" bind-ref='$model.userData.ref("admin")'></select></div>
  </div>
   </div>
  </div>
   <div class="x-panel-bottom" xid="bottom1"><a component="$UI/system/components/justep/button/button" class="btn btn-link x-dialog-button" label="取消" xid="cancel" onClick="cancelClick">
   <i xid="i1"></i>
   <span xid="span1">取消</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-primary x-dialog-button" label="确定" xid="okbtn" onClick="okbtnClick">
   <i xid="i2"></i>
   <span xid="span2">确定</span></a></div></div>
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver" onReceive="windowReceiverReceive"></span></div>