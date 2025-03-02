import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  search = signal<string>("");

  constructor(private router: Router) {}

  handleSubmit(): void {
    if(this.search()) {
      this.router.navigate(['/search'], {
        queryParams: { query: this.search() }
      })
    }
  }
}
