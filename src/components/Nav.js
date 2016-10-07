import React from 'react';
import {Link} from 'react-router';

import {getSVG} from '../config/utilities';

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="nav-wrapper">
        <nav className="main-nav">
          <Link to="/buy-hapi">Buy</Link>
          <Link to="/">Sell</Link>
          <Link to="/">About</Link>
        </nav>
        <div className="social-icons-backdrop">
          <img src="../assets/Rectangle13.svg" />
          {getSVG('../assets/icons.svg#twitter')}
          {getSVG('../assets/icons.svg#facebook')}
          {getSVG('../assets/icons.svg#linkedin')}
          {getSVG('../assets/icons.svg#instagram')}
        </div>

      </div>
    );
  }
}
