import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Project } from 'src/app/projects/models/project.model';
import { projects } from 'src/app/shared/data/projects';
import { listFadeAnimation } from 'src/app/shared/animations/list.animation';
import { RouterStateService } from 'src/app/state/router-state/router-state.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MetaTagService } from 'src/app/shared/services/meta-tag/meta-tag.service';

@Component({
  selector: 'nm-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [listFadeAnimation]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject();
  projects: Project[] = projects;

  constructor(
    private routeService: RouterStateService,
    private metaTagService: MetaTagService
  ) {}

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
