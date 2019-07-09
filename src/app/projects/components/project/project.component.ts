import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project } from 'src/app/shared/models/project.model';
import { projects } from 'src/app/shared/data/projects';
import { RouterStateService } from 'src/app/state/router-state/router-state.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MetaTagService } from 'src/app/shared/services/meta-tag/meta-tag.service';

@Component({
  selector: 'nm-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject();
  projects: Project[] = projects;
  project: Project;
  projectName: string;

  constructor(
    private routeService: RouterStateService,
    private metaTagService: MetaTagService
  ) {}

  ngOnInit() {
    this.routeService
      .getCurrentParams()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.projectName = data && data.project;
        this.project = projects.find(p => p.name === this.projectName);
        if (this.project) {
          // set meta tags
          this.metaTagService.setTitle(
            `${this.project.title} | Projects | Nasir Mohammad Portfolio`
          );
          this.metaTagService.updateDescriptionTag(
            this.project.shortDescription
          );
          this.metaTagService.updateImgTag(
            `https://www.nasirm.ca/${this.project.previewImgRelativePath}`
          );
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
