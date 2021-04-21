import { Resume } from '../models/resume.interface';

export const resume: Resume = {
  name: 'Nasir Mohammad',
  title: 'Software Developer',
  email: 'nasir.m23@hotmail.com',
  summary: `I am a graduate from the University of Toronto where I studied Computer Science. My professional experiences have primarily been in web technologies, but I am a problem solver first.
  Always keen to learn and grow, then apply that knowledge to the projects I work on. I have a lot of experience being part of a team: in sports, games, and work.
  I know what it means to put the team's interest ahead of your own as both a leader and a follower.`,
  experiences: [
    {
      title: 'Software Developer',
      company: 'Home Depot Canada',
      startDate: 'October 2019',
      endDate: 'Present',
      bullets: [
        `Improved Home Depot's store localization flow, increasing % of users accurately assigned to nearest store`,
        `Build and maintain reusable, responsive, and accessible components consumed by multiple Angular projects.`,
        `Automating and updating front-end angular components to improve Home Depot’s website performance and user experience.`,
        `Take part in an agile work environment, attending stand-ups and sprint planning meetings.`
      ]
    },
    {
      title: 'Software Developer',
      company: 'Reportin / Source',
      startDate: 'June 2017',
      endDate: 'August 2018',
      bullets: [
        `Implemented an automated test strategy for Reportin’s API on .NET Core and achieved a test coverage of 87%.`,
        `Independently created an admin panel for a waitlist of over 500 users to allow the marketing team to send invites and modify Sendgrid templates.`,
        `Built an interactive Telegram bot integrated with our waitlist API encourage social engagement of Reportin’s platform.`,
        `Incorporated an Agile workflow using Jira and daily scrum meetings.`
      ]
    }
  ],
  activities: [
    `Competed in basketball and volleyball intramurals at University College.`,
    `Officer in a large MMORPG guild with over 900 players. In charge of organizing and leading large groups of players from South America to East Asia in order to achieve the common goal of defeating monsters and dragons.`
  ],
  skills: [
    'Java, C/C#, Python, HTML/CSS/JS, TS, SQL',
    'Git, Jira, Visual Studio, Azure, Postman',
    'Angular, React, .NET Core, Node, Travis CI, Redux, Foundation, Bootstrap, Angular Material'
  ],
  lastModified: 'April 20, 2021'
};
