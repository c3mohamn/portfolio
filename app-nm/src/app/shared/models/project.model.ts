export interface Project {
  id: number;
  name: string;
  title: string;
  type: ProjectType;
  purpose: string;
  features: string;
  contributions: string;
  takeaways: string;
  tags?: string[];
}

export enum ProjectType {
  Work,
  School,
  Personal
}
