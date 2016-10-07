import React from 'react';
import {Link} from 'react-router';
import Nav from './Nav';
import Footer from './Footer';

import {getSVG} from '../config/utilities';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  contactUsHandler(e) {
    $('#home-contact-us').slideUp(400, function() {
      $('.contact-form-wrapper').slideDown(600);
    });
  }

  picHandler(e) {
    console.log(e.target);
  }

  render() {
    var self = this;


    return (
      <div className="site-wrapper">


        <div className="buy-background-1">
          <Nav />
          <div className="main-banner">
            <div className="main-logo">
              <Link to="/home">{getSVG("../assets/icons.svg#logo-1")}</Link>
            </div>
            <h1 className="headline">The New Full Service at a Charming Flat Fee</h1>
          </div>
          <div className="buy-banner">
            <div className="message-wrapper">
              <p id="bb-message">We believe in being committed, transparent, and honest throughout the buying and selling processes. Hapi leverages technology, networking, and experience to sell your home quickly and conveniently. </p>
            </div>
            <h2><span>Sell</span><span>Hapi</span></h2>
          </div>
          <div className="dont-settle">
            <p id="ds-title">Don't Settle</p>
            <p className="ds-message">Every house needs the same quality effort and care to be sold, so why do Real Estate companies charge 3% commission on everything? Because they know they can.</p>
            <p className="ds-message">We’re better than that, and your experience means a lot more to us. Our full ‘Sell Hapi’ service provides everything you need from start to finish at one low fee - $3,500. No games. Just a great selling experience.</p>
          </div>
        </div>

        <div className="support-team">
          <div className="pics">
            <div id="cool1" className="pic" onClick={self.picHandler.bind(self)}>
            </div>
            <div id="cool2" className="pic" onClick={self.picHandler.bind(self)}>
            </div>
            <div id="cool3" className="pic" onClick={self.picHandler.bind(self)}>
            </div>
            <div className="comment-box1">
              {getSVG("../assets/icons.svg#talk-box")}
            </div>
          </div>


        </div>

        <Footer />

      </div>
    );
  }
}
