import React from 'react';
import {Link} from 'react-router';
import Nav from './Nav';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  getSVG(useTag) {
    return <svg dangerouslySetInnerHTML={{__html: useTag}} />;
  }

  render() {
    var self = this;

    return (
      <div className="site-wrapper">
        <Nav />
        <div className="main-banner">
          <div className="main-logo">
            {self.getSVG('<use xlink:href="../assets/icons.svg#logo-1" />')}
          </div>
          <h1 className="headline">The New Full Service at a Charming Flat Fee</h1>
          <div className="main-chat-button">Chat with Hapi</div>
        </div>
      </div>
    );
  }
}
