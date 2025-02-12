import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { Movie } from '../../core/models/Movie';
import { MovieService } from '../../core/services/movie.service';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  private imgUrl = environment.img;
  movies: Movie[] = [];
  
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.LoadMovies();
  }

  LoadMovies(): void {
    this.movieService.getPopularMovies().subscribe({
      next: (results) => (this.movies = results),
      error: (error) => console.error('Error by finding movies', error),
    })
  }
}
