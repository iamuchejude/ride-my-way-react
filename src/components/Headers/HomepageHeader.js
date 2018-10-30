import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/general-responsive.css';
import '../../assets/css/index-style.css';
import '../../assets/css/index-responsive.css';

const HomepageHeader = () => {
  return (
    <header className="clear">
      <div id="logo" className="left">
        <Link to="/">
          <h2><span><i className="lnr lnr-car"></i></span></h2>
        </Link>
      </div>
      <div className="nav right">
        <div className="menu" id="menu">
          <ul>
            <li><a href="#about" className="scroll-trigger">About</a></li>
            <li><a href="#how-it-works" className="scroll-trigger">How it works</a></li>
            <li><a href="#contact" className="scroll-trigger">Contact</a></li>
          </ul>
        </div>
        <div id="harmburger">
          <a href="javascript:void(0)" className="trigger-menu">
            <span className="icon"><i className="lnr lnr-menu-circle"></i></span>
          </a>
        </div>
        <div id="login-btn">
          <Link to="/auth#login">
            <button className="btn btn-rounded btn-secondary btn-medium">Login</button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default HomepageHeader;
