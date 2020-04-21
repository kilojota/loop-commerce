import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from 'store'
import flatten from 'flat'
import ForgotPasswordPage from 'components/pages/ForgotPasswordPage'
import SignInPage from 'components/pages/SignInPage'
import SignUpPage from 'components/pages/SignUpPage'
import ProtectedRoutes from 'components/routes/ProtectedRoutes'
import Home from 'components/Home'
import AppLocale from 'languageProvider'
import './App.scss'

const App = () => {
  const [currentLocale, setCurrentLocale] = useState(navigator.language)
  const currentAppLocale =
    currentLocale in AppLocale ? AppLocale[currentLocale] : AppLocale.en

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
              </Route>
              <Route path='/sign-up'>
                <SignUpPage />
              </Route>
              <Route path='/forgot-password'>
                <ForgotPasswordPage />
              </Route>
            </Switch>
          </BrowserRouter>
        </IntlProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
