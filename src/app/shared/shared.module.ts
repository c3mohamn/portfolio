import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellNoRenderDirective } from './directives/app-shell/app-shell-no-render.directive';
import { AppShellRenderDirective } from './directives/app-shell/app-shell-render.directive';

@NgModule({
  declarations: [AppShellRenderDirective, AppShellNoRenderDirective],
  imports: [CommonModule],
  exports: [AppShellRenderDirective, AppShellNoRenderDirective]
})
export class SharedModule {}
