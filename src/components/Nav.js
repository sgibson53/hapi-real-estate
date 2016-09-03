import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div className="nav-wrapper">
        <nav className="main-nav">
          <Link to="/">Buy</Link>
          <Link to="/">Sell</Link>
          <Link to="/">About</Link>
        </nav>
      </div>
    );
  }
}
