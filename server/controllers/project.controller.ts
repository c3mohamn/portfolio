import express, { Request, Response } from 'express';
import ProjectModel from '../models/project.model';

const router = express.Router();

router.get('', async (req: Request, res: Response) => {
  console.log('get /project');

  ProjectModel.find().then(
    projects => {
      console.log(projects);
      res.status(200).send({ projects });
    },
    err => {
      console.log(err);
      res.status(500).send(err);
    }
  );
});

router.get('/:id', async (req: Request, res: Response) => {
  console.log('get /project/:id');
  const id = req.params.id;
  console.log(id);
});

export default router;
