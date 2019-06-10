import 'newrelic';
import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app: Application = express();
const port: number | string = process.env.PORT || 3000;

// init body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Allows client to find javascript files in dist folder
app.use(express.static(path.join(__dirname, '../../app-nm/dist/app-nm')));

// TODO: API routes here
app.use('/api', (req: Request, res: Response, next: NextFunction) => {
  res.send('API');
});

// Send all other requests to Angular App
app.get('*', (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, '../../app-nm/dist/app-nm/index.html'));
});

app.listen(port, () => console.log('Server running'));
