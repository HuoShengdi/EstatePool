import React from 'react';
import ReactDOM from 'react-dom';
const ReactRouter = require('react-router');
  const hashHistory = ReactRouter.hashHistory;
import SessionActions from '../actions/session_actions';
import SessionStore from '../stores/session_store';

const NavBar = React.createClass({
  handleLogout(){
    SessionActions.logOut();
  },
  redirect(path){
    return function() {
      hashHistory.push(path);
      return false;
    };
  },
  render () {
    const logoutButton = (
      <a
        onClick={this.handleLogout}
        key='logout'
        className="navbar-button"
        id='logout'>
        Log Out
      </a>);
    const signUpButton = (
      <a
        onClick={this.redirect("/signup")}
        key='signup'
        className="navbar-button"
        id='signup'>
        Sign Up
      </a>);
    const loginButton = (
      <a
        onClick={this.redirect("/login")}
        key='login'
        className="navbar-button"
        id='login'>
        Log In
      </a>);
    const logo = (
      <h1 id='logo' className="navbar-logo">
        <span onClick={this.redirect("/")}>
          EstatePool
        </span>
      </h1>);
    const offeringsButton = (
      <a
        onClick={this.redirect('/offerings')}
        key='offerings'
        className="navbar-button"
        id='offerings'>
        Offerings
      </a>
    );
    const portfolioButton = (
      <a
        onClick={this.redirect('/portfolio')}
        key='portfolio'
        className='navbar-button'
        id='portfolio'>
        Portfolio
      </a>
    );

    return <div className='navbar'>
      {logo}
      {SessionStore.isAccountLoggedIn() ? [logoutButton, portfolioButton, offeringsButton] : [signUpButton, loginButton]}
    </div>;
  }
});

export default NavBar;
