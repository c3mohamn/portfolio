import { Component, OnInit } from '@angular/core';
import { iconList } from 'src/app/shared/data/about-icon-list';
import { AboutIcon } from 'src/app/shared/models/about-icon.model.ts';

@Component({
  selector: 'nm-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  iconList: AboutIcon[] = iconList;
  description = '';
  selected = '';

  constructor() { }

  ngOnInit() {
  }

  showDescriptionFor(icon: AboutIcon): void {
    if (this.selected === icon.class) {
      this.selected = '';
      this.description = '';
    } else if (icon.description) {
      this.description = icon.description;
      this.selected = icon.class;
    }
  }
}
