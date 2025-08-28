import { createContext, useState } from 'react'

// Crear el contexto de filtros
export const FiltersContext = createContext()

// Proveedor del contexto de filtros
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0
  })
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}>
      {children}
    </FiltersContext.Provider>
  )
}