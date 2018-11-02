import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/common/Header';
import PageContent from '../components/common/PageContent';
import PageHeader from '../components/common/PageHeader';
import VisitorLog from '../components/VisitorLog';
import Modal from '../components/common/Modal';
import VisitorLogForm from '../components/VisitorLogForm';
import VisitorDetails from '../components/VisitorDetails';
import FloatingButton from '../components/common/FloatingButton';

class Dashboard extends Component {
  static propTypes = {
    toggleModal: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
  }

  onFABClick = () => {
    this.setState({ showForm: true });
    this.props.toggleModal();
  };

  onVisitorLogItemClick = () => {
    this.setState({ showForm: false });
    this.props.toggleModal();
  }

  renderFAB = () => {
    if (this.state.showModal) {
      return '';
    }
    return <FloatingButton onClick={this.onFABClick} />;
  }

  renderModalContent = () => {
    if (this.state.showForm) {
      return <VisitorLogForm closeModal={this.hideModal} />;
    }
    return <VisitorDetails closeModal={this.hideModal} />;
  };

  render() {
    return (
      <Fragment>
        <Header />
        <PageContent>
          <PageHeader title="Visitor Logs." />
          <VisitorLog onItemClick={this.onVisitorLogItemClick} />
        </PageContent>
        <Modal>
          {this.renderModalContent()}
        </Modal>
        {this.renderFAB()}
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleModal: () => {
    dispatch({ type: 'TOGGLE_MODAL' });
  },
});

export default connect(null, mapDispatchToProps)(Dashboard);
