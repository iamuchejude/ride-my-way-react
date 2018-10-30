import React, { Component, Fragment } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        I am header
        <div>
          I am home
        </div>
      </Fragment>
    )
  }
}

export default Home;
