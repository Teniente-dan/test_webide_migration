sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","./model/models","./controller/ListSelector","./controller/ErrorHandler"],function(t,e,s,i,o){"use strict";return t.extend("nm_z87_gw100.Project_Name_CrudTemp.Component",{metadata:{manifest:"json"},init:function(){this.oListSelector=new i;this._oErrorHandler=new o(this);this.setModel(s.createDeviceModel(),"device");t.prototype.init.apply(this,arguments);this.getRouter().initialize()},destroy:function(){this.oListSelector.destroy();this._oErrorHandler.destroy();t.prototype.destroy.apply(this,arguments)},getContentDensityClass:function(){if(this._sContentDensityClass===undefined){if(document.body.classList.contains("sapUiSizeCozy")||document.body.classList.contains("sapUiSizeCompact")){this._sContentDensityClass=""}else if(!e.support.touch){this._sContentDensityClass="sapUiSizeCompact"}else{this._sContentDensityClass="sapUiSizeCozy"}}return this._sContentDensityClass}})});