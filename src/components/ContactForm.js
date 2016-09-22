import React from 'react';
import {Link} from 'react-router';

export default class ContactForm extends React.Component {

  constructor(props) {
    super(props);
  }

  handleFormCancel(e) {
    $('.contact-form-wrapper').slideUp(600, function() {
      $('#home-contact-us').slideDown(400);
    });
  }

  render() {
    var self = this;

    return (
      <div className="contact-form-wrapper">
        <h3>CONTACT</h3>
        <div className="cf-content">
          <div className="col-1">
            <form className="cf-form">
              <input className="cf-text-input" type="text" placeholder="First Name"/>
              <input className="cf-text-input" type="text" placeholder="Last Name"/>
              <input className="cf-text-input" type="text" placeholder="Email"/>
              <input className="cf-text-input" type="text" placeholder="Telephone"/>
              <textarea className="cf-textarea-input" rows="10" cols="100" placeholder="Questions?"/>
            </form>
          </div>
          <div className="col-2">
            <div className="info-1">
              <p>1.800.777.7777</p>
              <p>info@hapirealestate.com</p>
            </div>
            <div className="info-2">
              <p>Hapi Real Estate, Inc.</p>
              <p>123 Hapi St.</p>
              <p>Suite 1000</p>
              <p>Cleveland, OH 88888</p>
            </div>
          </div>
        </div>
        <div className="cf-footer">
          <button id="cf-submit">Submit</button>
          <button onClick={self.handleFormCancel.bind(self)} id="cf-cancel">Cancel</button>
        </div>
      </div>
    );
  }
}
