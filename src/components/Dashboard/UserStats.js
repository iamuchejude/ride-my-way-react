import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import fetchUserStats from '../../actions/users';

class UserStats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUserStats);
  }

  render() {
    return (
      <Fragment>
        <div className="stat-info column one-third">
          <div className="count">
            <span>34</span>
          </div>
          <div className="stat">
            <h3>All Rides</h3>
          </div>
          <div className="stats-icon">
            <span><i className="lnr lnr-car"></i></span>
          </div>
        </div>
        <div className="stat-info column one-third">
          <div className="count">
            <span>19</span>
          </div>
          <div className="stat">
            <h3>Rides Offered</h3>
          </div>
          <div className="stats-icon">
            <span><i className="lnr lnr-exit-up"></i></span>
          </div>
        </div>
        <div className="stat-info column one-third">
          <div className="count">
            <span>15</span>
          </div>
          <div className="stat">
            <h3>Rides Taken</h3>
          </div>
          <div className="stats-icon">
            <span><i className="lnr lnr-enter-down"></i></span>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    user,
  }
}

export default connect(mapStateToProps)(UserStats);
