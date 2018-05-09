import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Layout';
import ProfileDisplay from './ProfileDisplay';

const Header = () => (
  <header className="mainHeader">
    <Container>
      <Link to="/" className="mainHeader__logoWrapper">Kyv</Link>
      <div>
        <ProfileDisplay />
      </div>
    </Container>
  </header>
);

export default Header;
