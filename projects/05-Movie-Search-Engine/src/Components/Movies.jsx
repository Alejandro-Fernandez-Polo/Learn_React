function ListOfMovies({ movies }) {
  return (
  <ul className="movies">
    {movies.map((movie) => (
      <li key={movie.id} className="movie">
        <img
          src={movie.poster}
          alt={`${movie.title} poster`}
          className="movie-poster"
        />
        <h2>{movie.title}</h2>
        <p>{movie.year}</p>
      </li>
    ))}
  </ul>
  )
}
 
function NoMoviesResults() {
  return (
    <p>No se encontraron películas en esta búsqueda.</p>
  )
}

export function Movies({ movies }) {
  const hasMovies = movies && movies.length > 0
  return (
    hasMovies 
    ? <ListOfMovies movies={movies} /> 
    : <NoMoviesResults />
  )
}