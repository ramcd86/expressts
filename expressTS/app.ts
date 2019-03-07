import express = require('express');
import createError = require('http-errors');
import path = require('path');
import cookieParser = require('cookie-parser');
import logger = require('morgan');
// import * as indexController from './controllers/index-controller';

const indexController = require('./controllers/index-controller')


class BootstrapComponent {

    constructor(private expressCore: express.Application = express()) {
    }

    public init() {
        this.expressCore.set('views', path.join(__dirname + '../expressTS/views'));
        this.expressCore.set('view engine', 'ejs');
        this.expressCore.use(logger('dev'));
        this.expressCore.use(express.json());
        this.expressCore.use(express.urlencoded({
            extended: false
        }));
        this.expressCore.use(cookieParser());
        this.expressCore.use(express.static(path.join(__dirname, 'public')));
        this.expressCore.use((req, res, next)=>{
            next(createError(404));
        })
        this.expressCore.use((err: any, req: any, res: any, next: any) => {
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};
            res.status(err.status || 500);
            res.render('error');
        })

        this.listen();
        this.routeBuilder();
    }

    public routeBuilder() {
        this.expressCore.use('/', indexController);
    }

    public listen() {
        this.expressCore.listen(3000, () => {
            console.log('##### App listening on port 3000! #####');
        })
    }
}

new BootstrapComponent().init();