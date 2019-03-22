import { HomeComponent } from './HomeComponent';

class BootstrapClientComponent {

    public homeComponent = new HomeComponent();

    constructor() {
        this.homeComponent.init();
    }

}

new BootstrapClientComponent();