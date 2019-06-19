import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { title: 'Home' }
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    data: { title: 'About' }
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./resume/resume.module').then(m => m.ResumeModule),
    data: { title: 'Resume' }
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then(m => m.ContactModule),
    data: { title: 'Contact' }
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.module').then(m => m.ProjectsModule),
    data: { title: 'Projects' }
  },
  {
    path: '*',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
