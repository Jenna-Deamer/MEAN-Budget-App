import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
@Component({
  selector: 'app-root',
  template: `
  <main>
  <nav class="navbar navbar-expand-lg ps-4 pe-4">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Transactions</a>
      </li>
    </ul>
    <ul class="navbar-nav ms-auto">
    <!-- <li class="nav-item">
      <a class="nav-link" href="#"><i class="bi bi-person-circle"></i> Hello, </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/auth/logout"><i class="bi bi-door-open"></i> Logout</a>
    </li> -->
    <li class="nav-item">
      <a class="nav-link" href="/auth/register">Sign-Up</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/auth/login">Login</a>
    </li>
</ul>
  </div>
</nav>
    <section class="main-content">
      <!-- <app-home></app-home> -->
      <app-dashboard></app-dashboard>
    </section>
    <footer class="fixed-bottom text-center">©2024 Jenna Deamer</footer>
  </main>
`,
  standalone: true,
  imports: [RouterOutlet, HomeComponent, DashboardComponent],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'budget-app';
}
