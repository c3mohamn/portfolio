import express from 'express';
import contact from './contact.controller';
import about from './about.controller';
import project from './project.controller';
import admin from './admin.controller';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json';

const router = express.Router();

router.use('/about', about);
router.use('/contact', contact);
router.use('/project', project);
router.use('/admin', admin);

// setup swagger
router.use('/swagger', swaggerUi.serve);
router.get('/swagger', swaggerUi.setup(swaggerDocument));

export default router;
