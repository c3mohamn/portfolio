import { TechIcon } from '../../about/models/tech-icon.model';

// export const howItStarted = `
//       After finishing my undergraduate degree and beginning my job hunt, I came to the realization
//       that like artists, web developers should also have portfolios.
//       <br /><br />
//       So I began building my own portfolio.
//       A place for me to easily showcase who I am and what I apsire to be. A place where
//       I could keep a log of everything I learn. Hopefully it captures, to some extent, who I am and
//       what I have to offer.
// `;

export const iconList: TechIcon[] = [
  {
    title: 'Visual Studio Code',
    cssClass: 'vscode',
    description: `
    <h4><small>
    <a class="no-underline" href="https://code.visualstudio.com/" target="_blank" rel="noopener"
        aria-label="Vscode link" title="Vscode">
        Visual Studio Code
      </a>
    </small></h4>
    <br />
    Visual Studio Code is a code editor developed by Microsoft. It contains a
     plethora of useful extensions, is lightweight, and free!`
  },
  {
    title: 'Angular',
    cssClass: 'angular',
    description: `
    <h4><small>
    <a class="no-underline" href="https://angular.io/" target="_blank" rel="noopener"
        aria-label="Angular link" title="Angular">
        Angular 8+
      </a>
    </small></h4>
    <br />
    Angular is a web and mobile application framework
     led by the Angular Team at Google. It has many tools built in like it's own testing
     framework, and tons of support and resources.`
  },
  {
    title: 'Angular Redux',
    cssClass: 'ngrx',
    description: `
    <h4><small>
    <a class="no-underline" href="https://ngrx.io/" target="_blank" rel="noopener"
        aria-label="Angular Redux link" title="Angular Redux">
        Angular Redux
      </a>
    </small></h4>
    <br />
    Redux is an open-source Javascript library for managing application state.
     Angular Redux uses RxJs observables to select and transform data on its way out of the store.
     Download Redux Devtools to see what is in the store currently for this website!`
  },
  {
    title: 'Nodejs',
    cssClass: 'node',
    description: `
    <h4><small>
    <a class="no-underline" href="https://nodejs.org" target="_blank" rel="noopener"
        aria-label="Nodejs link" title="Nodejs">
        Nodejs
      </a>
    </small></h4>
    <br />
    Nodejs is an open-source, cross-platform
     runtime environment for developing server-side and networking applications. I use it
     because it is incredibly easy to use and set up.`
  },
  // REMOVED from node server
  // {
  //   title: 'Mongodb',
  //   cssClass: 'mongodb',
  //   description: `
  //   <h4><small>
  //   <a class="no-underline" href="https://www.mongodb.com/new" target="_blank" rel="noopener"
  //       aria-label="Mongodb link" title="Mongodb">
  //       Mongodb
  //     </a>
  //   </small></h4>
  //   <br />
  //   Mongodb is a cross-platform document-oriented database classified as NoSQL or non-relational.
  //   It uses JSON-like documents which is perfect for a website where most of the data is text based. `
  // },
  {
    title: 'Zurb Foundation',
    cssClass: 'foundation',
    description: `
    <h4><small>
    <a class="no-underline" href="https://foundation.zurb.com/" target="_blank" rel="noopener"
        aria-label="Zurb Foundation link" title="Zurb Foundation">
        Zurb Foundation
      </a>
    </small></h4>
    <br />
    Foundation is a front-end framework
     like Bootstrap. It is very customizable and allows you to include the features you want.
     <br><br>
     I primarily use it for it's scss functions and grid system.`
  },
  {
    title: 'Material Design',
    cssClass: 'material-design',
    description: `
    <h4><small>
    <a class="no-underline" href="https://material.io/design/" target="_blank" rel="noopener"
        aria-label="Material Design link" title="Material Design">
        Material Design
      </a>
    </small></h4>
    <br />
    Material is a design concept
     created by Google. I have used, on several occasions, Angular Material components, icons and fonts.
     <br /> <br />
     For this website, I am using Angular Material, Google fonts, and  icons.`
  },
  // REMOVED from node server
  // {
  //   title: 'Swagger',
  //   cssClass: 'swagger',
  //   description: `
  //   <h4><small>
  //   <a class="no-underline" href="https://swagger.io/" target="_blank" rel="noopener"
  //       aria-label="Swagger link" title="Swagger">
  //       Swagger
  //     </a>
  //   </small></h4>
  //   <br />
  //   Swagger is an open-source software framework backed by a large ecosystem of tools
  //   that helps developers design, build, document, and consume RESTful Web services.`
  // },
  {
    title: 'Github',
    cssClass: 'github',
    description: `
    <h4><small>
    <a class="no-underline" href="https://github.com/c3mohamn/portfolio" target="_blank" rel="noopener"
        aria-label="Github link" title="Github">
        Github
      </a>
    </small></h4>
    <br />
    Github is a hosting service for version control using
     Git. It's free, has tons of integrations, and is very easy to navigate and use.`
  },
  {
    title: 'Heroku',
    cssClass: 'heroku',
    description: `
    <h4><small>
    <a class="no-underline" href="https://heroku.com" target="_blank" rel="noopener"
        aria-label="Heroku link" title="Heroku">
        Heroku
      </a>
    </small></h4>
    <br />
    Heroku is a cloud platform as a service (PaaS)
     that allows developers to build, run, and operate applications entirely in the cloud. I have been
     using Heroku for a coupple years now as they provide a free plan that hosts your apps. You can also
     add a custom domain for free, which is what I have done for this website.`
  },
  {
    title: 'Cloudflare',
    cssClass: 'cloudflare',
    description: `
    <h4><small>
    <a class="no-underline" href="https://www.cloudflare.com/" target="_blank" rel="noopener"
        aria-label="Cloudflare link" title="Cloudflare">
        Cloudflare
      </a>
    </small></h4>
    <br />
    Cloudflare is like the middleman between website visitors and the user's hosting provider.
    It provides network services, DDos mitigation, internet security, and DNS services. Basically, it makes it so
    my website is secure (https).`
  },
  {
    title: 'Trello',
    cssClass: 'trello',
    description: `
    <h4><small>
    <a class="no-underline" href="https://trello.com/b/hoS9NAOg/portfolio-ideas" target="_blank" rel="noopener"
        aria-label="Trello link" title="Trello">
        Trello
      </a>
    </small></h4>
    <br />
    Trello is a web-based list-making application.
     Currently I use it as a kanban board to keep track of ideas and tasks. It is extremely easy to use
     and also provides tons of integrations.`
  },
  {
    title: 'Google Analytics',
    cssClass: 'google-analytics',
    description: `
    <h4><small>
    <a class="no-underline" href="https://analytics.google.com" target="_blank" rel="noopener"
        aria-label="Google Analytics link" title="Google Analytics">
        Google Analytics
      </a>
    </small></h4>
    <br />
    Google Analytics is a web analytics
     service offered by Google that allows you to track website traffic. I use it to check if anyone even looks
     at this website - and it's free!`
  },
  {
    title: 'Google Tag Manager',
    cssClass: 'google-tag-manager',
    description: `
    <h4><small>
    <a class="no-underline" href="https://tagmanager.google.com/" target="_blank" rel="noopener"
        aria-label="Google Tag Manager link" title="Google Tag Manager">
        Google Tag Manager
      </a>
    </small></h4>
    <br />
    Google Tag Manager is a tag
     management system used for tracking and analytics of websites. It pairs well with Google Analytics
     and I use to track page views and clicks.`
  },
  {
    title: 'SendGrid',
    cssClass: 'sendgrid',
    description: `
    <h4><small>
    <a class="no-underline" href="https://sendgrid.com/" target="_blank" rel="noopener"
        aria-label="SendGrid link" SendGrid">
        SendGrid
      </a>
    </small></h4>
    <br />
    SendGrid is a customer communication platform for transactional and marketing emails. I am currently using it
    to send contact form messages to my email.
    `
  },
  {
    title: 'Fullstory',
    cssClass: 'fullstory',
    description: `
    <h4><small>
    <a class="no-underline" href="https://www.fullstory.com" target="_blank" rel="noopener"
        aria-label="Fullstory link" Fullstory">
        Fullstory
      </a>
    </small></h4>
    <br />
    Fullstory is a digital analytics platform that shows video replays of user experiences.
    `
  },
  {
    title: 'Photoshop',
    cssClass: 'photoshop',
    description: `
    <h4><small>
        Photoshop
    </small></h4>
    <br />
    A graphic editor developed by Adobe. I use on it
     occasion to modify svgs and images that I use for my apps. Photoshop and graphic design in
     general is an area that I really would like to improve on.`
  },
  {
    title: 'Travis CI',
    cssClass: 'travis',
    description: `
    <h4><small>
    <a class="no-underline" href="https://travis-ci.org/" target="_blank" rel="noopener"
        aria-label="Travis CI link" title="Travis CI">
        Travis CI
      </a>
    </small></h4>
    <br />
    Travis is a continuous integration service
     used to build and test projects hosted on Github. I currently use it to run Angular tests when code
     is pushed to the master branch.`
  },
  {
    title: 'HTML5',
    cssClass: 'html',
    description: `
    <h4><small>
        HTML5
    </small></h4>
    <br />
    Hypertext Markup Language is the standard markup language for
     documents to be displayed on a web browser. I did not even want to put it in this list, but I have since it is
     listed in many job descriptions I have read.`
  },
  {
    title: 'TypeScript',
    cssClass: 'typescript',
    description: `
    <h4><small>
    <a class="no-underline" href="https://www.typescriptlang.org/" target="_blank" rel="noopener"
        aria-label="TypeScript link" title="TypeScript">
        TypeScript
      </a>
    </small></h4>
    <br />
    Typescript is a superset of JavaScript. Angular
     has it built-in and it can also used with Nodejs (which I do for this website). It provides types, linting,
     and error checking that makes it so much better to work with than JavaScript.`
  },
  {
    title: 'JavaScript',
    cssClass: 'javascript',
    description: `
    <h4><small>
        JavaScript
    </small></h4>
    <br />
    JavaScript is not quite Java. It is a high-level,
     light-weight, interpreted programming language. It is primarily known as the scripting language
     for web apps. I actually have not written any JavaScript for this website, as I use TypeScript for both.
     But since TypeScript is a superset of JavaScript, I guess I have.`
  },
  {
    title: 'Sass',
    cssClass: 'sass',
    description: `
    <h4><small>
    <a class="no-underline" href="https://sass-lang.com/" target="_blank" rel="noopener"
        aria-label="Sass link" title="Sass">
        Sass
      </a>
    </small></h4>
    <br />
    Sass is probably the most popular CSS extension language.
     It has many capabilities and features such as built-in functions, variables, rules, operations,
     interpolation and much more.`
  }
];
