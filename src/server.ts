import express, { Application } from 'express';
import { UserRouter, P2PRouter, accountRouter } from './Controllers/importer';

export default class Server {
  app: Application = express();

  middleware(app = this.app): void {
    app.use(express.json());
    app.use(UserRouter);
    app.use(accountRouter);
    app.use(P2PRouter);
  }

  port: string | number = process.env.PORT || 3000;

  runServer(app = this.app, port = this.port): void {
    app.listen(port, () => console.log(`Listening to port ${port}`));
  }
}
