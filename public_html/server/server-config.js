"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
exports.dbOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "expresstsdevdb",
    entities: [
        "./**/*.entity.js"
    ],
    synchronize: true,
};
