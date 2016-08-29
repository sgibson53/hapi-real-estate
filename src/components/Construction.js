import React from 'react';

export default class Construction extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="construction-wrapper">
        <div className="construction-banner">
          <span>Site currently under construction.<br /> Stay Hapi</span>
        </div>
      </div>
    );
  }
}
