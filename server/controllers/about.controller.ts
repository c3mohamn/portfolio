import express, { Request, Response } from 'express';
import AboutTechModel from '../models/about-tech.model';

const router = express.Router();

router.get('', (req: Request, res: Response) => {
  console.log('get /about');
  res.status(200).send({ message: 'Get works!' });
});

router.get('/tech', async (req: Request, res: Response) => {
  console.log('get /about/tech');

  // const test = {
  //   title: 'test2',
  //   cssClass: 'test2',
  //   orderNumber: 1
  // };

  // const newTech = new AboutTechModel(test);

  // newTech.save().then(tech => res.status(201).send({ tech }));

  AboutTechModel.find().then(
    tech => {
      console.log(tech);
      res.status(200).send({ tech });
    },
    err => {
      res.status(500).send(err);
    }
  );
});

export default router;
