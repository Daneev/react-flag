import React, { Component } from 'react';
import { Service, country1} from '../../service-api/service-api';
import { Search } from '../search/search'
import { ItemList } from '../item-list/item-list'
import { Spinner } from '../spinner/spinner';
import './App.css';

class App extends Component {
  serv = new Service();

  state = {
    itemList: []
  }

  componentDidMount () {
    this.serv.country()
    .then((itemList) => {
      this.setState({itemList})
    });
  }

  render (){
    const {itemList} = this.state;
    console.log("TCL: App -> render -> itemList", itemList)
      if (!itemList) {
        return <Spinner />;
      }
  return (
    <div className="App">
      <div className="container">
        <h5 className="text-center">Flag Search</h5>
        <Search />
        <ItemList country={itemList}/>
      </div>
    </div>
  )}
}

export default App;



