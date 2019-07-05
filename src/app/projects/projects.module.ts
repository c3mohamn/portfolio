import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectComponent } from './components/project/project.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

@NgModule({
  declarations: [ProjectsComponent, ProjectCardComponent, ProjectComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    AngularSvgIconModule,
    NgxPageScrollModule,
    NgxPageScrollCoreModule.forRoot({ duration: 500 })
  ]
})
export class ProjectsModule {}
