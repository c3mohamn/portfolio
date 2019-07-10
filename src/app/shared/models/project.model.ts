export interface Project {
  id?: number;
  orderNumber?: number;
  name: string;
  title: string;
  shortDescription?: string;
  type: ProjectType;
  overview?: string; // What is it?
  goals?: string; // include feature list requirements
  contributions?: string; // what i did
  process?: string; // what was done, how it was done
  outcome?: string; // what came of it? lessons learned.
  tags: string[];
  svgLogoName: string;
  previewImgRelativePath?: string;
  overviewImgRelativePath?: string;
  processImgRelativePath?: string;
}

export enum ProjectType {
  Work,
  School,
  Personal
}
