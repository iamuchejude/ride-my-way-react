import React from 'react';
import { Link } from 'react-router-dom';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';
import '../assets/css/style.css';

const Auth = () => (
  <div id="wrapper" className="auth">
    <header className="clear">
      <div id="logo">
        <Link to="/">
          <h1>
            <span><i className="lnr lnr-car"></i></span>
          </h1>
        </Link>
      </div>
    </header>
    <div className="container" id="register">
      <Register />
    </div>
    <div className="container" id="login">
      <Login />
    </div>
  </div>
);

export default Auth;
