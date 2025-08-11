import "./App.css";
import { Movies } from "./Components/Movies";
import { useMovies } from "./hooks/useMovies.js";
import { useSearch } from "./hooks/useSearch.js";

function App() {
  const { search, setSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search });

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies();
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="page">
      <header className="header">
        <h1>Buscador de Películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            onChange={handleChange}
            value={search}
            name="query"
            placeholder="Avengers, Star Wars, The Matrix..."
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main className="main">
        {loading ? <p>Cargando...</p> : <Movies movies={movies} />}
      </main>
    </div>
  );
}

export default App;
