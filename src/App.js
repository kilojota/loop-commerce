import React, { Fragment, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'
import SignInPage from './components/pages/SignInPage'
import SignUpPage from './components/pages/SignUpPage'
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import Home from './components/Home'
import './App.scss'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <ProtectedRoutes path='/' exact>
            <Home />
          </ProtectedRoutes>
          <Route path='/sign-in'>
            <SignInPage />
          </Route>
          <Route path='/sign-up'>
            <SignUpPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
