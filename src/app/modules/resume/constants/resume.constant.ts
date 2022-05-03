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
      title: 'Senior Software Developer',
      company: 'Home Depot Canada',
      startDate: 'October 2019',
      endDate: 'Present',
      bullets: [
        'Build and maintain re-usable components consumed by multiple Angular projects',
        'Collaborate with several teams to solve problems - including UI, mobile, backend, and product',
        'Write clean and organized documentation for architectural designs, features, standards, and guides',
        'Present and demo successfully deployed projects to both a technical and non-technical audience',
        "Boost Home Depot's website performance by removing redundancies, decreasing bundle size, improving load events, and updating dependencies",
        "Improve Home Depot's store localization ﬂow to more accurately assign user's to their nearest store",
        'Implement solutions to automate manual work ﬂows that sped up the process and eliminated human errors'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Reportin / Source',
      startDate: 'June 2017',
      endDate: 'August 2018',
      bullets: [
        "Implemented an automated test strategy for Reportin’s API on .NET Core, increasing test coverage by 87%",
        'Independently created an admin panel for a product waitlist that allowed the marketing team to modify UI and email templates',
        'Built an interactive Telegram bot integrated with our waitlist API encouraging social engagement of Reportin’s platform',
        'Incorporated an Agile workﬂow using Jira and daily scrum meetings'
      ]
    }
  ],
  activities: [
    `Competed in basketball and volleyball intramurals at University College.`,
    `Officer in a large MMORPG guild with over 900 players. In charge of organizing and leading large groups of players from South America to East Asia in order to achieve the common goal of defeating monsters and dragons.`
  ],
  skills: [
    'Java, C/C#, Python, HTML/CSS/Javascript, Typescript',
    'Git, Jira, Visual Studio, Postman',
    'Angular, React, .NET Core, Node, Travis CI, Redux, Foundation, Bootstrap'
  ],
  lastModified: 'April 20, 2021'
};
