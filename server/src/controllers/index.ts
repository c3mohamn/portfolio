import express from 'express';
import contact from './contact.controller';

const router = express.Router();

router.use('/contact', contact);

export default router;
