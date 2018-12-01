import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Form from './Components/Form/Form.jsx';
import Header from './Components/Header/Header.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      selectedProduct: null
    }
    this.getInventory = this.getInventory.bind(this)
    this.selectItemToEdit = this.selectItemToEdit.bind(this)
  }

  getInventory() {
    let promise = axios.get('/api/inventory')
    promise.then((res) => {
      this.setState({
        inventory: res.data
      })
    })
  }

  selectItemToEdit(item) {
    this.setState({
      selectedProduct: item,
    })
  }

  componentDidMount() {
    this.getInventory()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={() =>
            <Dashboard cb={this.getInventory} select={this.selectItemToEdit} inventory={this.state.inventory} />}
          />
          <Route path='/add' component={() => <Form cb={this.getInventory} selected={''} />} />
        </Switch>
        <Form cb={this.getInventory} selected={this.state.selectedProduct} />
      </div>
    );
  }
}
// <Dashboard cb={this.getInventory} select={this.selectItemToEdit} inventory={this.state.inventory} />
// <Form cb={this.getInventory} selected={this.state.selectedProduct} />
// <Header />

export default App;
