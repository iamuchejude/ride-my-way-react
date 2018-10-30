import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user } = this.props;
    const { name, email, phone, photo } = user.user;

    return (
      <div className="user-info">
        <a href="#security-settings" className="trigger-settings left"><i className="lnr lnr-lock"></i></a>
        <a href="#profile-settings" className="trigger-settings right"><i className="lnr lnr-cog"></i></a>
        <div className="avatar-container">
          <div>
            <div className="change-photo-container">
              <button className="btn upload-photo" id="uploadPhoto"><i className="lnr lnr-camera"></i></button>
            </div>
            <img src={ photo || `https://ui-avatars.com/api/?name=Uche+Jude&background=000000&color=fff&size=300` } className="avatar" alt="Uche Jude" />
            <form method="post" encType="multipart/form-data" className="hidden">
              <input type="file" alt="Upload Image" id="photo" name="photo" />
            </form>
          </div>
        </div>
        <div className="info-container">
          <h3>{ name }</h3>
          <ul>
            <li>{ email || 'No email address' }</li>
            <li>{ phone || 'No phone number'}</li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    user,
  }
}

export default connect(mapStateToProps)(UserProfile);
