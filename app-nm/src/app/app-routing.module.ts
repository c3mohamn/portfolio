import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'projects',
    pathMatch: 'full',
    // loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { title: 'Home', index: 0 }
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.module').then(m => m.ProjectsModule),
    data: { title: 'Projects', index: 1 }
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    data: { title: 'About', index: 2 }
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./resume/resume.module').then(m => m.ResumeModule),
    data: { title: 'Resume', index: 3 }
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then(m => m.ContactModule),
    data: { title: 'Contact', index: 4 }
  },
  {
    path: '*',
    redirectTo: 'projects',
    pathMatch: 'full',
  }
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
