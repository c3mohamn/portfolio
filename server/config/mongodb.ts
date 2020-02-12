import mongoose from 'mongoose';
import config from './config';

const options: mongoose.ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
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
