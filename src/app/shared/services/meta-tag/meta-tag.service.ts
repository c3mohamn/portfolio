import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaTagService {
  constructor(private title: Title, private meta: Meta) {}

  /**
   * Adds a meta tag with tagName and content.
   *
   * @param tagName Name of meta tag
   * @param content Content of meta tag
   */
  updateTag(tagName: string, content: string): void {
    if (tagName.includes('og')) {
      this.meta.updateTag({ property: tagName, content });
    } else {
      this.meta.updateTag({ name: tagName, content });
    }
  }

  /**
   * Set the title of page and updates og:title and twitter:title.
   *
   * @param title Title for given page
   */
  setTitle(title: string): void {
    this.title.setTitle(title);
    this.updateTag('og:title', title);
    this.updateTag('twitter:title', title);
  }

  /**
   * Updates content for description, og:description and twitter:description meta tags.
   *
   * @param content Description content
   */
  updateDescriptionTag(content: string): void {
    this.updateTag('description', content);
    this.updateTag('og:description', content);
    this.updateTag('twitter:description', content);
  }

  /**
   * Updates content for og:image and twitter:image meta tags.
   *
   * @param content Image url
   */
  updateImgTag(content: string): void {
    this.updateTag('og:image', content);
    this.updateTag('twitter:image', content);
  }

  /**
   * Update content for og:image and twitter:image meta tags to the default.
   */
  updateImgTagDefault(): void {
    this.updateImgTag('https://www.nasirm.ca/assets/images/nasir-1.png');
  }

  /**
   * Updates content for description, og:description and twitter:description meta tags to the default.
   */
  updateDescriptionTagDefault(): void {
    const description = `Website portfolio for Nasir Mohammad, a Software Developer
    with a passion for solving problems, creating cool apps, and learning new things.`;
    this.updateDescriptionTag(description);
  }
}
