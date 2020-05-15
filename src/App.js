import React from 'react';
import LandingPage from './components/authentication/LandingPage'
import AppLayout from './components/authentication/AppLayout'
import ProtectdRoute from './components/authentication/ProtectedRoute'



import { GlobalProvider } from './context/GlobalState';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <GlobalProvider>
      <>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <ProtectdRoute exact path="/app" component={AppLayout} />
          <Route path="*" component={() => "404 PAGE NOT FOUND"} />
        </Switch>
      </>
    </GlobalProvider>
  );
};

export default App;
