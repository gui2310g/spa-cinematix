import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movie } from '../../../core/models/Movie';
import { environment } from '../../../../environments/environment.development';
import { MovieService } from '../../../core/services/movie.service';
@Component({
  selector: 'app-movieslist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movieslist.component.html',
  styleUrl: './movieslist.component.scss',
})
export class MovieslistComponent implements OnInit {
  @Input() title: string = '';
  movies: Movie[] = [];
  imgUrl = environment.img;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    if (this.title == 'Popular') this.LoadPopularMovies();
    if (this.title == 'Now Playing') this.LoadNowPlayingMovies();
    if (this.title == 'Upcoming') this.LoadUpcomingMovies();
    if (this.title == 'Top Rated') this.LoadTopRatedMovies();
  }

  LoadPopularMovies(): void {
    this.movieService.getPopularMovies().subscribe({
      next: (results) => (this.movies = results),
      error: (error) => console.error('Error by finding movies', error),
    });
  }

  LoadNowPlayingMovies(): void {
    this.movieService.getNowPlayingMovies().subscribe({
      next: (results) => (this.movies = results),
      error: (error) => console.error('Error by finding movies', error),
    });
  }

  LoadUpcomingMovies(): void {
    this.movieService.getUpcomingMovies().subscribe({
      next: (results) => (this.movies = results),
      error: (error) => console.error('Error by finding movies', error),
    });
  }

  LoadTopRatedMovies(): void {
    this.movieService.getTopRatedMovies().subscribe({
      next: (results) => (this.movies = results),
      error: (error) => console.error('Error by finding movies', error),
    });
  }
}
