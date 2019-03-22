import { HomeComponent } from './HomeComponent';

class BootstrapComponent {

    public homeComponent = new HomeComponent();

    constructor() {
        this.homeComponent.init();
    }

}

new BootstrapComponent();