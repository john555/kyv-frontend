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
import { loadVisitorLog } from '../actions/visitorLogActions';

class Dashboard extends Component {
  static propTypes = {
    loadVisitorLog: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showForm: false,
    };
    this.props.loadVisitorLog();
  }

  componentDidMount() {
    console.log('+++++');
  }

  onFABClick = () => {
    this.setState({ showForm: true });
    this.showModal();
  };

  onVisitorLogItemClick = () => {
    this.setState({ showForm: false });
    this.showModal();
  }

  showModal = () => {
    document.body.classList.add('no-scroll');
    this.setState({ showModal: true });
  }

  hideModal = () => {
    document.body.classList.remove('no-scroll');
    this.setState({ showModal: false });
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
        <Modal
          active={this.state.showModal}
          closeModal={this.hideModal}
        >
          {this.renderModalContent()}
        </Modal>
        {this.renderFAB()}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'Dashboard');
  return ({
    userInfo: state.userInfo,
  });
};

const mapDispatchToProps = dispatch => ({
  loadVisitorLog: () => dispatch(loadVisitorLog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
