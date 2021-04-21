export interface Resume {
  name: string;
  title: string;
  email: string;
  summary: string;
  experiences: ResumeExperience[];
  activities: string[];
  skills: string[];
  // education
  lastModified: string;
}

export interface ResumeExperience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}
