import { Component, OnInit, Input, Inject, PLATFORM_ID } from '@angular/core';
import { Project } from 'src/app/shared/models/project.model';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'nm-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {}
}
