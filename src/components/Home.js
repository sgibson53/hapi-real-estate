import React from 'react';
import {Link} from 'react-router';
import Nav from './Nav';
import ContactForm from './ContactForm';
import Footer from './Footer';

import {getSVG} from '../config/utilities';
import deviceready from '../config/deviceready';

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

  render() {
    var self = this;


    return (
      <div className="site-wrapper">


        <div className="home-background-1">
          <Nav />
          <div className="main-banner">
            <div className="main-logo">
              <Link to="/home">{getSVG("../assets/icons.svg#logo-1")}</Link>
            </div>
            <h1 className="headline">The New Full Service at a Charming Flat Fee</h1>
            <div className="main-chat-button">Chat with Hapi</div>
          </div>
        </div>


        <div className="price-slider-wrapper">
          <h3>How much will your savings be?</h3>
          <h4>Home Price: <span id="slider-value-display"></span></h4>
          <div id="home-price-slider">
          </div>
          <table className="cost-table">
            <tr>
              <td colSpan="2">$100,000</td>
              <td colSpan="2">$3,500,000</td>
            </tr>
            <tr>
              <th></th>
              <th>TRADITIONAL Commission</th>
              <th className="hapi-fee">HAPI FEE</th>
              <th className="you-save">YOU SAVE</th>
            </tr>
            <tr>
              <td>Seller's Agent</td>
              <td><span className="commission">$3,000</span></td>
              <td className="hapi-fee">$2,500</td>
              <td className="you-save"><span className="saveValue">$500</span></td>
            </tr>
            <tr>
              <td>Buyer's Agent</td>
              <td><span className="commission">$3,000</span></td>
              <td className="hapi-fee">$2,500</td>
              <td className="you-save"><span className="saveValue">$500</span></td>
            </tr>
            <tr>
              <td>Total Commission on <span id='total-com-cost'>$100,000</span> home</td>
              <td><span id="totalCommission">$6,000</span></td>
              <td className="hapi-fee">$5,000</td>
              <td className="you-save"><span id="totalSavings">$1,000</span></td>
            </tr>
          </table>
        </div>

        <div className="kitchen-bg-wrapper">
          <div className="home-elevator-banner">
            <p>Hapi Real Estate Services is the <span className="highlight">new full service, flat fee</span> real estate company. For <span className="highlight">$3,500</span>, we represent buyers and sellers in residential real estate transactions with the new full service that <span className="highlight">includes professional cleaning</span> and <span className="highlight">photography</span>. Hapi agents are salaried, full time real estate professionals whose compensations are not aligned with the value of your home. We believe in being <span className="highlight">committed, transparent, and honest</span> throughout the buying and selling processes. Hapi leverages technology, networking, and experience to find or sell your home <span className="highlight">quickly</span> and <span className="highlight">conveniently</span>.</p>
          </div>
          <div className="contact-us-wrapper">
            <button id="home-contact-us" onClick={self.contactUsHandler.bind(self)}>Contact Us Today</button>
            <ContactForm />
          </div>
        </div>

        <div className="big-home-links">
          <Link className="link1 big-blue-hapi" to="/">Buy <span className="big-green-hapi">Hapi</span></Link>
          <Link className="link2 big-blue-hapi" to="/">Sell <span className="big-green-hapi">Hapi</span></Link>
        </div>

        <Footer />

      </div>
    );
  }
}
