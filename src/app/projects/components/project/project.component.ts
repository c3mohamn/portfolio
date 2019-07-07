import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project } from 'src/app/shared/models/project.model';
import { projects } from 'src/app/shared/data/projects';
import { RouterStateService } from 'src/app/state/router-state/router-state.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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

  constructor(private routeService: RouterStateService) {}

  ngOnInit() {
    this.routeService
      .getCurrentParams()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.projectName = data && data.project;
        if (this.projectName) {
          this.project = projects.find(p => p.name === this.projectName);
        }
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
