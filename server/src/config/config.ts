import { Config } from '../models/config.model';

function getConfigData(): Config {
  let config: Config = {
    SENDGRID_API_KEY: '',
  };

  if (process.env.NODE_ENV === 'production') {
    config.SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  } else {
    process.env.NODE_ENV = 'development';
    const configDev: Config = require('../../config.dev.json');
    config = configDev;
  }

  return config;
}

export default getConfigData();
