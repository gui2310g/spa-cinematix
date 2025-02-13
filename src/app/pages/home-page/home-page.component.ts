import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieslistComponent } from '../../shared/components/movieslist/movieslist.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MovieslistComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
