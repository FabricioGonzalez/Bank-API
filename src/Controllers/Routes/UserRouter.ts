import { Router, Request, Response } from 'express';
import ServiceFactory from '@src/App/Services/ServiceFactory';

const UserRouter: Router = Router();

// Lists an user

UserRouter.get(
  '/users',
  async (request: Request, response: Response): Promise<void> => {
    await response.send('ok');
    response.status(200);
  },
);

//Creates an user
UserRouter.post(
  '/user_create',
  async (request: Request, response: Response): Promise<void> => {
    const user = request.body;

    await response.send(user);
  },
);

export { UserRouter };
