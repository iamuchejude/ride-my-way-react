import React, { Component, Fragment } from 'react';
import '../assets/css/generalResponsive.css';
import '../assets/css/indexStyle.css';
import '../assets/css/indexResponsive.css';
import HomepageHeader from '../components/Headers/HomepageHeader';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <HomepageHeader />

        <div id="wrapper" className="land">
          <section id="hero">
            <div className="hero-contents">
              <h1>Get ride offers</h1>
              <p>Get comfortable ride offers to your destination</p>
            </div>
            <div className="hero-contents">
              <h1>Offer rides</h1>
              <p>Offer to ride with someone</p>
              <div className="actions">
                <a href="#about" className="scroll-trigger btn btn-primary btn-rounded" data-section="#about">About</a>
                <a href="/auth#register" className="btn btn-primary btn-rounded">Join Now</a>
              </div>
            </div>
          </section>

          <section id="about" className="section">
            <div className="section-header">
              <h1>About Us</h1>
            </div>
            <div className="section-contents clear columns">
              <div className="column three-fourth">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  Lorem Ipsum is dsimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
              </div>
            </div>
          </section>

          <section id="how-it-works" className="section">
            <div className="section-header">
              <h1><span>How it works</span></h1>
            </div>
            <div className="section-contents clear columns">
              <div className="column one-third">
                <h1><i className="lnr lnr-sync"></i></h1>
                <h3>Request/Offer ride offer</h3>
                <p>
                  Offer to give a ride or make request for an available ride offers.
                  </p>
              </div>
              <div className="column one-third">
                <h1><i className="lnr lnr-checkmark-circle"></i></h1>
                <h3>Accept ride offer</h3>
                <p>
                  Accept ride offer or wait for your response to request for a ride.
                  </p>
              </div>
              <div className="column one-third">
                <h1><i className="lnr lnr-car"></i></h1>
                <h3>Ride on!</h3>
                <p>
                  Contact your driver or your passenger via phone and start riding.
                  </p>
              </div>
            </div>
          </section>

          <section id="contact" className="section">
            <div className="section-header">
              <h1>Contact us</h1>
            </div>
            <div className="section-contents columns">
              <div className="column half">
                <p className="clear">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                <p>
                  You can also reach us via the mediums below:
                    </p>
                <ul className="socials">
                  <li>
                    <a href="mailto: iamuchejude@gmail.com" target="_blank"  rel="noopener noreferrer">
                      <i className="fa fa-envelope"></i> iamuchejude@gmail.com
                            </a>
                  </li>
                  <li>
                    <a href="tel: +2348135642400" target="_blank"  rel="noopener noreferrer">
                      <i className="fa fa-phone"></i> +234 813 564 2400
                            </a>
                  </li>
                  <li>
                    <a href="https://facebook.com/iamuchejude" target="_blank"  rel="noopener noreferrer">
                      <i className="fa fa-facebook-square"></i> iamuchejude
                            </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/iamuchejude" target="_blank"  rel="noopener noreferrer">
                      <i className="fa fa-twitter-square"></i> iamuchejude
                            </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/iamuchejude" target="_blank"  rel="noopener noreferrer">
                      <i className="fa fa-instagram"></i> iamuchejude
                            </a>
                  </li>
                </ul>
              </div>
              <div className="form-container column half">
                <form method="post">
                  <div className="input-holder">
                    <label htmlFor="Name">Name</label>
                    <input type="text" placeholder="Full Name" id="name" />
                  </div>
                  <div className="input-holder">
                    <label htmlFor="Email">Email</label>
                    <input type="email" placeholder="Email Address" id="email" />
                  </div>
                  <div className="input-holder">
                    <label htmlFor="Subject">Subject</label>
                    <input type="text" placeholder="Subject of Message" id="subject" />
                    </div>
                    <div className="input-holder">
                      <label htmlFor="Message">Message</label>
                      <textarea placeholder="Message" id="message" />
                  </div>
                  <button type="submit" className="btn btn-secondary btn-large">Send Message</button>
                </form>
              </div>
            </div>
          </section>
        </div>

      </Fragment>
    )
  }
}

export default Home;
