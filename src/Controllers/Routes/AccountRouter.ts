import { Router, Request, Response } from 'express';

const accountRouter: Router = Router();

// Lists an account

accountRouter.get(
  '/account',
  async (request: Request, response: Response): Promise<void> => {
    await response.send('ok');
  },
);

// Creates an account
accountRouter.post(
  '/account_create',
  async (request: Request, response: Response): Promise<void> => {
    const account = request.body;

    await response.send(account);
  },
);

export { accountRouter };
