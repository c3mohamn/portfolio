import { Component, OnInit } from '@angular/core';
import { iconList, howItStarted } from 'src/app/shared/data/about-website';
import { TechIcon } from 'src/app/shared/models/about-tech.model';
import { aboutMe } from 'src/app/shared/data/about-me';

@Component({
  selector: 'nm-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  iconList: TechIcon[] = iconList;
  howItStarted: string = howItStarted;
  description = '';
  selected = '';
  aboutMe: any = aboutMe;

  constructor() {}

  ngOnInit() {}

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
