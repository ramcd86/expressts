
class HomeComponent {

    public index: string;

    constructor() {
        this.index = "HomeComponent";
    }

    public init() {
        this.classLog();
    }

    public classLog() {
        console.log(this.index);
    }
}

export { HomeComponent }