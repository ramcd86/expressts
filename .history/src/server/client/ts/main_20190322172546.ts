const HomeComponent = require('./HomeComponent');

class BootstrapClientComponent {

    public homeComponent = new HomeComponent();

    constructor() {
        this.homeComponent.init();
    }

}

new BootstrapClientComponent();