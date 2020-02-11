import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './guard/admin.guard';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  { path: '', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
