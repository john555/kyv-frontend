import React, { Component, Fragment } from 'react';
import Header from '../components/common/Header';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Header />
      </Fragment>
    );
  }
}

export default Dashboard;
