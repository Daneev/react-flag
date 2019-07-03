import React, { Component } from 'react';
import './search.css'

export class Search extends Component {
  render() {
    return (
      <form>
        <input className="form-control" type="text" placeholder="Search for a Country" />
      </form>
    )
  }
}