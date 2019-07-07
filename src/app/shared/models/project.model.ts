export interface Project {
  id: number;
  name: string;
  title: string;
  shortDescription?: string;
  type: ProjectType;
  purpose: string;
  features: string;
  contributions: string;
  takeaways: string;
  tags?: string[];
  svgLogoName?: string;
  previewImgRelativePath?: string;
}

export enum ProjectType {
  Work,
  School,
  Personal
}
