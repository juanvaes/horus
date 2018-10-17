import React, { Component } from 'react';

import Home from './components/home/Home'
import SideBar from './components/sideBar/SideBar'
import Payments from './components/payments/Payments'
import RegisterClient from './components/clients/ClientRegister'
import { BrowserRouter, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <SideBar/>
          <Route  exact path='/' component={Home}/>
          <Route path='/client' component={RegisterClient}/>
          <Route path='/payment' component={Payments}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
