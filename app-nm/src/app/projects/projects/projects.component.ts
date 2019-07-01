import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Project } from 'src/app/shared/models/project.model';
import { projects } from 'src/app/shared/data/projects';

@Component({
  selector: 'nm-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  isHerokuDomain = false;
  projects: Project[] = projects;
  selectedProject = false;

  constructor(@Inject(DOCUMENT) private document: any) {}

  ngOnInit() {
    const fullPath = this.document.location.href;
    if (fullPath.toLowerCase().includes('herokuapp')) {
      this.isHerokuDomain = true;
    }
  }
}
