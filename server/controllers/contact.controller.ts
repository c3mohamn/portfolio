import express, { Request, Response } from 'express';
import sgMail from '../config/sendgrid';
import { ContactForm } from '../models/contact-form.model';
import Joi from 'joi';

const router = express.Router();

router.get('', (req: Request, res: Response) => {
  res.status(200).send({ message: 'Get works!' });
});

router.post('/send', async (req: Request, res: Response) => {
  const form: ContactForm = req.body.form;

  const { error } = validateForm(form);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }

  const msg = {
    to: 'nasir.m23@hotmail.com',
    from: form.email || 'no-email-entered@example.com',
    subject: 'Email from your portfolio',
    text: form.message,
    html: `${form.message} <br/><br/>
      By: ${form.name} <br/>
      Phone: ${form.phone} <br/>
      Email: ${form.email}
      `
  };

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).send({ message: 'Message sent successfully!' });
    })
    .catch((sgError: any) => {
      console.error(sgError.toString());
      res.status(500).send(sgError);
    });
});

function validateForm(form: ContactForm) {
  const schema = Joi.object({
    email: Joi.string().required().min(1).max(150).email(),
    phone: Joi.string().max(20),
    message: Joi.string().required().max(1000),
    name: Joi.string().max(150)
  });

  return schema.validate(form);
}

export default router;
