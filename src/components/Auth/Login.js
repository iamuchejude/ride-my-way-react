import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loginUser from '../../actions/login';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(loginUser({ ...this.state }));
  }

  render() {
    const { email, password } = this.state;
    const { login, auth } = this.props;
    const { loading, status, message } = login;
    const { isAuthenticated } = auth;

    if (isAuthenticated) {
      return <Redirect to="/dashboard" />
    }

    return (
      <Fragment>
        <p className="info">
          Login
        </p>
        <form method="POST" id="login_form" onSubmit={this.onSubmit}>
          {loading ? <div className="loader">
            <span className="spin">
              <i className="fa fa-spinner fa-3x fa-spin"></i>
            </span>
          </div> : ''}
          {status !== null ? <div className={`message ${status}`}>{message}</div> : ''}
          <div className="input-holder">
            <label htmlFor="Email">Email</label>
            <input type="email" name="email" onChange={this.onChange} id="login_email" placeholder="username@host.com" value={email || ''} required />
          </div>
          <div className="input-holder">
            <label htmlFor="Password" className="left">Password</label>
            <input type="password" onChange={this.onChange} name="password" id="login_password" placeholder="yourPassword" value={password || ''} required />
          </div>
          <div className="input-holder">
            <button className="btn btn-primary btn-full" disabled={loading ? 'disabled' : ''} id="login_btn" type="submit">{loading ? 'Loading...please wait' : 'Register'}</button>
          </div>
        </form>
        <p>
          Are you new to this platform? <a href="#register">Register now</a>
        </p>
      </Fragment>
    )
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  const { login, auth } = state;
  return {
    login,
    auth,
  }
}

export default connect(mapStateToProps)(Login);
