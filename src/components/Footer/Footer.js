import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="clear">
    <p className="copyright">
      &copy; <span id="date"></span> <Link to="/">Ride-my-way</Link>. Made with <i className="lnr lnr-heart"></i> by <a href="https://twitter.com/iamuchejude" target="_blank" rel="noopener noreferrer">Uche Jude</a>
    </p>
  </footer>
);

export default Footer;
