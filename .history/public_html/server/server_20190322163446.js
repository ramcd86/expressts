"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var IndexController = require("./controllers/index-controller");
var BootstrapComponent = /** @class */ (function () {
    function BootstrapComponent(expressCore) {
        if (expressCore === void 0) { expressCore = express(); }
        this.expressCore = expressCore;
    }
    BootstrapComponent.prototype.init = function () {
        this.expressCore.set('views', path.join(__dirname + '/views'));
        this.expressCore.set('view engine', 'ejs');
        this.expressCore.use(logger('dev'));
        this.expressCore.use(express.json());
        this.expressCore.use(express.urlencoded({
            extended: false
        }));
        this.expressCore.use(cookieParser());
        // this.expressCore.use('./../client', express.static(path.join(__dirname, '/client')));
        this.expressCore.use(express.static(path.join(__dirname, 'client')));
        // this.expressCore.use((req, res, next)=>{
        //     next(createError(404));
        // })
        this.expressCore.use(function (err, req, res, next) {
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};
            res.status(err.status || 500);
            res.render('error');
        });
        this.expressCore.get('/', IndexController.index);
        this.listen();
    };
    BootstrapComponent.prototype.listen = function () {
        this.expressCore.listen(3000, function () {
            console.log('##### App listening on port 3000! #####');
        });
    };
    return BootstrapComponent;
}());
new BootstrapComponent().init();
