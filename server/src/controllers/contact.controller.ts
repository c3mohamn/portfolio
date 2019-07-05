import express, { Request, Response } from 'express';
import sgMail from '../config/sendgrid';
import { ContactForm } from '../models/contact-form.model';
import { MailData } from '@sendgrid/helpers/classes/mail';

const router = express.Router();

router.get('', (req: Request, res: Response) => {
  console.log('asdasda');
  res.sendStatus(200);
});

router.post('/send', (req: Request, res: Response) => {
  const form: ContactForm = req.body.form;
  console.log('post /contact/send');
  console.log(form);

  if (!checkMailParams(form)) {
    res
      .sendStatus(400)
      .send({ message: 'Invalid request. Please fill out the contact form correctly.' });
  } else {
    const msg: MailData = {
      to: 'nasir.m23@hotmail.com',
      from: form.from || 'no-email-entered@example.com',
      subject: 'Portfolio Message',
      text: form.message,
      html: `${form.message} <br/><br/>
      By: ${form.name} <br/>
      Phone: ${form.phoneNumber} <br/>
      Email: ${form.from}
      `,
    };

    sgMail
      .send(msg)
      .then(() => {
        res.sendStatus(200).send({ message: 'Email sent!' });
      })
      .catch(error => {
        console.error(error.toString());
        res.sendStatus(500).send(error);
      });
  }
});

function checkMailParams(mail: ContactForm): boolean {
  if (mail.from.length < 1 && mail.from.length > 150) {
    return false;
  } else if (mail.phoneNumber.length > 20) {
    return false;
  } else if (mail.message.length > 1000) {
    return false;
  } else if (mail.name.length > 150) {
    return false;
  }

  return true;
}

export default router;
