import React, { Component, Fragment } from 'react';
import Header from '../components/common/Header';
import PageContent from '../components/common/PageContent';
import PageHeader from '../components/common/PageHeader';
import VisitorLog from '../components/VisitorLog';
import visitorLogs from '../fixture';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visitorLogs,
    };
  }
  render() {
    return (
      <Fragment>
        <Header />
        <PageContent>
          <PageHeader title="Visitor Logs" />
          <VisitorLog logs={this.state.visitorLogs} />
        </PageContent>
      </Fragment>
    );
  }
}

export default Dashboard;
