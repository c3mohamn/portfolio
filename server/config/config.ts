import { Config } from '../models/config.model';

function getConfigData(): Config {
  let config: Config = {};

  if (process.env.NODE_ENV !== 'production') {
    config = require('../../config.dev.json');
  } else {
    config.SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  }

  return config;
}

export default getConfigData();
