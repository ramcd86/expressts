"use strict";
exports.__esModule = true;
var IndexController = /** @class */ (function () {
    function IndexController() {
        this.init();
        this.state = {
            initialState: 'Object initialized.'
        };
    }
    IndexController.prototype.init = function () {
        console.log('Init initialized.');
    };
    return IndexController;
}());
exports.index = function (req, res) {
    res.render("index", new IndexController());
};
