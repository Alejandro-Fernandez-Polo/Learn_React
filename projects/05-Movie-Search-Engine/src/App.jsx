import './App.css'
import { useEffect, useState } from 'react';
import { Movies } from './Components/Movies';
import { useMovies } from './hooks/useMovies.js';

function useSearch () {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (search === '') {
      setError('No se puede buscar una película vacía');
      return;
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película por ID numérico');
      return;
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres');
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };

}

function App() {
  const { movies } = useMovies();
  const { search, setSearch, error } = useSearch();

  const handleSubmit = (event) => {
    event.preventDefault(); 
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

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

      <main className="main">{<Movies movies={movies} />}</main>
    </div>
  );
}

export default App
