"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
// import { EmployeeController }
const bodyParser = require("body-parser");
const serverConfig = require("./server-config");
const IndexController = require("./controllers/index-controller");
const EmployeeController = require("./controllers/employee-controller");
// import { EmployeeController } from './controllers/employee-controller';
class BootstrapComponent {
    constructor(expressCore = express()) {
        this.expressCore = expressCore;
    }
    init() {
        this.expressCore.use(bodyParser.json());
        this.expressCore.use(bodyParser.urlencoded({ extended: true }));
        this.expressCore.set('views', path.join(__dirname + '/views'));
        this.expressCore.set('view engine', 'ejs');
        this.expressCore.use(logger('dev'));
        this.expressCore.use(express.json());
        this.expressCore.use(express.urlencoded({
            extended: false
        }));
        this.expressCore.use(cookieParser());
        this.expressCore.use('/client', express.static(path.join(__dirname, './client')));
        this.expressCore.use((err, req, res, next) => {
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};
            res.status(err.status || 500);
            res.render('error');
        });
        this.expressCore.get('/', IndexController.index);
        this.expressCore.get('/getemployees', EmployeeController.getAllEmployees);
        this.expressCore.post('/saveemployee', EmployeeController.saveEmployee);
        this.listen();
        typeorm_1.createConnection(serverConfig.dbOptions).then((connection) => __awaiter(this, void 0, void 0, function* () {
            console.log('DB connection established.');
        })).catch(err => {
            console.log('TypeORM connection error: ', err);
        });
    }
    listen() {
        this.expressCore.listen(38888, () => {
            console.log('##### App listening on port 38888! #####');
        });
    }
}
new BootstrapComponent().init();
