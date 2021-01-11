import React, { Component } from 'react'
import RouterOutlet from '../router/RouterOutlet'
import AppNavbar from '@/AppNavbar'
import AppFooter from '@/AppFooter'
import { Provider } from 'react-redux'
import store from '../store'

class App extends Component {
  render () {
    return (
      <div id='App'>
        <Provider store={store}>
          <AppNavbar />
          <RouterOutlet />
        </Provider>
      </div>
    )
  }
}

export default App
