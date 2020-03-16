import 'zone.js/dist/zone-node';

import express from 'express';
import { join } from 'path';
import bodyParser from 'body-parser';
import routes from './server/controllers';

import { ngExpressEngine } from '@nguniversal/express-engine';
import { AppServerModule } from 'src/main.server';
import { existsSync } from 'fs';
import { APP_BASE_HREF } from '@angular/common';

export function app() {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // init body parser middleware
  // tslint:disable-next-line: deprecation
  server.use(bodyParser.json());
  // tslint:disable-next-line: deprecation
  server.use(bodyParser.urlencoded({ extended: false }));

  server.engine('html', ngExpressEngine({ bootstrap: AppServerModule }));

  // API Routes
  server.use('/api', routes);

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, { maxAge: '1y' }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run() {
  const port = process.env.PORT || 3000;

  // Start up the Node server
  app().listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
