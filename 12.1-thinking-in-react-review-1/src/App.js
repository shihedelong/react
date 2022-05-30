import './App.css'
import PRODUCTS from './db.js'
import FilterableProductTable from './FilterableProductTable'

function App() {
  return <FilterableProductTable products={PRODUCTS} />
}

export default App
