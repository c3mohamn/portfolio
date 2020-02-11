import { Injectable } from '@angular/core';
import { projects } from 'src/app/shared/data/projects';
import { Project } from 'src/app/projects/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects = projects;

  constructor() {}

  // temp
  getProject(projectName: string): Project {
    return projects.find(p => p.name === projectName);
  }
}
