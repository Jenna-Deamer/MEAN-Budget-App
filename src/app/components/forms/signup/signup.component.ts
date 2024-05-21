import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink, RouterLinkActive, NgIf, NgClass,],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  formInvalid: boolean = false;
  formErrorMessage: string = '';
  usernameTaken: boolean = false;


  constructor(private authService: AuthService, private router: Router) { }

  createUser(): void {
    // Reset error states
    this.formInvalid = false;

    //form validation

    // Form validation
    //if empty
    if (!this.username || !this.password) {
      this.formInvalid = true;
      this.formErrorMessage = "Please fill out all fields";
      return;
      //if password is not 8 or more
    } else if (this.password.length < 8) {
      this.formInvalid = true;
      this.formErrorMessage = "Password must be 8 or more characters";
      return;
    }
    //if username is taken

    this.authService.register(this.username, this.password)
      .subscribe(response => {
        // Handle successful registration response
        console.log('Registration successful:', response);
        //redirect to transactions page
        this.router.navigateByUrl('/transactions');
      }, error => {
        // Handle registration error
        console.error('Registration error:', error);
        // Display error message to the user
      });
  }
}
