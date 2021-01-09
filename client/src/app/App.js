import React, { Component } from 'react';
import RouterOutlet from '../router/RouterOutlet'
import AppNavbar from './components/AppNavbar'
import AppFooter from './components/AppFooter'

class App extends Component {
  render() {
    return (
      <div id="App">
        <AppNavbar/>
        <RouterOutlet/>
        <AppFooter/>
      </div>
    );
  }
}

export default App;
