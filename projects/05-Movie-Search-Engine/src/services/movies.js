const API_KEY = "be7a2e49";

export const searchMovies = async ({ search }) => {
  if (search === "") return null;

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`);
    const json = await response.json();

    const movies = json.Search || [];

    return movies?.map((movie) => ({
      title: movie.Title,
      year: movie.Year,
      id: movie.imdbID,
      poster: movie.Poster,
    }));
  }catch (e) {
    throw new Error("Error fetching movies");
  }
};
