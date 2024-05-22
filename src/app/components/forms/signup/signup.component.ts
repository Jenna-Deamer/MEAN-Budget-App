import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  formInvalid: boolean = false;
  formErrorMessage: string = '';
  usernameTaken: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  checkUsernameAvailability(): void {
    if (!this.username) return; // Don't check if username is empty

    this.authService.checkUsername(this.username).subscribe(
      response => {
        this.usernameTaken = !response.available;
        if (this.usernameTaken) {
          this.formErrorMessage = 'Username taken';
        } else {
          this.formErrorMessage = '';
        }
      },
      error => {
        console.error('Error checking username availability:', error);
        // Handle error
      }
    );
  }

  createUser(): void {
    // Reset error states
    this.formInvalid = false;
    this.formErrorMessage = '';

    // Form validation
    if (!this.username || !this.password) {
      this.formInvalid = true;
      this.formErrorMessage = "Please fill out all fields";
      return;
    } else if (this.password.length < 8) {
      this.formInvalid = true;
      this.formErrorMessage = "Password must be 8 or more characters";
      return;
    }

    // Check username availability before proceeding
    this.authService.checkUsername(this.username).subscribe(
      response => {
        this.usernameTaken = !response.available;
        if (this.usernameTaken) {
          this.formInvalid = true;
          this.formErrorMessage = 'Username taken';
        } else {
          // Proceed with registration
          this.authService.register(this.username, this.password).subscribe(
            response => {
              console.log('Registration successful:', response);
              this.router.navigateByUrl('/login');
            },
            error => {
              console.error('Registration error:', error);
              this.formErrorMessage = 'An error occurred during registration. Please try again later.';
            }
          );
        }
      },
      error => {
        console.error('Error checking username availability:', error);
        this.formErrorMessage = 'An error occurred while checking username availability. Please try again later.';
      }
    );
  }
}
