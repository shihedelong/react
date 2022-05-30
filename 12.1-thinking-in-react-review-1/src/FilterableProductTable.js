import React, { Component } from 'react'
import SearchBar from './components/SearchBar'
import ProductTable from './components/ProductTable'

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      inStockOnly: false,
    }
  }

  render() {
    return (
      <>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </>
    )
  }
}

export default FilterableProductTable
