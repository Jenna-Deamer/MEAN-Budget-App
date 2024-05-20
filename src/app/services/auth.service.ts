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

  // isLoggedIn(): boolean {
  //   return !!localStorage.getItem('user'); // Check if user data exists in local storage
  // }

  /* A BehaviorSubject to hold the authentication status &
    allow other parts of  app to subscribe to changes.
   It is initialized with the current authentication status. */
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasUser());
  /*An observable to allow other parts of the app to reactively 
   update when the authentication status changes.*/
  isLoggedIn = this.isLoggedInSubject.asObservable(); 

  /* A helper method to check if there is a user in local storage, 
  indicating that the user is logged in.*/
  public hasUser(): boolean {
    return !!localStorage.getItem('user'); // Returns true if 'user' is in local storage, otherwise false.
  }

  login(username: string, password: string): Observable<any> {
    console.log('login service called');
    return this.http.post<any>(`${this.serverUrl}/api/users/login`, { username, password }).pipe(
      map(response => {
        // Handle successful login
        localStorage.setItem('user', JSON.stringify(response.user)); // Store user data in local storage
        this.isLoggedInSubject.next(true); //Update behaviorSubject 
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
    this.isLoggedInSubject.next(false);  // Update the BehaviorSubject
    return this.http.get<any>(`${this.serverUrl}/api/users/logout`);
  }
}
