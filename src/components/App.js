import React from 'react';

export default class App extends React.Component {
  render() {
    console.log("Rendering App Component");
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
