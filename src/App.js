import React, { useState, Suspense, lazy } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store';
import flatten from 'flat';

import ProtectedRoutes from 'components/routes/ProtectedRoutes';
import AppLocale from 'languageProvider';
import 'App.scss';
const ForgotPasswordPage = lazy(() => import('components/pages/ForgotPasswordPage'));
const SignInPage = lazy(() => import('components/pages/SignInPage'));
const SignUpPage = lazy(() => import('components/pages/SignUpPage'));
const Home = lazy(() => import('components/Home'));

const App = () => {
  const [currentLocale, setCurrentLocale] = useState(navigator.language);
  const currentAppLocale = currentLocale in AppLocale ? AppLocale[currentLocale] : AppLocale.en;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <IntlProvider locale={currentLocale} messages={flatten(currentAppLocale.messages)}>
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>
          </BrowserRouter>
        </IntlProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
