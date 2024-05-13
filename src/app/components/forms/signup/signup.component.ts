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

  constructor(private authService: AuthService) { }

  createUser(): void {
    this.authService.register(this.username, this.password)
      .subscribe(response => {
        // Handle successful registration response
        console.log('Registration successful:', response);
        // Redirect or show success message
      }, error => {
        // Handle registration error
        console.error('Registration error:', error);
        // Display error message to the user
      });
  }
}
