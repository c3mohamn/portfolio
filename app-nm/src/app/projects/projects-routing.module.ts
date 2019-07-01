import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [{
  path: '',
  component: ProjectsComponent,
  children: [{ path: ':project', component: ProjectComponent, data: { title: 'Projects', index: 0 } }],
  data: {
    title: 'Projects',
    index: 0
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
