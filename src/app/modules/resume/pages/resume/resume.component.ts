import { MetaTagService } from 'src/app/services/meta-tag/meta-tag.service';

import { Component, OnInit } from '@angular/core';
import { Resume } from '../../models/resume.interface';
import { resume } from '../../constants/resume.constant';

@Component({
  selector: 'nm-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  resume: Resume = resume;

  constructor(private metaTagService: MetaTagService) {}

  ngOnInit() {
    this.metaTagService.setTitle('Resume | Nasir Mohammad Portfolio');
    this.metaTagService.updateImgTagDefault();
    this.metaTagService.updateDescriptionTagDefault();
    this.metaTagService.updateUrlTag('/resume');
  }
}
