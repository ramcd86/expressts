import express = require('express');

const router = express.Router();

class IndexController {

    public dude: string;

    constructor(private expressCore: express.Application = express()) {
        this.dude = "dude";
    }

    init() {
        
        this.expressCore.get('/', (req, res, next) => {
            res.render('index', this.dude);
        })
    }

}

new IndexController().init;

module.exports = router;