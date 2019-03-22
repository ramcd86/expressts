"use strict";
exports.__esModule = true;
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.componentString = "HomeComponent Initialized";
    }
    HomeComponent.prototype.init = function () {
        this.classLog();
    };
    HomeComponent.prototype.classLog = function () {
        console.log(this.componentString);
    };
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
