import React, { Component } from 'react';
import SideBar from './components/sideBar/SideBar'
import Payments from './components/payments/Payments'
import ClientRegister from './components/clients/ClientRegister'


class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar/>
        <Payments />
        <ClientRegister />
      </div>
    );
  }
}

export default App;
