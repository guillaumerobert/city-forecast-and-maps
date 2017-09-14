import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../App.css';

class Header extends Component {
  render() {
    return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Welcome to React</h3>
        </div>
    );
  }
}

export default Header;
