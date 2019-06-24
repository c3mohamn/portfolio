export interface Project {
  title: string;
  type: ProjectType;
  purpose: string;
  features: string;
  contributions: string;
  takeaways: string;
}

export enum ProjectType {
  Work,
  School,
  Personal
}
