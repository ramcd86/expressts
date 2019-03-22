"use strict";
exports.__esModule = true;
var HomeComponent_1 = require("./HomeComponent");
var BootstrapClientComponent = /** @class */ (function () {
    function BootstrapClientComponent() {
        this.homeComponent = new HomeComponent_1.HomeComponent();
        this.homeComponent.init();
    }
    return BootstrapClientComponent;
}());
new BootstrapClientComponent();
