import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/movies/popular`);
  }

  getUpcomingMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/movies/upcoming`);
  }

  getTopRatedMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/movies/toprated`);
  }

  getNowPlayingMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/movies/nowplaying`);
  }

  getSearchedMovies(query: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/movies/search?query=${query}`);
  }

}
