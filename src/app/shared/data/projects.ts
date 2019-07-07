import { Project, ProjectType } from '../models/project.model';

export const projects: Project[] = [
  {
    id: 0,
    name: 'source',
    title: `Source Waitlist`,
    shortDescription: `A gamified waitlist with numerous social platform integrations.`,
    type: ProjectType.Work,
    purpose: ``,
    features: ``,
    contributions: ``,
    takeaways: ``,
    tags: ['Angular', '.NET', 'SQL', 'Professional'],
    svgLogoName: 'source-logo',
    previewImgRelativePath: 'assets/images/projects/preview/source.png'
  },
  {
    id: 1,
    name: 'warmains',
    title: `Warmains`,
    shortDescription: `Character development tool for World of Warcraft.`,
    type: ProjectType.Personal,
    purpose: ``,
    features: ``,
    contributions: ``,
    takeaways: ``,
    tags: ['Angular', 'Nodejs', 'Mongo', 'Gaming', 'Personal'],
    svgLogoName: 'horde-logo',
    previewImgRelativePath: 'assets/images/projects/preview/warmains.png'
  },
  {
    id: 2,
    name: 'book-me',
    title: `Book-Me`,
    shortDescription: `Office hour scheduler.`,
    type: ProjectType.School,
    purpose: ``,
    features: ``,
    contributions: ``,
    takeaways: ``,
    tags: ['Angular', 'Nodejs', 'Mongo', 'Engineering', 'School'],
    svgLogoName: 'book-me-logo',
    previewImgRelativePath: 'assets/images/projects/preview/book-me.png'
  },
  {
    id: 3,
    name: 'course-correct',
    title: `Course Correct`,
    shortDescription: `Course selection helper.`,
    type: ProjectType.School,
    purpose: ``,
    features: ``,
    contributions: ``,
    takeaways: ``,
    tags: ['Android', 'Java', 'Engineering', 'School'],
    svgLogoName: 'course-correct-logo',
    previewImgRelativePath: 'assets/images/projects/preview/course-correct.png'
  },
  {
    id: 4,
    name: 'hands-for-mental-health',
    title: `Hands for Mental Health`,
    shortDescription: `Prototyping and designing solutions for mental health awareness.`,
    type: ProjectType.School,
    purpose: ``,
    features: ``,
    contributions: ``,
    takeaways: ``,
    tags: ['Axure', 'HCI', 'Prototyping', 'Research', 'School'],
    svgLogoName: 'mental-health',
    previewImgRelativePath:
      'assets/images/projects/preview/hands-for-mental-health.png'
  },
  {
    id: 5,
    name: 'cineplex',
    title: `Cineplex Heuristic Evaluation & Usability Study`,
    shortDescription: `Qualitative evaluation of Cineplex's web interface.`,
    type: ProjectType.School,
    purpose: ``,
    features: ``,
    contributions: ``,
    takeaways: ``,
    tags: ['Heuristics', 'HCI', 'Heuristics', 'Study', 'School'],
    svgLogoName: 'cineplex',
    previewImgRelativePath: 'assets/images/projects/preview/cineplex.png'
  },
  {
    id: 6,
    name: 'smart-watch-keyboard',
    title: `Smart Watch Keyboard Controlled Experiment`,
    shortDescription: `Quantitative evaluation of miniature keyboard techniques for smart watches.`,
    type: ProjectType.School,
    purpose: ``,
    features: ``,
    contributions: ``,
    takeaways: ``,
    tags: ['React', 'HCI', 'Experiment', 'Study', 'School'],
    svgLogoName: 'keyboard',
    previewImgRelativePath: 'assets/images/projects/preview/smart-watch.png'
  }
];
