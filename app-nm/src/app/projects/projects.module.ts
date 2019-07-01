import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectComponent } from './components/project/project.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [ProjectsComponent, ProjectCardComponent, ProjectComponent],
  imports: [CommonModule, ProjectsRoutingModule, AngularSvgIconModule]
})
export class ProjectsModule {}
