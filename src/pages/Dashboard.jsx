import React, { Component, Fragment } from 'react';
import Header from '../components/common/Header';
import PageContent from '../components/common/PageContent';
import PageHeader from '../components/common/PageHeader';
import VisitorLog from '../components/VisitorLog';
import visitorLogs from '../fixture';
import Modal from '../components/common/Modal';

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
          <PageHeader title="Visitor Logs." />
          <VisitorLog logs={this.state.visitorLogs} />
        </PageContent>
        <Modal>
          <h1>Visitor Details</h1>
        </Modal>
      </Fragment>
    );
  }
}

export default Dashboard;
