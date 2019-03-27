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
const employee_repository_1 = require("../repository/employee-repository");
class IndexController {
    constructor(req, res) {
        this.getAllEmployees = (req, res) => __awaiter(this, void 0, void 0, function* () {
            this.employeeRepo.getAllEmployees().then((result) => {
                console.log("Result : " + result[0].firstName);
                this.state.employeeEntity = result[0].firstName;
                console.log(this.state.employeeEntity);
                this.render();
            });
        });
        this.req = req;
        this.res = res;
        this.init();
        this.state = {
            initialState: 'Object initialized.',
            employeeEntity: {}
        };
        // this.employeeEntity = new EmployeeEntity();
        this.employeeRepo = new employee_repository_1.EmployeeRepo();
        this.getAllEmployees();
    }
    init() {
        console.log('Init initialized.');
    }
    render() {
        this.res.render("index", this);
    }
}
exports.index = (req, res) => {
    new IndexController(req, res);
};
