import { Project, ProjectType } from '../models/project.model';

export const projects: Project[] = [
  {
    id: 0,
    name: 'source',
    title: `Source Waitlist`,
    type: ProjectType.Work,
    purpose: ``,
    features: ``,
    contributions: ``,
    takeaways: ``,
    tags: ['Waitlist', 'Angular', '.NET'],
    svgLogoPath: 'assets/icons/source-logo.svg',
    previewPhotoPath: 'assets/images/projects/preview/source.png'
  },
  {
    id: 1,
    name: 'warmains',
    title: `Warmains`,
    type: ProjectType.Personal,
    purpose: ``,
    features: ``,
    contributions: ``,
    takeaways: ``,
    tags: ['Gaming', 'Tool', 'Angular'],
    svgLogoPath: 'assets/icons/horde-logo.svg',
    previewPhotoPath: 'assets/images/projects/preview/warmains.png'
  },
  {
    id: 2,
    name: 'book-me',
    title: `Book-Me`,
    type: ProjectType.School,
    purpose: ``,
    features: ``,
    contributions: ``,
    takeaways: ``,
    tags: ['Engineering', 'Angular', 'Scheduler'],
    svgLogoPath: 'assets/icons/book-me-logo.svg',
    previewPhotoPath: 'assets/images/projects/preview/book-me.png'
  },
  {
    id: 3,
    name: 'course-correct',
    title: `Course Correct`,
    type: ProjectType.School,
    purpose: ``,
    features: ``,
    contributions: ``,
    takeaways: ``,
    tags: ['Engineering', 'Android', 'Course'],
    svgLogoPath: 'assets/icons/course-correct-logo.svg',
    previewPhotoPath: 'assets/images/projects/preview/course-correct.png'
  },
  {
    id: 4,
    name: 'hands-for-mental-health',
    title: `Hands for Mental Health`,
    type: ProjectType.School,
    purpose: ``,
    features: ``,
    contributions: ``,
    takeaways: ``,
    tags: ['HCI', 'Prototyping', 'Research'],
    svgLogoPath: 'assets/icons/mental-health.svg',
    previewPhotoPath:
      'assets/images/projects/preview/hands-for-mental-health.png'
  },
  {
    id: 5,
    name: 'cineplex',
    title: `Cineplex Usability Study`,
    type: ProjectType.School,
    purpose: ``,
    features: ``,
    contributions: ``,
    takeaways: ``,
    tags: ['HCI', 'Experiment', 'Heuristics'],
    svgLogoPath: 'assets/icons/cineplex.svg',
    previewPhotoPath: 'assets/images/projects/preview/cineplex.png'
  },
  {
    id: 6,
    name: 'smart-watch-keyboard',
    title: `Smart Watch Keyboard Usability Study`,
    type: ProjectType.School,
    purpose: ``,
    features: ``,
    contributions: ``,
    takeaways: ``,
    tags: ['HCI', 'Experiment', 'React'],
    svgLogoPath: 'assets/icons/keyboard.svg',
    previewPhotoPath: 'assets/images/projects/preview/smart-watch.png'
  }
];
