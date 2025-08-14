import { products as initialProducts } from './mocks/products.json'
import { Products } from "./Componets/Products.jsx"
import { useState } from 'react'
import { Header } from './Componets/Header.jsx';

function App () {
  const [products, setProducts] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 2000,
  });

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && 
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  };

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App
