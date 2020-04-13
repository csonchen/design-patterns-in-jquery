import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { FactoryPage } from './pages/FactoryPage'
import { NavPage } from './pages/NavPage'

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={NavPage}></Route>
      <Route path="/factory" component={FactoryPage}></Route>
    </Switch>
  </BrowserRouter>
)