import { Component, OnInit } from '@angular/core';
import { Movie } from '../../core/models/Movie';
import { MovieService } from '../../core/services/movie.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{
  query: string = '';
  imgUrl = environment.img;
  movies: Movie[] = [];

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.query = params['query'];
      this.LoadSearchedMovies();
    });
  }

  LoadSearchedMovies(): void {
    this.movieService.getSearchedMovies(this.query).subscribe((results) => {
      this.movies = results;
    });
  }
}
