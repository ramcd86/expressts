import express = require('express');
import createError = require('http-errors');
import path = require('path');
import cookieParser = require('cookie-parser');
import logger = require('morgan');

import "reflect-metadata";
import { createConnection } from "typeorm";

// import { EmployeeController }

import * as bodyParser from 'body-parser';
import * as serverConfig from './server-config';
import * as IndexController from './controllers/index-controller';
import * as EmployeeController from './controllers/employee-controller';
// import { EmployeeController } from './controllers/employee-controller';

class BootstrapComponent {

    constructor(private expressCore: express.Application = express()) {
    }

    public init() {
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
        this.expressCore.use((err: any, req: any, res: any, next: any) => {
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};
            res.status(err.status || 500);
            res.render('error');
        })
        this.expressCore.get('/', IndexController.index);
        this.expressCore.get('/getemployees', EmployeeController.getAllEmployees);
        this.expressCore.post('/saveemployee', EmployeeController.saveEmployee);
        this.listen();

        createConnection(serverConfig.dbOptions).then(async connection => {
            console.log('DB connection established.')
        }).catch(err => {
            console.log('TypeORM connection error: ', err);
        })
    }
    
    public listen() {
        this.expressCore.listen(38888, () => {
            console.log('##### App listening on port 38888! #####');
        })
    }
}

new BootstrapComponent().init();