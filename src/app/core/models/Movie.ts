import { MovieGenres, MovieProductionCompanies } from "./MovieDetails";

export interface Movie {
    id: number
    title: string;
    backdrop_path: string;
    overview: number;
    homepage: string;
    original_language: string;
    popularity: string;
    poster_path: string;
    tagline: string;
    release_date: string;
    production_companies: MovieProductionCompanies[];
    genres: MovieGenres[];
}
