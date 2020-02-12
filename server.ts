import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';

import express, { Application } from 'express';
import { join } from 'path';
import bodyParser from 'body-parser';
import routes from './server/controllers';
import mongodb from './server/config/mongodb';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

const app: Application = express();
const port: number | string = process.env.PORT || 3000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

// database connection
mongodb.connect();

// init body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {
  AppServerModule,
  LAZY_MODULE_MAP,
  ngExpressEngine,
  provideModuleMap
} = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModule,
    providers: [provideModuleMap(LAZY_MODULE_MAP)]
  })
);

// API Routes
app.use('/api', routes);

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Serve static files from /browser
app.get(
  '*.*',
  express.static(DIST_FOLDER, {
    maxAge: '1y'
  })
);

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
