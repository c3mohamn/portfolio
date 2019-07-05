import sgMail from '@sendgrid/mail';
import configData from './config';
import { Config } from '../models/config.model';

const config: Config = configData;

sgMail.setApiKey(config.SENDGRID_API_KEY || '');

export default sgMail;
