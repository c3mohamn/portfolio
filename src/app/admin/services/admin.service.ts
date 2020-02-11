import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminApi = '/api/admin';

  constructor(private http: HttpClient) {}

  /**
   * Logs into the admin panel.
   *
   * @param password Admin password
   */
  verify(password: string): Observable<any> {
    console.log(password);
    return this.http.post<any>(`${this.adminApi}/verify`, { password });
  }

  /**
   * Log user in using token retrieved from admin api.
   *
   * @param token Admin password
   */
  login(token: string): void {
    sessionStorage.setItem('token', token);
    console.log('logging in', sessionStorage.getItem('token'));
  }

  /**
   * Log user out.
   */
  logout(): void {
    sessionStorage.removeItem('token');
  }

  /**
   * Return true iff a user is logged in.
   */
  isLoggedIn(): boolean {
    return sessionStorage.getItem('token') ? true : false;
  }
}
