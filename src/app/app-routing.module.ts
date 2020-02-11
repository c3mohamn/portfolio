import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'projects',
    pathMatch: 'full',
    // loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { title: 'Home' }
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.module').then(m => m.ProjectsModule),
    data: { title: 'Projects', index: 0 }
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
    data: { title: 'About', index: 1 }
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./resume/resume.module').then(m => m.ResumeModule),
    data: { title: 'Resume', index: 2 }
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then(m => m.ContactModule),
    data: { title: 'Contact', index: 3 }
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    data: { title: 'Admin', index: 4 }
  },
  {
    path: '**',
    redirectTo: 'projects',
    pathMatch: 'full'
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
export class AppRoutingModule {}
