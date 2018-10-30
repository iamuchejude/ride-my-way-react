import { BrowserRouter, Route } from 'react-router-dom';
import React, { Fragment } from 'react';
// Components
import Footer from './components/Footer/Footer';
import Home from './containers/Homepage';
import Auth from './containers/Auth';

const AppRoutes = () => (
  <BrowserRouter>
    <Fragment>
      <Route exact path='/' component={ Home } />
      <Route exact path='/auth' component={ Auth } />
      <Footer />
    </Fragment>
  </BrowserRouter>
)

export default AppRoutes;
