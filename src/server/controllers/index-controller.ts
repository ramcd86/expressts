import { Request, Response } from "express";
import { EmployeeRepo } from '../repository/employee-repository';
import { EmployeeEntity } from '../entities/employee.entity';

class IndexController {

  public state: any;
  public employeeRepo: EmployeeRepo;
  public req: Request;
  public res: Response;
  
  constructor(req: Request, res: Response) {
    // Initial string state.
    this.state = {
      initialState: 'Object initialized.',
      employeeEntity: {}
    };
    this.req = req;
    this.res = res;

    // Server logic class.
    this.employeeRepo = new EmployeeRepo();

    // Class init method.
    this.init();

    // Server calls.
    this.getAllEmployees();
  }

   public init() {
     console.log('Init initialized.');
  }



  public getAllEmployees = async (req?: Request, res?: Response) => {
    this.employeeRepo.getAllEmployees().then((result: any) => {
        this.state.employeeEntity = result[0].firstName;
        // Call render on completion of server call.
        this.render();
    });
};

public render() {
  // Render page.
  this.res.render("index", this);
}

}

export let index = (req: Request, res: Response) => {
  new IndexController(req, res);
};
