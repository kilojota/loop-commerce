import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import flatten from 'flat'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'

import SignInPage from './components/pages/SignInPage'
import SignUpPage from './components/pages/SignUpPage'
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import Home from './components/Home'
import AppLocale from './languageProvider'
import { IntlProvider } from 'react-intl'
import Footer from './components/Footer/Footer'
import './App.scss'
import ForgotPasswordPage from './components/pages/ForgotPasswordPage'

const App = () => {
  const [currentLocale, setCurrentLocale] = useState(navigator.language)
  const currentAppLocale =
    currentLocale in AppLocale ? AppLocale[currentLocale] : AppLocale.en

  const onChangeLocaleSelect = event => {
    const {
      target: { value }
    } = event
    setCurrentLocale(value)
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <IntlProvider
          locale={currentLocale}
          messages={flatten(currentAppLocale.messages)}
        >
          <BrowserRouter>
            <Switch>
              <ProtectedRoutes path='/' exact>
                <Home />
              </ProtectedRoutes>
              <Route path='/sign-in'>
                <SignInPage />
                <Footer
                  onChangeLocaleSelect={onChangeLocaleSelect}
                  currentLocale={currentAppLocale}
                />
              </Route>
              <Route path='/sign-up'>
                <SignUpPage />
                <Footer
                  onChangeLocaleSelect={onChangeLocaleSelect}
                  currentLocale={currentAppLocale}
                />
              </Route>
              <Route path='/forgot-password'>
                <ForgotPasswordPage />
                <Footer
                  onChangeLocaleSelect={onChangeLocaleSelect}
                  currentLocale={currentAppLocale}
                />
              </Route>
            </Switch>
          </BrowserRouter>
        </IntlProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
