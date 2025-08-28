import { useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'
import './Filters.css'

export function Filters() {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: event.target.value,
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: event.target.value,
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="2500"
          step="10"
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="fragrances">Fragrances</option>
          <option value="beauty">Beauty</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
    </section>
  )
}
