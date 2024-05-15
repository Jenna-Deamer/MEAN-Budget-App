import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  serverUrl: string = environment.serverUrl;
  
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user'); // Check if user data exists in local storage
  }

  login(username: string, password: string): Observable<any> {
    console.log('login service called');
    return this.http.post<any>(`${this.serverUrl}/api/users/login`, { username, password }).pipe(
      map(response => {
        // Handle successful login
        localStorage.setItem('user', JSON.stringify(response.user)); // Store user data in local storage
        return response;
      }),
      catchError(error => {
        // Handle login error
        console.error('Login error:', error);
        return error;
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
        return error;
      })
    );
  }

  logout(): Observable<any> {
    localStorage.removeItem('user'); // Clear user data from local storage upon logout
    return this.http.get<any>(`${this.serverUrl}/api/users/logout`);
  }
}
