import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/styleTwo.css';
import '../../assets/css/responsive.css';
import '../../assets/css/generalResponsive.css';

class DashboardHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="clear">
        <div id="logo" className="left">
          <Link to="/dashboard">
            <h2>
              <span><i className="lnr lnr-car"></i></span>
            </h2>
          </Link>
        </div>
        <div className="right">
          <div id="menu">
            <a href="javascript:void(0)" className="trigger-menu"><i className="lnr lnr-cross-circle"></i></a>
            <ul className="menu">
              <li className="active"><Link to="/dashboard">Dashboard</Link></li>
              <li><a href="./ride_offers.html">Ride Offers</a></li>
            </ul>
          </div>
          <div id="offer-ride">
            <a href="#offer-a-ride">
              <button className="btn btn-secondary btn-medium btn-rounded"><i className="lnr lnr-plus-circle"></i> Ride</button>
            </a>
          </div>
          <div id="burger">
            <a href="javascript:void(0)" className="trigger-menu">
              <span className="icon"><i className="lnr lnr-menu-circle"></i></span>
            </a>
          </div>
          <div id="logout">
            <a href="/">
              <span className="icon"><i className="lnr lnr-power-switch"></i></span>
            </a>
          </div>
        </div>
      </header>
    )
  }
}

export default connect()(DashboardHeader);
