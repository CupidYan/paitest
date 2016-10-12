<?xml version="1.0" encoding="utf-8"?>


<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window" title="会议记录">
  
 
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:326px;left:243px;height:auto;" onActive="modelActive" onLoad="modelLoad"> 
    <div component="$UI/system/components/justep/data/baasData" autoLoad="true"
      xid="paiData" saveAction="savePai_pictures" queryAction="queryPai_pictures"
      tableName="pai_pictures" url="/justep/pai" idColumn="fID" limit="-1" orderBy="fCreateTime:desc" directDelete="false"> 
      <column label="fID" name="fID" type="Integer" xid="default1"></column>
  <column label="文件名" name="fFileName" type="String" xid="default6"></column>
  <column label="预览地址" name="fPreviewPath" type="String" xid="default2"></column>
  <column label="下载地址" name="fDownloadPath" type="String" xid="default3"></column>
  <column label="建立时间" name="fCreateTime" type="String" xid="default4"></column>
  <column label="描述" name="fDescription" type="String" xid="default5"></column>
  <filter name="filter0" xid="filter1"></filter>
  <filter name="filter1" xid="filter2"></filter>
  <column label="上传者" name="fOwner" type="String" xid="xid1"></column>
  <column label="上传者姓名" name="fUserName" type="String" xid="xid4"></column>
  <column label="fTaskID" name="fTaskID" type="String" xid="xid5"></column>
  <column label="缩略图地址" name="fThumb" type="String" xid="xid6"></column></div>  
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="data" idColumn="id" autoNew="false" limit="-1" confirmRefresh="false" confirmDelete="false" onValueChanged="dataValueChanged"> 
      <column name="id" type="String" xid="xid3"/>  
      <column name="fileName" type="String" xid="xid2"/>  
      <data xid="default6">[{"id":"1","fileName":""}]</data> 
    </div> 
  <div component="$UI/system/components/justep/data/baasData" autoLoad="true" xid="paiUser" queryAction="queryPai_user" saveAction="savePai_user" url="/justep/pai" tableName="pai_user" idColumn="user_id"><column label="user_id" name="user_id" type="String" xid="default7"></column>
  <column label="user_name" name="user_name" type="String" xid="default8"></column>
  <column label="user_sex" name="user_sex" type="String" xid="default9"></column>
  <column label="admin" name="admin" type="String" xid="default10"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-content" xid="content1" _xid="C733E5C941F00001B9947E732FCEF5F0" style="bottom: 0px;"> 
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents" slidable="true" swipe="true" onActiveChange="contentsActiveChange" wrap="true">
   <div class="x-contents-content x-scroll-view" xid="picContent">
    <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView2" pullUpLabel="上拉加载...">
     <div class="x-content-center x-pull-down container" xid="div20">
      <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i4"></i>
      <span class="x-pull-down-label" xid="span7">下拉刷新...</span></div> 
     <div class="x-scroll-content" xid="div18">
   <div component="$UI/system/components/justep/list/list" class="x-list x-cards" xid="picList" data="paiData" limit="8" bind-click="imageClick">
    <ul class="x-list-template list-group" xid="listTemplateUl2">
     <li xid="li4" class="list-group-item">
      <div class="media" xid="media1">
       <div class="media-body" xid="mediaBody1">
        <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
         <div class="x-col" xid="col1">
          <div component="$UI/system/components/justep/output/output" xid="output1" bind-ref='ref("fUserName")' style="font-size:medium;font-weight:bold;font-family:方正舒体;font-style:normal;text-decoration:none;color:#000000;"></div></div> </div> 
        <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
         <div component="$UI/system/components/justep/output/output" class="x-output list-group-item-text fenhang" xid="output3" bind-ref='ref("fDescription")' style="font-family:华文隶书;font-size:medium;text-overflow:ellipsis;"></div></div> 
        <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
         <div class="x-col" xid="col9">
          <div xid="div2" style="overflow:hidden;background-repeat:no-repeat;background-position:center center;width:100%;height:200px;">
           <img alt="" xid="image" dir="rtl" bind-attr-src=' val("fThumb")' class="media-object" style="width:100%;" height="auto"></img></div> </div> </div> 
        <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
         <div class="x-col" xid="col3">
          <div component="$UI/system/components/justep/output/output" class="x-output list-group-item-text" xid="output2" bind-ref='ref("fCreateTime")' style="font-weight:bold;font-family:华文细黑;color:#999;text-align:right;" format="yyyy-MM-dd hh:mm"></div></div> </div> </div> </div> </li> </ul> </div> 
   <input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" bind-ref='$model.data.ref("fileName")' style="visibility:hidden;"></input></div><div class="x-content-center x-pull-up" xid="div17">
      <span class="x-pull-up-label" xid="span8">上拉加载...</span></div> 
  </div> </div> 
   
   
   </div><div class="text-center panel-body" bind-visible="$model.paiData.count()==0"> 
        <h5 class="text-muted"><![CDATA[还没有图片，快来上传吧！]]></h5> 
      </div>
      <div class="side-bar" xid="div1">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon uploadbtn" label="button" xid="button2" icon="round round-plus" onClick="chooseSheetPhoto">
    <i xid="i2" class="round round-plus" style="width:60;"></i>
    <span xid="span2"></span></a></div></div> 
  <!-- <div class="x-panel-bottom .o-tools" xid="bottom1">
  <div class="x-panel-bottom" xid="bottom2" height="48">
   <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group btn-group-justified o-tools" tabbed="true" xid="buttonGroup1">
     
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button1" icon="round round-search" onClick="chooseSheetPhoto">
          
   <i xid="i2" class="round round-search"></i>
   <span xid="span2"></span></a></div> </div></div> -->
   

</div> 
  <script src="native.js"></script>
   
  <script>
<!-- function chooseSheetPhoto(){
	var transferid = parseInt(new Date().getTime()/1000);
	NativeInteractive.chooseSheetPhoto({"webAppTransferID":transferid,"editType":1});
} -->
var para;
function OnChoosePhotoCb(datas){
//alert("OnChoosePhotoCb"+JSON.stringify(datas));
 var status = datas.result.status,
		params = datas.result.params;
			if(status==0){
			var str_para = JSON.stringify(params);		
			//alert("upload回调函数OnUploadCb:"+str_para+"status:"+status);
		//	document.getElementById("tip_choosephoto").style.display = "inline-block";
			var setting = {
				"uploadUrl":"http://172.24.141.3:8080/data/",
				"fileID":params.fileID,
				"fileName":params.fileName,
				"taskID":(new Date()).valueOf(),
				"nativePath":params.nativePath,
				"ownerID":"001"
			}
			NativeInteractive.uploadGivenFile(setting);
				
		}
		
}
function OnUploadGivenFileCb(datas){
	var status = datas.result.status,
		params = datas.result.params;
		
	if(params){
		var transferStatus = params.transferStatus;
		if(transferStatus=="Success"){
			//document.getElementById("tip_choosephoto").style.display = "none";
			var str_para = JSON.stringify(params);
		//	alert("OnUploadGivenFileCb 图片已上传:"+str_para);			
			 userBACK.transParas(params);
		}
	}
	
}
</script>
  
</div>
