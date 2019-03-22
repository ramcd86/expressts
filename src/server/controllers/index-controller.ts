import { Request, Response } from "express";

class IndexController {

  public state: any;

  constructor() {
    this.init();
    this.state = {
      initialState: 'Object initialized.'
    };
  }

   public init() {
     console.log('Init initialized.');
  }

}

export let index = (req: Request, res: Response) => {
  res.render("index", new IndexController());
};
