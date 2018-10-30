import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import registerUser from '../../actions/register';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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
    dispatch(registerUser({ ...this.state }));
  }

  render() {
    const { name, email, password } = this.state;
    const { register } = this.props;
    const { loading, status, message } = register;

    return (
      <Fragment>
        <p className="info">
          Register
        </p>
        <form method="POST" id="register_form" onSubmit={ this.onSubmit }>
          { loading ? <div className="loader">
            <span className="spin">
              <i className="fa fa-spinner fa-3x fa-spin"></i>
            </span>
          </div> : '' }
          { status !== null ? <div className={ `message ${status}` }>{ message }</div> : '' }
          <div className="input-holder">
            <label htmlFor="Name">Name</label>
            <input type="text" name="name" onChange={ this.onChange } id="register_name" placeholder="John Doe" value={ name || '' } required />
          </div>
          <div className="input-holder">
            <label htmlFor="Email">Email</label>
            <input type="email" name="email" onChange={ this.onChange }  id="register_email" placeholder="username@host.com" value={ email || '' } required />
          </div>
          <div className="input-holder">
            <label htmlFor="Password" className="left">Password</label>
            <input type="password" onChange={ this.onChange }  name="password" id="register_password" placeholder="yourPassword" value={ password || '' } required />
          </div>
          <div className="input-holder">
            <button className="btn btn-primary btn-full" disabled={ loading ? 'disabled' : '' } id="register_btn" type="submit">{ loading ? 'Loading...please wait' : 'Register' }</button>
          </div>
        </form>
        <p>
          Are you a returning user to the platform? <a href="#login">Login now</a>
        </p>
      </Fragment>
    )
  }
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
  register: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  const { register } = state;
  return {
    register,
  }
}

export default connect(mapStateToProps)(Register);
