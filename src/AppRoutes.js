import { BrowserRouter, Route } from 'react-router-dom';
import React, { Fragment } from 'react';
// Components
import Footer from './components/Footer/Footer';
import Home from './containers/Homepage/Homepage';

const AppRoutes = () => (
  <BrowserRouter>
    <Fragment>
      <Route path='/' component={ Home } />
      <Footer />
    </Fragment>
  </BrowserRouter>
)

export default AppRoutes;
