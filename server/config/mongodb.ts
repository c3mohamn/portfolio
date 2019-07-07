import mongoose from 'mongoose';
import config from './config';

const options: mongoose.ConnectionOptions = {
  reconnectInterval: 500,
  reconnectTries: 5,
  useNewUrlParser: true
};

let uri = config.MONGODB_URI;

// temp fix for local
if (!uri) {
  uri = require('../../config.dev.json').MONGODB_URI;
}

function connect() {
  mongoose.connect(uri, options).then(
    () => console.log(`Connected to db ${uri}`),
    (error: any) => {
      console.log(error);
    }
  );
}

export default { connect };
