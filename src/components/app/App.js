import React, { Component } from 'react';
import { Service } from '../../service-api/service-api';
import { Search } from '../search/search'
import { ItemList } from '../item-list/item-list'
import { Spinner } from '../spinner/spinner';
import './App.css';

class App extends Component {
  serv = new Service();

  state = {
    itemList: [],
    textSearch: '',
    loading: true
  }

  componentDidMount () {
    this.serv.country()
    .then((itemList) => {
      this.setState({itemList})
    });
    this.setState({loading: false});
  }
  textSearch = (items, text) => {
    console.log(text)
    if (text.length === 0) return items
    //search text in state
    return items.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
  }
  textSearchFilter = (textSearch) => {
    this.setState({ textSearch })
  }
  render (){
    const { itemList, textSearch, loading} = this.state;
    if (loading) {
        return <Spinner />;
      }
    const visibleItems = this.textSearch(itemList, textSearch)
  return (
    <div className="App">
      <div className="container">
        <h5 className="text-center">Flag Search</h5>
        <Search textSearch={this.textSearchFilter}/>
        <ItemList visibleList={visibleItems}/>
      </div>
    </div>
  )}
}

export default App;



