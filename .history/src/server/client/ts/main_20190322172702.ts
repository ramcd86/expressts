const homeComponent = require('./HomeComponent');

class BootstrapClientComponent {

    public homeComponent = new homeComponent();

    constructor() {
        this.homeComponent.init();
    }

}

new BootstrapClientComponent();