import mongoose from 'mongoose';
import config from './config';

const options: mongoose.ConnectionOptions = {
  reconnectInterval: 500,
  reconnectTries: 5,
  useNewUrlParser: true
};

function connect() {
  mongoose.connect(config.MONGODB_URI, options).then(
    () => console.log(`Connected to db ${config.MONGODB_URI}`),
    (error: any) => {
      console.log(error);
    }
  );
}

export default { connect };
