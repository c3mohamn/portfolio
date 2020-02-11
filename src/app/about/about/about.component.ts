import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { iconList } from 'src/app/shared/data/about-website';
import { TechIcon } from 'src/app/about/models/tech-icon.model';
import { MetaTagService } from 'src/app/shared/services/meta-tag/meta-tag.service';

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
    if (this.selected === icon.class) {
      this.selected = '';
      this.description = '';
    } else if (icon.description) {
      this.description = icon.description;
      this.selected = icon.class;
    }
  }
}
