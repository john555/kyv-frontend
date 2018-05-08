import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Layout';

const PageContent = props => (
  <main className="pageContent">
    <Container>
      {props.children}
    </Container>
  </main>
);

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContent;
