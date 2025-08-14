import { useState } from 'react';
import './Filters.css'

export function Filters({ changeFilters }) {
  const [minPrice, setMinPrice] = useState(0);
  const [category, setCategory] = useState('all');

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    changeFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    changeFilters((prevFilters) => ({
      ...prevFilters,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="range"
          id="price"
          min="0"
          max="2500"
          step="10"
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select id="category" onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="fragrances">Fragrances</option>
          <option value="beauty">Beauty</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
    </section>
  );
}
