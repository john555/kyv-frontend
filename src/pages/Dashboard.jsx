import React, { Component, Fragment } from 'react';
import Header from '../components/common/Header';
import PageContent from '../components/common/PageContent';
import PageHeader from '../components/common/PageHeader';
import VisitorLog from '../components/VisitorLog';
import visitorLogs from '../fixture';
import Modal from '../components/common/Modal';
import VisitorLogForm from '../components/VisitorLogForm';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visitorLogs,
      showModal: false,
    };
  }

  showModal = () => {
    document.body.classList.add('no-scroll');
    this.setState({ showModal: true });
  }

  hideModal = () => {
    document.body.classList.remove('no-scroll');
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <PageContent>
          <PageHeader title="Visitor Logs." />
          <VisitorLog logs={this.state.visitorLogs} onItemClick={this.showModal} />
        </PageContent>
        <Modal
          active={this.state.showModal}
          closeModal={this.hideModal}
        >
          <VisitorLogForm closeModal={this.hideModal} />
        </Modal>
      </Fragment>
    );
  }
}

export default Dashboard;
