import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, RouterOutlet, RouterLink, RouterLinkActive,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.isLoggedIn.subscribe(status => { // Update isLoggedIn based on status
      this.isLoggedIn = status;
    });
    //get username for displaying in Navbar
    this.authService.username.subscribe(name => {
      this.username = name;
    });
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      // Redirect to home page after logout
      this.router.navigateByUrl('/');
    });
  }
}