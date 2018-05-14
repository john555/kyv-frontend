import React, { Component } from 'react';

class SignaturePad extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="signaturePad">
        <div><input type="checkbox" /> I have read and understood the safter</div>
        <canvas className="signaturePad__canvas" />
      </div>
    );
  }
}

export default SignaturePad;
