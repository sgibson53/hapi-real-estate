import React from 'react';
import {Link} from 'react-router';

import {getSVG} from '../config/utilities';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="footer-wrapper">
        <p className="footer-headline">
          <span className="footer-headline-el">We are reliable.</span>
          <span className="footer-headline-el">We are up front.</span>
          <span className="footer-headline-el">We deliver high value.</span>
          <span className="footer-headline-el">We are economically efficient.</span>
          <span className="footer-headline-el">We offer transparent service.</span>
          <span className="footer-headline-el" id="footer-headline-hapi">We are HAPI REAL ESTATE.</span>
        </p>
        <div className="center-info">
          <img src="http://placehold.it/80x80" className="img-responsive" />
          <div>
            <div className="line1">
              <p>info@hapirealestate.com</p>
              <p>777-777-7777</p>
              <p>123 Hapi Lane, Suite 7000, Cleveland, OH 99999</p>
            </div>
            <div className="line2">
              <Link className="footer-links" to="/">CONTACT US</Link>
              <Link className="footer-links" to="/">ABOUT US</Link>
              <Link className="footer-links" to="/">FAQ</Link>
            </div>
          </div>
        </div>
        <p className="copyright">Copyright 2016 Hapi Real Estate, All Rights Reserved.</p>
      </div>
    );
  }
}
