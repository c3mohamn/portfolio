import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MetaTagService } from 'src/app/services/meta-tag/meta-tag.service';
import { RouterStateService } from 'src/app/services/router-state.service';

import { Component, OnDestroy, OnInit } from '@angular/core';

import { projects } from '../../data/projects';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'nm-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
  projects: Project[] = projects;
  project: Project;
  projectName: string;
  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(private routeService: RouterStateService, private metaTagService: MetaTagService, private projectService: ProjectService) {}

  ngOnInit() {
    this.routeService
      .getCurrentParams()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => {
        this.projectName = data && data.project;
        this.project = this.projectService.getProject(this.projectName);
        if (this.project) {
          // set meta tags
          this.metaTagService.setTitle(`${this.project.title} | Projects | Nasir Mohammad Portfolio`);
          this.metaTagService.updateDescriptionTag(this.project.shortDescription);
          this.metaTagService.updateImgTag(`https://www.nasirm.ca/${this.project.previewImgRelativePath}`);
          this.metaTagService.updateUrlTag(`/projects/${this.project.name}`);
        } else {
          this.metaTagService.setTitle(`Projects | Nasir Mohammad Portfolio`);
          this.metaTagService.updateDescriptionTagDefault();
          this.metaTagService.updateImgTagDefault();
          this.metaTagService.updateUrlTag('/projects');
        }
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
