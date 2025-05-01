import express, { Application } from "express";
import userRouter from './modules/user/api/routes/UserRouter';

export class App {
  public app: Application;

  constructor(){
    this.app = express();
  }

  public routes(): void {
    this.app.use('/', userRouter);
  }

  public config(): void {
    this.app.use(express.json());
  }

  public listen(): void {
    const port = process.env.PORT || 3000
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    })
  }
}