import { Config } from '../models/config.model';

function getConfigData(): Config {
  let config: Config = {
    SENDGRID_API_KEY: ''
  };

  console.log(process.env.NODE_ENV);

  if (process.env.NODE_ENV === 'development') {
    const configDev: Config = require('../../config.dev.json');
    config = configDev;
  } else {
    config.SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  }

  return config;
}

export default getConfigData();
