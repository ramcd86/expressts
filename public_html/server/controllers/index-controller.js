"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    constructor() {
        this.init();
        this.state = {
            initialState: 'Object initialized.'
        };
    }
    init() {
        console.log('Init initialized.');
    }
}
exports.index = (req, res) => {
    res.render("index", new IndexController());
};
