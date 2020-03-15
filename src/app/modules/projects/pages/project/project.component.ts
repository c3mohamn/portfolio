import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MetaTagService } from 'src/app/services/meta-tag/meta-tag.service';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { projects } from '../../data/projects';
import { RouterStateService } from 'src/app/services/router-state.service';

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
  defaultText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio, ab repudiandae quo perspiciatis dolores
  laudantium nesciunt dicta consectetur deserunt officiis doloremque sunt! Doloremque, iure tenetur? Amet sunt
  reprehenderit eum.`;
  defaultListText = `
  <ul>
  <li>${this.defaultText}</li>
  <li>${this.defaultText}</li>
  <li>${this.defaultText}</li>
</ul>`;

  constructor(
    private routeService: RouterStateService,
    private metaTagService: MetaTagService,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.routeService
      .getCurrentParams()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
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
