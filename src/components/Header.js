import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../App.css';

class Header extends Component {
  render() {
    return (
        <div className="App App-header">
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand">
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
                <h3 className="App-intro">My City Forecast and Nav</h3>
            </nav>
        </div>
    );
  }
}

export default Header;



