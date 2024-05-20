import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

/* The `authGuard` function implements the CanActivate interface, which determines if a route can be activated.
   This function uses dependency injection to obtain instances of AuthService & Router. */
export const authGuard: CanActivateFn = (route, state) => {
  // Obtain an instance using Angular's dependency injection.
  const authService = inject(AuthService);
  const router = inject(Router);
  
  // Check if the user is logged in by calling the `hasUser` method of AuthService.
  if (authService.hasUser()) {
    // If the user is logged in, allow the route to be activated.
    return true;
  } else {
    // If the user is not logged in, redirect to the login page.
    router.navigate(['/login']);
    // Prevent the route from being activated.
    return false;
  }
};
