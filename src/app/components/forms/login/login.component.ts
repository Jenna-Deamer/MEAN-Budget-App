import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink, RouterLinkActive,NgIf, NgClass,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  formInvalid: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
     // Reset error states
     this.formInvalid = false;

     //form validation
     if (!this.username || !this.password) {
      this.formInvalid = true;
      return;
    }

    this.authService.login(this.username, this.password)
      .subscribe(response => {
        // Handle successful login response
        console.log('Login successful:', response);
        console.log(this.username + " " + this.password);
        //redirect to transactions page
        this.router.navigateByUrl('/transactions');
      }, error => {
        // Handle login error
        console.error('Login error:', error);
        //display an error message to the user
      });
  }
}