import React, { Component } from 'react';
import './search.css';

export const Search = (props) => {
  const onChange = (text) => {
    props.textSearch(text)
  }
    return (
      <form>
        <input onChange={(e) => onChange(e.target.value)} className="form-control" type="text" placeholder="Search for a Country" />
      </form>
    )

}