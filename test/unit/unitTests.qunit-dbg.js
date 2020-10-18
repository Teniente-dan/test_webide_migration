/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nm_z87_gw100/Project_Name_CrudTemp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});