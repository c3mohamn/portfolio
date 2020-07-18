import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ContactForm } from '../models/contact-form.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactApi = '/api/contact';

  constructor(private http: HttpClient) {}

  /**
   * Does nothing at the moment.
   */
  getContact(): Observable<any> {
    return this.http.get<any>(`${this.contactApi}`);
  }

  /**
   * Sends an email using SendGrid in the back-end.
   *
   * @param form ContactForm
   */
  sendEmail(form: ContactForm): Observable<any> {
    return this.http.post<any>(`${this.contactApi}/send`, { form });
  }
}
