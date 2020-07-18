import { MetaTagService } from 'src/app/services/meta-tag/meta-tag.service';

import { Component, OnInit } from '@angular/core';

import { iconList } from '../../data/about-website';
import { TechIcon } from '../../models/tech-icon.model';

@Component({
  selector: 'nm-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  iconList: TechIcon[] = iconList;
  description = '';
  selected = '';

  constructor(private metaTagService: MetaTagService) {}

  ngOnInit() {
    this.metaTagService.setTitle('About | Nasir Mohammad Portfolio');
    this.metaTagService.updateImgTagDefault();
    this.metaTagService.updateDescriptionTagDefault();
    this.metaTagService.updateUrlTag('/about');
  }

  showDescriptionFor(icon: TechIcon): void {
    if (this.selected === icon.cssClass) {
      this.selected = '';
      this.description = '';
    } else if (icon.description) {
      this.description = icon.description;
      this.selected = icon.cssClass;
    }
  }
}
