import { BrowserRouter, Route } from 'react-router-dom';
import React, { Fragment } from 'react';
// Components
import Footer from './components/Footer';
import Home from './containers/Home';

const AppRoutes = () => (
  <BrowserRouter>
    <Fragment>
      <Route path='/' component={ Home } />
      <Footer />
    </Fragment>
  </BrowserRouter>
)

export default AppRoutes;
