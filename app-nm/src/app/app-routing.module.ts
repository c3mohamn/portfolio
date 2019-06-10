import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    data: { title: 'Home' }
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule',
    data: { title: 'About' }
  },
  {
    path: 'resume',
    loadChildren: './resume/resume.module#ResumeModule',
    data: { title: 'Resume' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
