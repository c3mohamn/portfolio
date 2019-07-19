import { Project } from '../models/project.model';
import { warmainsProject } from './project-warmains';
import { telegramBotProject } from './project-telegram-bot';
import { adminPanelProject } from './project-admin-panel';

export const projects: Project[] = [
  warmainsProject,
  adminPanelProject,
  telegramBotProject
  // {
  //   name: 'book-me',
  //   title: `Book-Me`,
  //   shortDescription: `An office hour scheduler for students, TAs, and instructors.`,
  //   type: ProjectType.School,
  //   tags: ['Angular', 'Nodejs', 'Mongo', 'Engineering', 'School'],
  //   svgLogoName: 'book-me-logo',
  //   previewImgRelativePath: 'assets/images/projects/preview/book-me.png'
  // },
  // {
  //   name: 'course-correct',
  //   title: `Course Correct`,
  //   shortDescription: `A concatenation of numerous course selection helpers in one app.`,
  //   type: ProjectType.School,
  //   tags: ['Android', 'Java', 'Engineering', 'School'],
  //   svgLogoName: 'course-correct-logo',
  //   previewImgRelativePath: 'assets/images/projects/preview/course-correct.png'
  // },
  // {
  //   name: 'hands-for-mental-health',
  //   title: `Hands for Mental Health`,
  //   shortDescription: `Prototyping and designing solutions for mental health awareness.`,
  //   type: ProjectType.School,
  //   tags: ['Axure', 'HCI', 'Prototyping', 'Research', 'School'],
  //   svgLogoName: 'mental-health',
  //   previewImgRelativePath:
  //     'assets/images/projects/preview/hands-for-mental-health.png'
  // },
  // {
  //   name: 'cineplex',
  //   title: `Cineplex Heuristic Evaluation & Usability Study`,
  //   shortDescription: `Qualitative evaluation of Cineplex's web interface.`,
  //   type: ProjectType.School,
  //   tags: ['Heuristics', 'HCI', 'Heuristics', 'Study', 'School'],
  //   svgLogoName: 'cineplex',
  //   previewImgRelativePath: 'assets/images/projects/preview/cineplex.png'
  // },
  // {
  //   name: 'smart-watch-keyboard',
  //   title: `Smart Watch Keyboard Controlled Experiment`,
  //   shortDescription: `Quantitative evaluation of miniature keyboard techniques for smart watches.`,
  //   type: ProjectType.School,
  //   tags: ['React', 'HCI', 'Experiment', 'Study', 'School'],
  //   svgLogoName: 'keyboard',
  //   previewImgRelativePath: 'assets/images/projects/preview/smart-watch.png'
  // }
];
