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

  constructor() { }

  ngOnInit() {
  }
}
