import { BrowserRouter, Route } from 'react-router-dom';
import React, { Fragment } from 'react';
// Components
import Footer from './components/Footer/Footer';
import Home from './containers/Homepage';
import Auth from './containers/Auth';
import Dashboard from './containers/Dashboard';

const AppRoutes = () => (
  <BrowserRouter>
    <Fragment>
      <Route exact path='/' component={ Home } />
      <Route exact path='/auth' component={ Auth } />
      <Route exact path='/dashboard' component={ Dashboard } />
      <Footer />
    </Fragment>
  </BrowserRouter>
)

export default AppRoutes;
