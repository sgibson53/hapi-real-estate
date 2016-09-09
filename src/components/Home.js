import React from 'react';
import {Link} from 'react-router';
import Nav from './Nav';

import {getSVG} from '../config/utilities';
import deviceready from '../config/deviceready';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.slider').slider();
  }

  render() {
    var self = this;


    return (
      <div className="site-wrapper">


        <div className="home-background-1">
          <Nav />
          <div className="main-banner">
            <div className="main-logo">
              {getSVG("../assets/icons.svg#logo-1")}
            </div>
            <h1 className="headline">The New Full Service at a Charming Flat Fee</h1>
            <div className="main-chat-button">Chat with Hapi</div>
          </div>
        </div>


        <div className="price-slider-wrapper">
          <h3>How much will your savings be?</h3>
          <h4>Home Price</h4>
          <div className="slider">
          </div>
          <table className="cost-table">
            <tr>
              <td colSpan="2">$100,000</td>
              <td colSpan="2">$3,000,000</td>
            </tr>
            <tr>
              <th></th>
              <th>TRADITIONAL COMISSION</th>
              <th className="hapi-fee">HAPI FEE</th>
              <th className="you-save">YOU SAVE</th>
            </tr>
            <tr>
              <td>Seller's Agent</td>
              <td><span className="comission">$3,000</span></td>
              <td className="hapi-fee">$2,500</td>
              <td className="you-save"><span className="saveValue">$500</span></td>
            </tr>
            <tr>
              <td>Buyer's Agent</td>
              <td><span className="comission">$3,000</span></td>
              <td className="hapi-fee">$2,500</td>
              <td className="you-save"><span className="saveValue">$500</span></td>
            </tr>
            <tr>
              <td>Total Comission on <span id='total-com-cost'>$100,000</span> home</td>
              <td><span id="totalComission">$6,000</span></td>
              <td className="hapi-fee">$5,000</td>
              <td className="you-save"><span id="totalSavings">$1,000</span></td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
