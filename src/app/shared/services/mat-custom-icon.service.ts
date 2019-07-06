import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { customIcons } from '../data/custom-icons';

@Injectable({
  providedIn: 'root'
})
export class MatCustomIconService {
  icons = customIcons;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  /**
   * Adds an icon to the Material Icon Registry.
   *
   * @param name Name of icon
   */
  addCustomIcon(name: string): void {
    this.matIconRegistry.addSvgIcon(
      name,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `../../assets/icons/${name}.svg`
      )
    );
  }

  /**
   * Add all custom icons that we will use in the website.
   */
  addAllCustomIcons(): void {
    for (const iconName of this.icons) {
      this.addCustomIcon(iconName);
    }
  }
}
