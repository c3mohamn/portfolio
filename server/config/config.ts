import { Config } from '../models/config.model';

function getConfigData(): Config {
  let config: Config = {};

  if (process.env.NODE_ENV === 'development') {
    config = require('../../config.dev.json');
  } else {
    config.SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    config.MONGODB_URI = process.env.MONGODB_URI;
    config.ADMIN_SECRET = process.env.ADMIN_SECRET;
    config.ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  }

  return config;
}

export default getConfigData();
