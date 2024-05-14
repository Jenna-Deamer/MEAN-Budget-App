import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  // Set API URL class level so all methods share it
  serverUrl: string = environment.serverUrl;
  
  login(username: string, password: string): Observable<any> {
    console.log('login service called');
    return this.http.post<any>(`${this.serverUrl}/api/users/login`, { username, password }).pipe(
      map(response => {
        // Handle successful login, store token or user data in local storage
        localStorage.setItem('token', response.token);
        return response;
      }),
      catchError(error => {
        // Handle login error
        console.error('Login error:', error);
        return of(null);
      })
    );
  }

  register(username: string, password: string): Observable<any> {
    console.log('register service called');
    return this.http.post<any>(`${this.serverUrl}/api/users/register`, { username, password }).pipe(
      map(response => {
        // Handle successful registration
        console.log('Registration successful:', response);
        return response;
      }),
      catchError(error => {
        // Handle registration error
        console.error('Registration error:', error);
        return of(null);
      })
    );
  }

  logout(): void {
    // Clear stored token or user data from local storage
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    // Check if token or user data exists in local storage
    return !!localStorage.getItem('token');
  }
}
