import { Router, Request, Response } from 'express';

const P2PRouter: Router = Router();

P2PRouter.get(
  '/P2P',
  async (request: Request, response: Response): Promise<void> => {
    await response.send('ok');
  },
);

export { P2PRouter };
