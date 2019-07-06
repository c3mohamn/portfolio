import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule, MatIconModule]
})
export class AboutModule {}
