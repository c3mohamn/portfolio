import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import express, { Application } from 'express';
import { join } from 'path';
import bodyParser from 'body-parser';
import routes from './server/controllers';

const app: Application = express();
const port: number | string = process.env.PORT || 3000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

// init body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Allows client to find javascript files in dist folder
app.use(express.static(join(__dirname, 'dist/browser')));

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP,
  ngExpressEngine,
  provideModuleMap
} = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
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
