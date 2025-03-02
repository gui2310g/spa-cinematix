import { Component, OnInit } from '@angular/core';
import { Movie } from '../../core/models/Movie';
import { MovieService } from '../../core/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { MovieGenres, MovieProductionCompanies } from '../../core/models/MovieDetails';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie!: Movie;
  moviesGenres: MovieGenres[] = [];
  moviesProductionCompanies: MovieProductionCompanies[] = [];

  imgUrl = environment.img;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if(id) this.LoadMovie(id);
  }

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  LoadMovie(id: number) {
    this.movieService.getMovie(id).subscribe((data) => {
      this.movie = data;
      this.moviesGenres = data.genres;
      this.moviesProductionCompanies = data.production_companies;
    });
  }
}
