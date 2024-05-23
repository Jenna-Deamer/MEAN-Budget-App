import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  serverUrl: string = environment.serverUrl;

  /* A BehaviorSubject to hold the authentication status &
    allow other parts of  app to subscribe to changes.
   It is initialized with the current authentication status. */
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasUser());
  /*An observable to allow other parts of the app to reactively 
   update when the authentication status changes.*/
  isLoggedIn = this.isLoggedInSubject.asObservable();

  private usernameSubject = new BehaviorSubject<string | null>(this.getUsername());
  username = this.usernameSubject.asObservable();
  /* A helper method to check if there is a user in local storage, 
  indicating that the user is logged in.*/
  public hasUser(): boolean {
    return !!localStorage.getItem('user'); // Returns true if 'user' is in local storage, otherwise false.
  }

  private getUsername(): string | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).username : null;
  }

  checkUsername(username: string): Observable<any> {
    return this.http.get<any>(`${this.serverUrl}/api/users/checkUsername/${username}`).pipe(
      catchError(error => {
        console.error('Username check error:', error);
        return error;
      })
    );
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.serverUrl}/api/users/login`, { username, password }).pipe(
      map(response => {
        // Store user data in local storage upon successful login
        localStorage.setItem('user', JSON.stringify(response.user));
        // Update the authentication status to indicate that the user is logged in
        this.isLoggedInSubject.next(true);
        // Emit the username to subscribers
        this.usernameSubject.next(response.user.username);
        return response;
      }),
      catchError(error => {
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
    // Clear user data from local storage upon logout
    localStorage.removeItem('user');
    // Update the authentication status to indicate that the user is logged out
    this.isLoggedInSubject.next(false);
    // Clear the username
    this.usernameSubject.next(null);
    // Send a request to the server to log the user out
    return this.http.get<any>(`${this.serverUrl}/api/users/logout`);
  }
}
