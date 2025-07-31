import withResults from '../mocks/with-results.json';

export function useMovies() {
  const movies = withResults.Search;

  const mappedMovies = movies.map((movie) => ({
    title: movie.Title,
    year: movie.Year,
    id: movie.imdbID,
    poster: movie.Poster,
  }));

  return {
    movies: mappedMovies,
  };
}
