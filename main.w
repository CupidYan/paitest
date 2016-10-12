<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window" title="会议记录">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:326px;left:243px;height:auto;" onActive="modelActive" onLoad="modelLoad"> 
    <div component="$UI/system/components/justep/data/baasData" autoLoad="true"
      xid="paiData" saveAction="savePai_pictures" queryAction="queryPai_pictures"
      tableName="pai_pictures" url="/justep/pai" idColumn="fID" limit="-1" orderBy="fCreateTime:desc"> 
      <column label="fID" name="fID" type="Integer" xid="default1"></column>
  <column label="文件名" name="fFileName" type="String" xid="default6"></column>
  <column label="预览地址" name="fPreviewPath" type="String" xid="default2"></column>
  <column label="下载地址" name="fDownloadPath" type="String" xid="default3"></column>
  <column label="建立时间" name="fCreateTime" type="String" xid="default4"></column>
  <column label="描述" name="fDescription" type="String" xid="default5"></column>
  <filter name="filter0" xid="filter1"></filter>
  <filter name="filter1" xid="filter2"></filter>
  <column label="上传者" name="fOwner" type="String" xid="xid1"></column></div>  
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="data" idColumn="id" autoNew="false" limit="-1" onValueChanged="dataValueChanged"
      confirmRefresh="false" confirmDelete="false"> 
      <column name="id" type="String" xid="xid3"/>  
      <column name="fileName" type="String" xid="xid2"/>  
      <data xid="default6">[{"id":"1","fileName":""}]</data> 
    </div> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="会议图片"
        class="x-titlebar"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="linear linear-volumehigh" onClick='{"operation":"window.close"}'
            xid="backBtn1"> 
            <i class="linear linear-volumehigh"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title">会议图片</div>  
        <div class="x-titlebar-right reverse"> 
          
          <div component="$UI/system/components/justep/attachment/attachmentSimple"
            actionUrl="/baas/justep/attachment/simpleFileStore" xid="attachmentSimple"
            bind-ref="data.ref(&quot;fileName&quot;)" class="o-uploadFile"> 
            <div class="x-attachment" xid="div6"> 
              <div class="x-attachment-content" xid="div9"> 
                <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload'"
                  xid="div15"> 
                  <div class="x-attachment-item x-item-upload" data-bind="visible:$state.get() == 'upload'"
                    xid="div16"/> 
                </div>  
                <div style="clear:both;" xid="div19"/> 
              </div> 
            </div> 
          </div> 
          
        <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="setBtn1" icon="round round-phone" onClick="setBtn1Click">
   <i xid="i1" class="round round-phone"></i>
   <span xid="span1"></span></a></div> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="content1" _xid="C733E5C941F00001B9947E732FCEF5F0" style="bottom: 0px;"> 
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents" slidable="true" swipe="true" onActiveChange="contentsActiveChange" wrap="true">
   <div class="x-contents-content x-scroll-view" xid="picContent">
    <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView2">
     <div class="x-content-center x-pull-down container" xid="div20">
      <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i4"></i>
      <span class="x-pull-down-label" xid="span7">下拉刷新...</span></div> 
     <div class="x-scroll-content" xid="div18">
      <div component="$UI/system/components/justep/list/list" class="x-list x-cards" xid="picList" data="paiData" limit="8" bind-click="imageClick">
       <ul class="x-list-template list-group" xid="listTemplateUl2">
        <li xid="li4" class="list-group-item">
         <div class="media" xid="media1">
          <div class="media-left" xid="mediaLeft1">
           <img alt="" xid="image" style="width:120px;height:89px;width:38vw;height: 25.333333333333vw;max-width:120px;max-height:89px;" class="o-img media-object" bind-attr-src='val("fPreviewPath")' dir="rtl"></img></div> 
          <div class="media-body" xid="mediaBody1">
           <div component="$UI/system/components/justep/output/output" class="x-output list-group-item-heading" xid="output1" bind-ref='ref("fFileName")' style="font-size:14px;font-weight:bold"></div>
           <div component="$UI/system/components/justep/output/output" class="x-output list-group-item-text" xid="output2" bind-ref='ref("fCreateTime")' style="font-weight: bold;"></div>
           <div component="$UI/system/components/justep/output/output" class="x-output list-group-item-text" xid="output3" bind-ref='ref("fDescription")'></div></div> </div> </li> </ul> </div> 
  <input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" bind-ref='$model.data.ref("fileName")' value="sdsa sas"></input></div> 
     <div class="x-content-center x-pull-up" xid="div17">
      <span class="x-pull-up-label" xid="span8">加载更多...</span></div> </div> </div> 
   
   
   </div><div class="text-center panel-body" bind-visible="$model.paiData.count()==0"> 
        <h5 class="text-muted"><![CDATA[还没有图片，快来上传吧！]]></h5> 
      </div>
      </div> 
  </div> 
</div>
