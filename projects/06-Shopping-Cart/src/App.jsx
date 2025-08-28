import { products as initialProducts } from './mocks/products.json'
import { Products } from "./componets/Products.jsx"
import { Header } from './componets/Header.jsx'
import { Footer } from './componets/Footer.jsx'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './componets/Cart.jsx'
import { CartProvider } from './context/cart.jsx'



function App () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App
