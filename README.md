[![Build Status](https://travis-ci.com/c3mohamn/portfolio.svg?branch=master)](https://travis-ci.com/c3mohamn/portfolio)

# Portfolio

This is the source code for Nasir's [portfolio website](https://nasirm.ca).

## Technology

- [`Angular (8+)`](https://angular.io/) as the front-end
- [`Nodejs`](https://nodejs.org) as the server
- [`Vscode`](https://code.visualstudio.com/) as code editor
- [`Travis CI`](https://travis-ci.org/) as CI
- [`Ngrx`](https://ngrx.io/) as front-end data & state management
- [`Google Analytics`](https://analytics.google.com) & GTM for tracking traffic
- [`Zurb Foundation`](https://foundation.zurb.com/) as css library
- [`Heroku`](https://heroku.com) for hosting
- [`Clourflare`](https://www.cloudflare.com/) for website security
- [`Trello`](https://trello.com/b/hoS9NAOg/portfolio-ideas) for recording and tracking ideas
- [`Fullstory`](https://www.fullstory.com) for digital analytics
- [`SendGrid`](https://sendgrid.com/) for transactional emails

My [about page](https://nasirm.ca/about) contains a bigger list and longer description of the tech used.

## Commands

`npm install` installs packages in all directories using `preinstall`.

`npm run client-dev` starts the angular client on port 4200.

`npm run client-prod` builds the angular client to dist/app-nm folder.

`npm run server-dev` starts the server on port 3000.

`npm run server-prod` transpiles typescript server files to dist/ folder as javascript files.

`npm run all-dev` concurrently runs client-dev and server-dev.

`npm run all-prod` concurrently runs client-prod and server-prod.

`npm run test-ng` starts the angular tests.
