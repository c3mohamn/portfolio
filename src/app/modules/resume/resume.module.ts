import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ResumeComponent } from './pages/resume/resume.component';
import { ResumeRoutingModule } from './resume-routing.module';

@NgModule({
  declarations: [ResumeComponent],
  imports: [CommonModule, ResumeRoutingModule, MatTooltipModule, MatButtonModule]
})
export class ResumeModule {}
