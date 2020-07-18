import { Subject } from 'rxjs';
import { listFadeAnimation } from 'src/app/animations/list.animation';
import { MetaTagService } from 'src/app/services/meta-tag/meta-tag.service';

import { Component, OnDestroy, OnInit } from '@angular/core';

import { projects } from '../data/projects';
import { Project } from '../models/project.model';

@Component({
  selector: 'nm-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [listFadeAnimation]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject();
  projects: Project[] = projects;

  constructor(private metaTagService: MetaTagService) {}

  ngOnInit() {
    this.metaTagService.setTitle('Projects | Nasir Mohammad Portfolio');
    this.metaTagService.updateImgTagDefault();
    this.metaTagService.updateDescriptionTagDefault();
    this.metaTagService.updateUrlTag('/projects');
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
