import express from 'express';
import contact from './contact.controller';
import about from './about.controller';

const router = express.Router();

router.use('/about', about);
router.use('/contact', contact);

export default router;
