import React from 'react';
const Link = require('react-router').Link;
import SessionActions from '../actions/session_actions';
import SessionStore from '../stores/session_store';
import ErrorStore from '../stores/error_store';
const hashHistory = require('react-router').hashHistory;

const SignupForm = React.createClass({
  getInitialState() {
    return {
      email: "",
      password: ""
    };
  },
  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },
  componentWillUnmount(){
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn(){
    if (SessionStore.isAccountLoggedIn()){
      hashHistory.push("/");
    }
  },

  handleSubmit(e){
    if (e){
      e.preventDefault();
    }

    const formData = {
      email: this.state.email,
      password: this.state.password
    };

    SessionActions.signUp(formData);
    return false;
  },

  fieldErrors(field) {
    const errors = ErrorStore.formErrors('login');

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i)=>{
      return <li key={i}>{errorMsg}</li>;
    });

    return <ul className='errors'>{messages}</ul>;
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

  render () {
    let loginLink = <Link to="/login">here</Link>;
    return (
      <div className="login-page-container">
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h3>EstatePool Signup</h3>
            Registered users log in {loginLink}

            {this.fieldErrors("base")}
            <div className="login-form">
              <label> Email: {this.fieldErrors("email")}
                <input type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="login-input" />
              </label>
              <br/>
              <label> Password: {this.fieldErrors("password")}
                <input type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="login-input" />
              </label>
              <br/>
              <div id='button-box'>
                <a href="#" id='signup-submit'
                  className='login-form-button'
                  onClick={this.handleSubmit}>Sign Up</a>
              </div>

            </div>
          </form>
        </div>
      </div>
    );
  }
});

export default SignupForm;
