import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Error404 from '../app/components/Error404'
import Main from '../app/modules/Home/Home'
const RouterOutlet = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  )
}

export default RouterOutlet
