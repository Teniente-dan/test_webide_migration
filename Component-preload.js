//@ui5-bundle nm_z87_gw100/Project_Name_CrudTemp/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"nm_z87_gw100/Project_Name_CrudTemp/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","./model/models","./controller/ListSelector","./controller/ErrorHandler"],function(t,e,s,i,o){"use strict";return t.extend("nm_z87_gw100.Project_Name_CrudTemp.Component",{metadata:{manifest:"json"},init:function(){this.oListSelector=new i;this._oErrorHandler=new o(this);this.setModel(s.createDeviceModel(),"device");t.prototype.init.apply(this,arguments);this.getRouter().initialize()},destroy:function(){this.oListSelector.destroy();this._oErrorHandler.destroy();t.prototype.destroy.apply(this,arguments)},getContentDensityClass:function(){if(this._sContentDensityClass===undefined){if(document.body.classList.contains("sapUiSizeCozy")||document.body.classList.contains("sapUiSizeCompact")){this._sContentDensityClass=""}else if(!e.support.touch){this._sContentDensityClass="sapUiSizeCompact"}else{this._sContentDensityClass="sapUiSizeCozy"}}return this._sContentDensityClass}})});
},
	"nm_z87_gw100/Project_Name_CrudTemp/controller/App.controller.js":function(){sap.ui.define(["./BaseController","sap/ui/model/json/JSONModel"],function(e,t){"use strict";return e.extend("nm_z87_gw100.Project_Name_CrudTemp.controller.App",{onInit:function(){var e,n,o=this.getView().getBusyIndicatorDelay();e=new t({busy:true,delay:0,layout:"OneColumn",previousLayout:"",actionButtonsInfo:{midColumn:{fullScreen:false}}});this.setModel(e,"appView");n=function(){e.setProperty("/busy",false);e.setProperty("/delay",o)};this.getOwnerComponent().getModel().metadataLoaded().then(n);this.getOwnerComponent().getModel().attachMetadataFailed(n);this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())}})});
},
	"nm_z87_gw100/Project_Name_CrudTemp/controller/BaseController.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History"],function(e,t){"use strict";return e.extend("nm_z87_gw100.Project_Name_CrudTemp.controller.BaseController",{getRouter:function(){return this.getOwnerComponent().getRouter()},getModel:function(e){return this.getView().getModel(e)},setModel:function(e,t){return this.getView().setModel(e,t)},getResourceBundle:function(){return this.getOwnerComponent().getModel("i18n").getResourceBundle()},onNavBack:function(){var e=t.getInstance().getPreviousHash();if(e!==undefined){history.go(-1)}else{this.getRouter().navTo("master",{},true)}}})});
},
	"nm_z87_gw100/Project_Name_CrudTemp/controller/Detail.controller.js":function(){sap.ui.define(["./BaseController","sap/ui/model/json/JSONModel","../model/formatter","sap/m/library"],function(e,t,i,n){"use strict";var o=n.URLHelper;return e.extend("nm_z87_gw100.Project_Name_CrudTemp.controller.Detail",{formatter:i,onInit:function(){var e=new t({busy:false,delay:0,lineItemListTitle:this.getResourceBundle().getText("detailLineItemTableHeading")});this.getRouter().getRoute("object").attachPatternMatched(this._onObjectMatched,this);this.setModel(e,"detailView");this.getOwnerComponent().getModel().metadataLoaded().then(this._onMetadataLoaded.bind(this))},onSendEmailPress:function(){var e=this.getModel("detailView");o.triggerEmail(null,e.getProperty("/shareSendEmailSubject"),e.getProperty("/shareSendEmailMessage"))},onListUpdateFinished:function(e){var t,i=e.getParameter("total"),n=this.getModel("detailView");if(this.byId("lineItemsList").getBinding("items").isLengthFinal()){if(i){t=this.getResourceBundle().getText("detailLineItemTableHeadingCount",[i])}else{t=this.getResourceBundle().getText("detailLineItemTableHeading")}n.setProperty("/lineItemListTitle",t)}},_onObjectMatched:function(e){var t=e.getParameter("arguments").objectId;this.getModel("appView").setProperty("/layout","TwoColumnsMidExpanded");this.getModel().metadataLoaded().then(function(){var e=this.getModel().createKey("SupTextSet",{CountryId:t});this._bindView("/"+e)}.bind(this))},_bindView:function(e){var t=this.getModel("detailView");t.setProperty("/busy",false);this.getView().bindElement({path:e,events:{change:this._onBindingChange.bind(this),dataRequested:function(){t.setProperty("/busy",true)},dataReceived:function(){t.setProperty("/busy",false)}}})},_onBindingChange:function(){var e=this.getView(),t=e.getElementBinding();if(!t.getBoundContext()){this.getRouter().getTargets().display("detailObjectNotFound");this.getOwnerComponent().oListSelector.clearMasterListSelection();return}var i=t.getPath(),n=this.getResourceBundle(),o=e.getModel().getObject(i),a=o.CountryId,s=o.CountryId,r=this.getModel("detailView");this.getOwnerComponent().oListSelector.selectAListItem(i);r.setProperty("/shareSendEmailSubject",n.getText("shareSendEmailObjectSubject",[a]));r.setProperty("/shareSendEmailMessage",n.getText("shareSendEmailObjectMessage",[s,a,location.href]))},_onMetadataLoaded:function(){var e=this.getView().getBusyIndicatorDelay(),t=this.getModel("detailView"),i=this.byId("lineItemsList"),n=i.getBusyIndicatorDelay();t.setProperty("/delay",0);t.setProperty("/lineItemTableDelay",0);i.attachEventOnce("updateFinished",function(){t.setProperty("/lineItemTableDelay",n)});t.setProperty("/busy",true);t.setProperty("/delay",e)},onCloseDetailPress:function(){this.getModel("appView").setProperty("/actionButtonsInfo/midColumn/fullScreen",false);this.getOwnerComponent().oListSelector.clearMasterListSelection();this.getRouter().navTo("master")},toggleFullScreen:function(){var e=this.getModel("appView").getProperty("/actionButtonsInfo/midColumn/fullScreen");this.getModel("appView").setProperty("/actionButtonsInfo/midColumn/fullScreen",!e);if(!e){this.getModel("appView").setProperty("/previousLayout",this.getModel("appView").getProperty("/layout"));this.getModel("appView").setProperty("/layout","MidColumnFullScreen")}else{this.getModel("appView").setProperty("/layout",this.getModel("appView").getProperty("/previousLayout"))}}})});
},
	"nm_z87_gw100/Project_Name_CrudTemp/controller/DetailObjectNotFound.controller.js":function(){sap.ui.define(["./BaseController"],function(e){"use strict";return e.extend("nm_z87_gw100.Project_Name_CrudTemp.controller.DetailObjectNotFound",{})});
},
	"nm_z87_gw100/Project_Name_CrudTemp/controller/DetailObjectNotFound.js":function(){sap.ui.define(["./BaseController"],function(e){"use strict";return e.extend("nm_z87_gw100.Project_Name_CrudTemp.controller.DetailObjectNotFound",{})});
},
	"nm_z87_gw100/Project_Name_CrudTemp/controller/ErrorHandler.js":function(){sap.ui.define(["sap/ui/base/Object","sap/m/MessageBox"],function(e,s){"use strict";return e.extend("nm_z87_gw100.Project_Name_CrudTemp.controller.ErrorHandler",{constructor:function(e){this._oResourceBundle=e.getModel("i18n").getResourceBundle();this._oComponent=e;this._oModel=e.getModel();this._bMessageOpen=false;this._sErrorText=this._oResourceBundle.getText("errorText");this._oModel.attachMetadataFailed(function(e){var s=e.getParameters();this._showServiceError(s.response)},this);this._oModel.attachRequestFailed(function(e){var s=e.getParameters();if(s.response.statusCode!=="404"||s.response.statusCode===404&&s.response.responseText.indexOf("Cannot POST")===0){this._showServiceError(s.response)}},this)},_showServiceError:function(e){if(this._bMessageOpen){return}this._bMessageOpen=true;s.error(this._sErrorText,{id:"serviceErrorMessageBox",details:e,styleClass:this._oComponent.getContentDensityClass(),actions:[s.Action.CLOSE],onClose:function(){this._bMessageOpen=false}.bind(this)})}})});
},
	"nm_z87_gw100/Project_Name_CrudTemp/controller/ListSelector.js":function(){sap.ui.define(["sap/ui/base/Object","sap/base/Log"],function(t,e){"use strict";return t.extend("nm_z87_gw100.Project_Name_CrudTemp.controller.ListSelector",{constructor:function(){this._oWhenListHasBeenSet=new Promise(function(t){this._fnResolveListHasBeenSet=t}.bind(this));this.oWhenListLoadingIsDone=new Promise(function(t,e){this._oWhenListHasBeenSet.then(function(n){n.getBinding("items").attachEventOnce("dataReceived",function(){if(this._oList.getItems().length){t({list:n})}else{e({list:n})}}.bind(this))}.bind(this))}.bind(this))},setBoundMasterList:function(t){this._oList=t;this._fnResolveListHasBeenSet(t)},selectAListItem:function(t){this.oWhenListLoadingIsDone.then(function(){var e=this._oList,n;if(e.getMode()==="None"){return}n=e.getSelectedItem();if(n&&n.getBindingContext().getPath()===t){return}e.getItems().some(function(n){if(n.getBindingContext()&&n.getBindingContext().getPath()===t){e.setSelectedItem(n);return true}})}.bind(this),function(){e.warning("Could not select the list item with the path"+t+" because the list encountered an error or had no items")})},clearMasterListSelection:function(){this._oWhenListHasBeenSet.then(function(){this._oList.removeSelections(true)}.bind(this))}})});
},
	"nm_z87_gw100/Project_Name_CrudTemp/controller/Master.controller.js":function(){sap.ui.define(["./BaseController","sap/ui/model/json/JSONModel","sap/ui/model/Filter","sap/ui/model/Sorter","sap/ui/model/FilterOperator","sap/m/GroupHeaderListItem","sap/ui/Device","sap/ui/core/Fragment","../model/formatter"],function(t,e,i,r,s,o,a,n,l){"use strict";return t.extend("nm_z87_gw100.Project_Name_CrudTemp.controller.Master",{formatter:l,onInit:function(){var t=this.byId("list"),e=this._createViewModel(),i=t.getBusyIndicatorDelay();this._oList=t;this._oListFilterState={aFilter:[],aSearch:[]};this.setModel(e,"masterView");t.attachEventOnce("updateFinished",function(){e.setProperty("/delay",i)});this.getView().addEventDelegate({onBeforeFirstShow:function(){this.getOwnerComponent().oListSelector.setBoundMasterList(t)}.bind(this)});this.getRouter().getRoute("master").attachPatternMatched(this._onMasterMatched,this);this.getRouter().attachBypassed(this.onBypassed,this)},onUpdateFinished:function(t){this._updateListItemCount(t.getParameter("total"))},onSearch:function(t){if(t.getParameters().refreshButtonPressed){this.onRefresh();return}var e=t.getParameter("query");if(e){this._oListFilterState.aSearch=[new i("CountryId",s.Contains,e)]}else{this._oListFilterState.aSearch=[]}this._applyFilterSearch()},onRefresh:function(){this._oList.getBinding("items").refresh()},onOpenViewSettings:function(t){var e="filter";if(t.getSource()instanceof sap.m.Button){var i=t.getSource().getId();if(i.match("sort")){e="sort"}else if(i.match("group")){e="group"}}if(!this.byId("viewSettingsDialog")){n.load({id:this.getView().getId(),name:"nm_z87_gw100.Project_Name_CrudTemp.view.ViewSettingsDialog",controller:this}).then(function(t){this.getView().addDependent(t);t.addStyleClass(this.getOwnerComponent().getContentDensityClass());t.open(e)}.bind(this))}else{this.byId("viewSettingsDialog").open(e)}},onConfirmViewSettingsDialog:function(t){this._applySortGroup(t)},_applySortGroup:function(t){var e=t.getParameters(),i,s,o=[];i=e.sortItem.getKey();s=e.sortDescending;o.push(new r(i,s));this._oList.getBinding("items").sort(o)},onSelectionChange:function(t){var e=t.getSource(),i=t.getParameter("selected");if(!(e.getMode()==="MultiSelect"&&!i)){this._showDetail(t.getParameter("listItem")||t.getSource())}},onBypassed:function(){this._oList.removeSelections(true)},createGroupHeader:function(t){return new o({title:t.text,upperCase:false})},onNavBack:function(){history.go(-1)},_createViewModel:function(){return new e({isFilterBarVisible:false,filterBarLabel:"",delay:0,title:this.getResourceBundle().getText("masterTitleCount",[0]),noDataText:this.getResourceBundle().getText("masterListNoDataText"),sortBy:"CountryId",groupBy:"None"})},_onMasterMatched:function(){this.getModel("appView").setProperty("/layout","OneColumn")},_showDetail:function(t){var e=!a.system.phone;this.getModel("appView").setProperty("/layout","TwoColumnsMidExpanded");this.getRouter().navTo("object",{objectId:t.getBindingContext().getProperty("CountryId")},e)},_updateListItemCount:function(t){var e;if(this._oList.getBinding("items").isLengthFinal()){e=this.getResourceBundle().getText("masterTitleCount",[t]);this.getModel("masterView").setProperty("/title",e)}},_applyFilterSearch:function(){var t=this._oListFilterState.aSearch.concat(this._oListFilterState.aFilter),e=this.getModel("masterView");this._oList.getBinding("items").filter(t,"Application");if(t.length!==0){e.setProperty("/noDataText",this.getResourceBundle().getText("masterListNoDataWithFilterOrSearchText"))}else if(this._oListFilterState.aSearch.length>0){e.setProperty("/noDataText",this.getResourceBundle().getText("masterListNoDataText"))}},_updateFilterBar:function(t){var e=this.getModel("masterView");e.setProperty("/isFilterBarVisible",this._oListFilterState.aFilter.length>0);e.setProperty("/filterBarLabel",this.getResourceBundle().getText("masterFilterBarText",[t]))}})});
},
	"nm_z87_gw100/Project_Name_CrudTemp/controller/NotFound.controller.js":function(){sap.ui.define(["./BaseController"],function(t){"use strict";return t.extend("nm_z87_gw100.Project_Name_CrudTemp.controller.NotFound",{onInit:function(){this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed,this)},_onNotFoundDisplayed:function(){this.getModel("appView").setProperty("/layout","OneColumn")}})});
},
	"nm_z87_gw100/Project_Name_CrudTemp/i18n/i18n.properties":'# This is the resource bundle for title_CrudTemp\n\n#XTIT: Application name\nappTitle=title_CrudTemp\n\n#YDES: Application description\nappDescription=asdfadsf\n\n#~~~ Master View ~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n#XTIT: Master view title with placeholder for the number of items\nmasterTitleCount=<SupTextSet> ({0})\n\n#XTOL: Tooltip for the search field\nmasterSearchTooltip=Enter an <SupTextSet> name or a part of it.\n\n#XBLI: text for a list with no data\nmasterListNoDataText=No <SupTextSetPlural> are currently available\n\n#XBLI: text for a list with no data with filter or search\nmasterListNoDataWithFilterOrSearchText=No matching <SupTextSetPlural> found\n\n#XSEL: Option to sort the master list by CountryId\nmasterSort1=Sort By <CountryId>\n\n\n#~~~ Detail View ~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n#XTOL: Icon Tab Bar Info\ndetailIconTabBarInfo=Info\n\n#XTOL: Icon Tab Bar Attachments\ndetailIconTabBarAttachments=Attachments\n\n#XTOL: Tooltip text for close column button\ncloseColumn=Close\n\n#XBLI: Text for the Agencies table with no data\ndetailLineItemTableNoDataText=No <AgenciesPlural>\n\n#XTIT: Title of the Agencies table\ndetailLineItemTableHeading=<AgenciesPlural>\n\n#XTIT: Title of the Agencies table\ndetailLineItemTableHeadingCount=<AgenciesPlural> ({0})\n\n#XGRP: Title for the CountryCode column in the Agencies table\ndetailLineItemTableIDColumn=<FirstColumnName>\n\n#XGRP: Title for the  column in the Agencies table\ndetailLineItemTableUnitNumberColumn=<LastColumnName>\n\n#XTIT: Send E-Mail subject\nshareSendEmailObjectSubject=<Email subject including object identifier PLEASE REPLACE ACCORDING TO YOUR USE CASE> {0}\n\n#YMSG: Send E-Mail message\nshareSendEmailObjectMessage=<Email body PLEASE REPLACE ACCORDING TO YOUR USE CASE> {0} (id: {1})\r\n{2}\n\n#XBUT: Text for the send e-mail button\nsendEmail=Send E-Mail\n\n#XTIT: Title text for the price\npriceTitle=Price\n\n#~~~ Not Found View ~~~~~~~~~~~~~~~~~~~~~~~\n\n#XTIT: Not found view ti+
tle\nnotFoundTitle=Not Found\n\n#YMSG: The SupTextSet not found text is displayed when there is no SupTextSet with this id\nnoObjectFoundText=This <SupTextSet> is not available\n\n#YMSG: The not found text is displayed when there was an error loading the resource (404 error)\nnotFoundText=The requested resource was not found\n\n#~~~ Not Available View ~~~~~~~~~~~~~~~~~~~~~~~\n\n#XTIT: Master view title\nnotAvailableViewTitle=<SupTextSet>\n\n#~~~ Error Handling ~~~~~~~~~~~~~~~~~~~~~~~\n\n#YMSG: Error dialog description\nerrorText=Sorry, a technical error occurred! Please try again later.',
	"nm_z87_gw100/Project_Name_CrudTemp/localService/metadata.xml":'<edmx:Edmx Version="1.0" xmlns:edmx="http://schemas.microsoft.com/ado/2007/06/edmx"\n\txmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" xmlns:sap="http://www.sap.com/Protocols/SAPData"><edmx:DataServices m:DataServiceVersion="2.0"><Schema Namespace="ZGW100_87_STUDENT_SRV" xml:lang="es" sap:schema-version="1" xmlns="http://schemas.microsoft.com/ado/2008/09/edm"><EntityType Name="Agency" sap:content-version="1"><Key><PropertyRef Name="Client"/><PropertyRef Name="AgencyId"/></Key><Property Name="Client" Type="Edm.String" Nullable="false" MaxLength="3" sap:unicode="false" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="AgencyId" Type="Edm.String" Nullable="false" MaxLength="6" sap:unicode="false" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Name" Type="Edm.String" Nullable="false" MaxLength="80" sap:unicode="false" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Street" Type="Edm.String" Nullable="false" MaxLength="60" sap:unicode="false" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="PostalCode" Type="Edm.String" Nullable="false" MaxLength="10" sap:unicode="false" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="City" Type="Edm.String" Nullable="false" MaxLength="40" sap:unicode="false" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="CountryCode" Type="Edm.String" Nullable="false" MaxLength="3" sap:unicode="false" sap:label="País" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="PhoneNumber" Type="Edm.String" Nullable="false" MaxLength="30" sap:unicode="false" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="EmailAddress" Type="Edm.String" Nullable="false" MaxLength="256" sap:unicode="false" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="WebAddress" Type="Edm.String" Nullable="false" MaxLength="256" sap:unicode="false" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/><NavigationProperty Name="Country" Relationship="ZGW100_87_STUDENT_SRV.SupText_Agency" FromRole="ToRole_SupText_Agency"\n\t\t\t\t\tToRole="FromRole_SupText_Agency"/></EntityType><EntityType Name="SupText" sap:content-version="1"><Key><PropertyRef Name="CountryId"/></Key><Property Name="CountryId" Type="Edm.String" Nullable="false" MaxLength="3" sap:unicode="false" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="LongText" Type="Edm.String" Nullable="false" MaxLength="256" sap:unicode="false" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><NavigationProperty Name="Agencies" Relationship="ZGW100_87_STUDENT_SRV.SupText_Agency" FromRole="FromRole_SupText_Agency"\n\t\t\t\t\tToRole="ToRole_SupText_Agency"/></EntityType><Association Name="SupText_Agency" sap:content-version="1"><End Type="ZGW100_87_STUDENT_SRV.SupText" Multiplicity="1" Role="FromRole_SupText_Agency"/><End Type="ZGW100_87_STUDENT_SRV.Agency" Multiplicity="*" Role="ToRole_SupText_Agency"/><ReferentialConstraint><Principal Role="FromRole_SupText_Agency"><PropertyRef Name="CountryId"/></Principal><Dependent Role="ToRole_SupText_Agency"><PropertyRef Name="CountryCode"/></Dependent></ReferentialConstraint></Association><EntityContainer Name="ZGW100_87_STUDENT_SRV_Entities" m:IsDefaultEntityContainer="true" sap:supported-formats="atom json xlsx"><EntitySet Name="AgencySet" EntityType="ZGW100_87_STUDENT_SRV.Agency" sap:creatable="false" sap:updatable="false" sap:deletable="false"\n\t\t\t\tsap:pageable="false" sap:content-version="1"/><EntitySet Name="SupTextSet" EntityType="ZGW100_87_STUDENT_SRV.SupText" sap:creatable="false" sap:updatable="false" sap:deletable="false"\n\t\t\t\tsap:pageable="false" sap:content-version="1"/><AssociationSet Name="SupText_AgencySet" Association="ZGW100_87_STUDENT_SRV.SupText_Agency" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:deletable="false" sap:content-version="1"><End EntitySet="SupTextSet" Role="FromRole_SupText_Agency"/><End EntitySet="AgencySet" Role="ToRole_SupText_Agency"/></AssociationSet></EntityContainer><atom:link rel="self" href="http://1909FAA-LKMEX.SAPINNOVATION.CLOUD:8001/sap/opu/odata/sap/ZGW100_87_STUDENT_SRV/$metadata"\n\t\t\t\txmlns:atom="http://www.w3.org/2005/Atom"/><atom:link rel="latest-version" href="http://1909FAA-LKMEX.SAPINNOVATION.CLOUD:8001/sap/opu/odata/sap/ZGW100_87_STUDENT_SRV/$metadata"\n\t\t\t\txmlns:atom="http://www.w3.org/2005/Atom"/></Schema></edmx:DataServices></edmx:Edmx>',
	"nm_z87_gw100/Project_Name_CrudTemp/localService/mockserver.js":function(){sap.ui.define(["sap/ui/core/util/MockServer","sap/ui/model/json/JSONModel","sap/base/Log","sap/base/util/UriParameters"],function(e,t,r,a){"use strict";var o,i="nm_z87_gw100/Project_Name_CrudTemp/",n=i+"localService/mockdata";var s={init:function(s){var u=s||{};return new Promise(function(s,c){var p=sap.ui.require.toUrl(i+"manifest.json"),f=new t(p);f.attachRequestCompleted(function(){var t=new a(window.location.href),c=sap.ui.require.toUrl(n),p=f.getProperty("/sap.app/dataSources/mainService"),l=sap.ui.require.toUrl(i+p.settings.localUri),d=/.*\/$/.test(p.uri)?p.uri:p.uri+"/";d=d&&new URI(d).absoluteTo(sap.ui.require.toUrl(i)).toString();if(!o){o=new e({rootUri:d})}else{o.stop()}e.config({autoRespond:true,autoRespondAfter:u.delay||t.get("serverDelay")||500});o.simulate(l,{sMockdataBaseUrl:c,bGenerateMissingMockData:true});var m=o.getRequests();var g=function(e,t,r){r.response=function(r){r.respond(e,{"Content-Type":"text/plain;charset=utf-8"},t)}};if(u.metadataError||t.get("metadataError")){m.forEach(function(e){if(e.path.toString().indexOf("$metadata")>-1){g(500,"metadata Error",e)}})}var v=u.errorType||t.get("errorType"),w=v==="badRequest"?400:500;if(v){m.forEach(function(e){g(w,v,e)})}o.setRequests(m);o.start();r.info("Running the app with mock data");s()});f.attachRequestFailed(function(){var e="Failed to load application manifest";r.error(e);c(new Error(e))})})},getMockServer:function(){return o}};return s});
},
	"nm_z87_gw100/Project_Name_CrudTemp/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"nm_z87_gw100.Project_Name_CrudTemp","type":"application","i18n":"i18n/i18n.properties","title":"{{appTitle}}","description":"{{appDescription}}","applicationVersion":{"version":"1.0.0"},"resources":"resources.json","dataSources":{"mainService":{"uri":"/sap/opu/odata/sap/ZGW100_87_STUDENT_SRV/","type":"OData","settings":{"odataVersion":"2.0","localUri":"localService/metadata.xml"}}},"sourceTemplate":{"id":"sap.ui.ui5-template-plugin.2masterdetail","version":"1.77.2"}},"sap.ui":{"technology":"UI5","icons":{"icon":"sap-icon://detail-view","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"nm_z87_gw100.Project_Name_CrudTemp.view.App","type":"XML","async":true,"id":"app"},"dependencies":{"minUI5Version":"1.66.0","libs":{"sap.ui.core":{},"sap.m":{},"sap.f":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"nm_z87_gw100.Project_Name_CrudTemp.i18n.i18n"}},"":{"dataSource":"mainService","preload":true}},"routing":{"config":{"routerClass":"sap.f.routing.Router","viewType":"XML","viewPath":"nm_z87_gw100.Project_Name_CrudTemp.view","controlId":"layout","controlAggregation":"beginColumnPages","bypassed":{"target":"notFound"},"async":true},"routes":[{"pattern":"","name":"master","target":"master"},{"pattern":"SupTextSet/{objectId}","name":"object","target":["master","object"]}],"targets":{"master":{"viewName":"Master","viewLevel":1,"viewId":"master"},"object":{"viewName":"Detail","viewId":"detail","viewLevel":1,"controlAggregation":"midColumnPages"},"detailObjectNotFound":{"viewName":"DetailObjectNotFound","viewId":"detailObjectNotFound","controlAggregation":"midColumnPages"},"notFound":{"viewName":"NotFound","viewId":"notFound"}}}},"sap.platform.abap":{"uri":"/sap/bc/ui5_ui5/sap/z87tmd_odata/webapp","_version":"1.1.0"}}',
	"nm_z87_gw100/Project_Name_CrudTemp/model/formatter.js":function(){sap.ui.define([],function(){"use strict";return{currencyValue:function(e){if(!e){return""}return parseFloat(e).toFixed(2)}}});
},
	"nm_z87_gw100/Project_Name_CrudTemp/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"nm_z87_gw100/Project_Name_CrudTemp/view/App.view.xml":'<mvc:View\n\tcontrollerName="nm_z87_gw100.Project_Name_CrudTemp.controller.App"\n\tdisplayBlock="true"\n\theight="100%"\n\txmlns="sap.m"\n\txmlns:f="sap.f"\n\txmlns:mvc="sap.ui.core.mvc"><App\n\t\tid="app"\n\t\tbusy="{appView>/busy}"\n\t\tbusyIndicatorDelay="{appView>/delay}"><f:FlexibleColumnLayout\n\t\t\tid="layout"\n\t\t\tlayout="{appView>/layout}"\n\t\t\tbackgroundDesign="Translucent"></f:FlexibleColumnLayout></App></mvc:View>',
	"nm_z87_gw100/Project_Name_CrudTemp/view/Detail.view.xml":'<mvc:View\n\tcontrollerName="nm_z87_gw100.Project_Name_CrudTemp.controller.Detail"\n\txmlns="sap.m"\n\txmlns:semantic="sap.f.semantic"\n\txmlns:mvc="sap.ui.core.mvc"><semantic:SemanticPage\n\t\tid="detailPage"\n\t\tbusy="{detailView>/busy}"\n\t\tbusyIndicatorDelay="{detailView>/delay}"><semantic:titleHeading><Title\n\t\t\t\ttext="{CountryId}"\n\t\t\t\tlevel="H2"/></semantic:titleHeading><semantic:headerContent><ObjectAttribute title="{i18n>priceTitle}"/></semantic:headerContent><semantic:content><Table\n\t\t\t\tid="lineItemsList"\n\t\t\t\twidth="auto"\n\t\t\t\titems="{Agencies}"\n\t\t\t\tupdateFinished=".onListUpdateFinished"\n\t\t\t\tnoDataText="{i18n>detailLineItemTableNoDataText}"\n\t\t\t\tbusyIndicatorDelay="{detailView>/lineItemTableDelay}"><headerToolbar><Toolbar><Title\n\t\t\t\t\t\t\tid="lineItemsTitle"\n\t\t\t\t\t\t\ttext="{detailView>/lineItemListTitle}"\n\t\t\t\t\t\t\ttitleStyle="H3"\n\t\t\t\t\t\t\tlevel="H3"/></Toolbar></headerToolbar><columns><Column><Text text="{i18n>detailLineItemTableIDColumn}"/></Column><Column\n\t\t\t\t\t\tminScreenWidth="Tablet"\n\t\t\t\t\t\tdemandPopin="true"\n\t\t\t\t\t\thAlign="End"><Text text="{i18n>detailLineItemTableUnitNumberColumn}"/></Column></columns><items><ColumnListItem><cells><ObjectIdentifier\n\t\t\t\t\t\t\t\ttitle="{CountryCode}"\n\t\t\t\t\t\t\t\ttext="{AgencyId}"/><ObjectNumber\n/></cells></ColumnListItem></items></Table></semantic:content><semantic:sendEmailAction><semantic:SendEmailAction\n\t\t\t\tid="shareEmail"\n\t\t\t\tpress=".onSendEmailPress"/></semantic:sendEmailAction><semantic:closeAction><semantic:CloseAction\n\t\t\t\t\tid="closeColumn"\n\t\t\t\t\tpress=".onCloseDetailPress"/></semantic:closeAction><semantic:fullScreenAction><semantic:FullScreenAction\n\t\t\t\t\tid="enterFullScreen"\n\t\t\t\t\tvisible="{= !${device>/system/phone} &amp;&amp; !${appView>/actionButtonsInfo/midColumn/fullScreen}}"\n\t\t\t\t\tpress=".toggleFullScreen"/></semantic:fullScreenAction><semantic:exitFullScreenAction><semantic:ExitFullScreenAction\n\t\t\t\t\tid="exitFullScreen"\n\t\t\t\t\tvisible="{= !${device>/system/phone} &amp;&amp; ${appView>/actionButtonsInfo/midColumn/fullScreen}}"\n\t\t\t\t\tpress=".toggleFullScreen"/></semantic:exitFullScreenAction></semantic:SemanticPage></mvc:View>',
	"nm_z87_gw100/Project_Name_CrudTemp/view/DetailObjectNotFound.view.xml":'<mvc:View\n\tcontrollerName="nm_z87_gw100.Project_Name_CrudTemp.controller.DetailObjectNotFound"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"><MessagePage\n\t\tid="page"\n\t\ttitle="{i18n>detailTitle}"\n\t\ttext="{i18n>noObjectFoundText}"\n\t\ticon="sap-icon://product"\n\t\tdescription=""\n\t\tshowNavButton="{=\n\t\t\t${device>/system/phone} ||\n\t\t\t${device>/system/tablet} &amp;&amp;\n\t\t\t${device>/orientation/portrait}\n\t\t}"\n\t\tnavButtonPress=".onNavBack"></MessagePage></mvc:View>',
	"nm_z87_gw100/Project_Name_CrudTemp/view/Master.view.xml":'<mvc:View\n\tcontrollerName="nm_z87_gw100.Project_Name_CrudTemp.controller.Master"\n\txmlns="sap.m"\n\txmlns:semantic="sap.f.semantic"\n\txmlns:mvc="sap.ui.core.mvc"><semantic:SemanticPage\n\t\tid="masterPage"\n\t\tpreserveHeaderStateOnScroll="true"\n\t\ttoggleHeaderOnTitleClick="false"><semantic:titleHeading><Title\n\t\t\t\tid="masterPageTitle"\n\t\t\t\ttext="{masterView>/title}"\n\t\t\t\tlevel="H2"/></semantic:titleHeading><semantic:content><List\n\t\t\t\tid="list"\n\t\t\t\twidth="auto"\n\t\t\t\tclass="sapFDynamicPageAlignContent"\n\t\t\t\titems="{\n\t\t\t\t\tpath: \'/SupTextSet\',\n\t\t\t\t\tsorter: {\n\t\t\t\t\t\tpath: \'CountryId\',\n\t\t\t\t\t\tdescending: false\n\t\t\t\t\t},\n\t\t\t\t\tgroupHeaderFactory: \'.createGroupHeader\'\n\t\t\t\t}"\n\t\t\t\tbusyIndicatorDelay="{masterView>/delay}"\n\t\t\t\tnoDataText="{masterView>/noDataText}"\n\t\t\t\tmode="{= ${device>/system/phone} ? \'None\' : \'SingleSelectMaster\'}"\n\t\t\t\tgrowing="true"\n\t\t\t\tgrowingScrollToLoad="true"\n\t\t\t\tupdateFinished=".onUpdateFinished"\n\t\t\t\tselectionChange=".onSelectionChange"><headerToolbar><OverflowToolbar><SearchField\n\t\t\t\t\t\t\tid="searchField"\n\t\t\t\t\t\t\tshowRefreshButton="true"\n\t\t\t\t\t\t\ttooltip="{i18n>masterSearchTooltip}"\n\t\t\t\t\t\t\tsearch=".onSearch"\n\t\t\t\t\t\t\twidth="auto"><layoutData><OverflowToolbarLayoutData\n\t\t\t\t\t\t\t\t\tminWidth="150px"\n\t\t\t\t\t\t\t\t\tmaxWidth="240px"\n\t\t\t\t\t\t\t\t\tshrinkable="true"\n\t\t\t\t\t\t\t\t\tpriority="NeverOverflow"/></layoutData></SearchField><ToolbarSpacer/><Button\n\t\t\t\t\t\t\tid="sortButton"\n\t\t\t\t\t\t\tpress=".onOpenViewSettings"\n\t\t\t\t\t\t\ticon="sap-icon://sort"\n\t\t\t\t\t\t\ttype="Transparent"/></OverflowToolbar></headerToolbar><items><ObjectListItem\n\t\t\t\t\t\ttype="Navigation"\n\t\t\t\t\t\tpress=".onSelectionChange"\n\t\t\t\t\t\ttitle="{CountryId}"\n></ObjectListItem></items></List></semantic:content></semantic:SemanticPage></mvc:View>',
	"nm_z87_gw100/Project_Name_CrudTemp/view/NotFound.view.xml":'<mvc:View\n\tcontrollerName="nm_z87_gw100.Project_Name_CrudTemp.controller.NotFound"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"><MessagePage\n\t\tid="page"\n\t\ttitle="{i18n>notFoundTitle}"\n\t\ttext="{i18n>notFoundText}"\n\t\ticon="sap-icon://document"\n\t\tshowNavButton="true"\n\t\tnavButtonPress=".onNavBack"></MessagePage></mvc:View>',
	"nm_z87_gw100/Project_Name_CrudTemp/view/ViewSettingsDialog.fragment.xml":'<core:FragmentDefinition\n\txmlns="sap.m"\n\txmlns:core="sap.ui.core"><ViewSettingsDialog\n\t\tid="viewSettingsDialog"\n\t\tconfirm=".onConfirmViewSettingsDialog"><sortItems><ViewSettingsItem\n\t\t\t\ttext="{i18n>masterSort1}"\n\t\t\t\tkey="CountryId"\n\t\t\t\tselected="true"/></sortItems></ViewSettingsDialog></core:FragmentDefinition>'
}});