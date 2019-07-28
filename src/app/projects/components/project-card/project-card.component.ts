import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/projects/models/project.model';

@Component({
  selector: 'nm-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;

  constructor() {}

  ngOnInit() {}
}
