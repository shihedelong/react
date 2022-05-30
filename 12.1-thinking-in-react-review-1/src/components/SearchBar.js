import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
    return (
      <form>
        <input type='text' placeholder='Search...' />
        <p>
          <input type='checkbox' name='' id='' /> Only show products in stock
        </p>
      </form>
    )
  }
}

export default SearchBar
