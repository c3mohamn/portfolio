import { Component, OnInit } from '@angular/core';
import { MetaTagService } from 'src/app/shared/services/meta-tag/meta-tag.service';

@Component({
  selector: 'nm-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private metaTagService: MetaTagService) {}

  ngOnInit() {
    this.metaTagService.setTitle('Admin | Nasir Mohammad Portfolio');
    this.metaTagService.updateImgTagDefault();
    this.metaTagService.updateDescriptionTagDefault();
    this.metaTagService.updateUrlTag('/admin');
  }
}
