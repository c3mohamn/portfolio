export interface Project {
  id?: number;
  orderNumber?: number;
  name: string;
  title: string;
  shortDescription?: string;
  type: ProjectType;
  tags: string[];
  svgLogoName: string;
  overview?: string; // What is it?
  goals?: string; // include feature list requirements
  contributions?: string; // what i did
  process?: string; // what was done, how it was done
  outcome?: string; // what came of it? lessons learned.
  previewImgRelativePath?: string;
  overviewImgRelativePath?: string;
  processImgRelativePath?: string;
}

export enum ProjectType {
  Work = 'Work',
  School = 'School',
  Personal = 'Personal'
}
