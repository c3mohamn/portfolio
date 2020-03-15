import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { projects } from '../data/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects = projects;

  constructor() {}

  // temp
  getProject(projectName: string): Project {
    return this.projects.find(p => p.name === projectName);
  }
}
