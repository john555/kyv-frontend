import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Layout';
import ProfileDisplay from './ProfileDisplay';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProfileDropdown: false,
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.hideProfileDropdown);
  }

  hideProfileDropdown = () => this.setState({
    showProfileDropdown: false,
  });

  toggleProfileDropdown = (event) => {
    event.stopPropagation();
    this.setState({
      showProfileDropdown: !this.state.showProfileDropdown,
    });
  }

  render() {
    return (
      <header className="mainHeader">
        <Container>
          <Link to="/" className="mainHeader__logoWrapper">Kyv</Link>
          <div>
            <ProfileDisplay
              active={this.state.showProfileDropdown}
              toggleDropdown={this.toggleProfileDropdown}
            />
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
