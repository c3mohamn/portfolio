import { socialMedia } from 'src/app/data/social-media-list';
import { SocialMediaLink } from 'src/app/models/social-media.model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  socialMediaList: SocialMediaLink[] = socialMedia;
  year: number;

  constructor() {}

  ngOnInit() {
    this.year = new Date().getFullYear();
  }
}
