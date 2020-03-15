import { Component, OnInit } from '@angular/core';
import { MetaTagService } from 'src/app/services/meta-tag/meta-tag.service';

@Component({
  selector: 'nm-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  constructor(private metaTagService: MetaTagService) {}

  ngOnInit() {
    this.metaTagService.setTitle('Resume | Nasir Mohammad Portfolio');
    this.metaTagService.updateImgTagDefault();
    this.metaTagService.updateDescriptionTagDefault();
    this.metaTagService.updateUrlTag('/resume');
  }
}
