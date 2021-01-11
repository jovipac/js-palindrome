import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

describe('Test Suite', () => {
  it('Se Renderiza la aplicación', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
