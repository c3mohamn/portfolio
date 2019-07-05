import express, { Request, Response } from 'express';
import sgMail from '../config/sendgrid';
import { ContactForm } from '../models/contact-form.model';
import { MailData } from '@sendgrid/helpers/classes/mail';

const router = express.Router();

router.get('', (req: Request, res: Response) => {
  // console.log('get /contact');
  res.status(200).send({ message: 'Get works!' });
});

router.post('/send', (req: Request, res: Response) => {
  const form: ContactForm = req.body.form;
  // console.log('post /contact/send');
  // console.log(form);

  if (!checkMailParams(form)) {
    res.status(400).send({ message: 'Bad request. Please fill out the contact form correctly.' });
  } else {
    const msg: MailData = {
      to: 'nasir.m23@hotmail.com',
      from: form.email || 'no-email-entered@example.com',
      subject: 'Portfolio Message',
      text: form.message,
      html: `${form.message} <br/><br/>
      By: ${form.name} <br/>
      Phone: ${form.phone} <br/>
      Email: ${form.email}
      `,
    };

    sgMail
      .send(msg)
      .then(() => {
        res.status(200).send({ message: 'Message send successfully!' });
      })
      .catch(error => {
        console.error(error.toString());
        res.status(500).send(error);
      });
  }
});

function checkMailParams(mail: ContactForm): boolean {
  if (mail.email.length < 1 && mail.email.length > 150) {
    return false;
  } else if (mail.phone && mail.phone.length > 20) {
    return false;
  } else if (mail.message.length > 1000) {
    return false;
  } else if (mail.name.length > 150) {
    return false;
  }

  return true;
}

export default router;
