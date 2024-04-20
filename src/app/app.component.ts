import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component'

@Component({
  selector: 'app-root',
  template: `
  <main>
  <nav class="navbar navbar-expand-lg navbar-light bg-light pe-4 ps-4">
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
    <main class="content">
      <app-home></app-home>
</main>
    <footer class="fixed-bottom text-center p-4 bg-light">Footer</footer>
  </main>
`,
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'budget-app';
}
