import React, { Component } from 'react'
import SearchBar from './components/SearchBar'
import ProductTable from './components/ProductTable'

export class FilterableProductTable extends Component {
  render() {
    return (
      <>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </>
    )
  }
}

export default FilterableProductTable
