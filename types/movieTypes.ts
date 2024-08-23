export interface MovieScores {
    imdb: string;
    rottenTomatoes: string;
    metaCritic: string;
}

export interface Movie {
    title: string;
    scores: MovieScores;
}

export interface MoviesState {
    movies: Movie[];
    status: string;
    error: string;
}

export interface RootState {
    movies: MoviesState;
}
