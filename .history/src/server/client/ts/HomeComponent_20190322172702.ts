
class HomeComponent {

    public componentString: string;

    constructor() {
        this.componentString = "HomeComponent Initialized";
    }

    public init() {
        this.classLog();
    }

    public classLog() {
        console.log(this.componentString);
    }
}
