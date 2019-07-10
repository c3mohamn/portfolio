import { Project, ProjectType } from '../models/project.model';

export const projects: Project[] = [
  {
    name: 'source-admin-panel',
    title: `Source Waitlist Admin Panel`,
    shortDescription: `An admin panel allowing the marketing team easily perform CRUD commands on users, email templates, and more.`,
    type: ProjectType.Work,
    tags: ['Angular', '.NET', 'SQL', 'Professional'],
    svgLogoName: 'source-logo',
    previewImgRelativePath: 'assets/images/projects/preview/source.png'
  },
  {
    name: 'source-telegram-bot',
    title: `Source Telegram Bot`,
    shortDescription: `An interactive Telegram bot promoting social engagement.`,
    type: ProjectType.Work,
    tags: ['Telegram', '.NET', 'API', 'Professional'],
    svgLogoName: 'telegram',
    previewImgRelativePath: 'assets/images/projects/preview/telegram-bot.png',
    overviewImgRelativePath: 'assets/images/projects/preview/telegram-bot.png'
  },
  {
    name: 'warmains',
    title: `Warmains`,
    shortDescription: `A character, talent, and raid planning tool for World of Warcraft.`,
    type: ProjectType.Personal,
    tags: ['Angular', 'Nodejs', 'Mongo', 'Gaming', 'Personal'],
    svgLogoName: 'horde-logo',
    previewImgRelativePath: 'assets/images/projects/preview/warmains.png'
  },
  {
    name: 'book-me',
    title: `Book-Me`,
    shortDescription: `An office hour scheduler for students, TAs, and instructors.`,
    type: ProjectType.School,
    tags: ['Angular', 'Nodejs', 'Mongo', 'Engineering', 'School'],
    svgLogoName: 'book-me-logo',
    previewImgRelativePath: 'assets/images/projects/preview/book-me.png'
  },
  {
    name: 'course-correct',
    title: `Course Correct`,
    shortDescription: `A concatenation of numerous course selection helpers in one app.`,
    type: ProjectType.School,
    tags: ['Android', 'Java', 'Engineering', 'School'],
    svgLogoName: 'course-correct-logo',
    previewImgRelativePath: 'assets/images/projects/preview/course-correct.png'
  },
  {
    name: 'hands-for-mental-health',
    title: `Hands for Mental Health`,
    shortDescription: `Prototyping and designing solutions for mental health awareness.`,
    type: ProjectType.School,
    tags: ['Axure', 'HCI', 'Prototyping', 'Research', 'School'],
    svgLogoName: 'mental-health',
    previewImgRelativePath:
      'assets/images/projects/preview/hands-for-mental-health.png'
  },
  {
    name: 'cineplex',
    title: `Cineplex Heuristic Evaluation & Usability Study`,
    shortDescription: `Qualitative evaluation of Cineplex's web interface.`,
    type: ProjectType.School,
    tags: ['Heuristics', 'HCI', 'Heuristics', 'Study', 'School'],
    svgLogoName: 'cineplex',
    previewImgRelativePath: 'assets/images/projects/preview/cineplex.png'
  },
  {
    name: 'smart-watch-keyboard',
    title: `Smart Watch Keyboard Controlled Experiment`,
    shortDescription: `Quantitative evaluation of miniature keyboard techniques for smart watches.`,
    type: ProjectType.School,
    tags: ['React', 'HCI', 'Experiment', 'Study', 'School'],
    svgLogoName: 'keyboard',
    previewImgRelativePath: 'assets/images/projects/preview/smart-watch.png'
  }
];
