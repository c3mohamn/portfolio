import express, { Request, Response } from 'express';
import Joi from 'joi';
import config from '../config/config';

const router = express.Router();

router.get('', (req: Request, res: Response) => {
  console.log('get /admin');
  res.status(200).send({ message: 'Get works!' });
});

router.post('/verify', (req: Request, res: Response) => {
  // console.log('post /admin/verify');
  const password: string = req.body.password;

  if (password === config.ADMIN_PASSWORD) {
    // TODO: Change to JWT token
    res.status(200).send({ token: 'temp' });
  } else {
    res.status(400).send({ message: 'Incorrect password.' });
  }

  const adminPassword = config.ADMIN_PASSWORD;
});

router.post('/project', async (req: Request, res: Response) => {
  console.log('post /admin/project');
});

router.put('/project', async (req: Request, res: Response) => {
  console.log('put /admin/project');
});

export default router;
