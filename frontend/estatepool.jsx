import React from 'react';
import ReactDOM from 'react-dom';
const ReactRouter = require('react-router');
  const Router = ReactRouter.Router;
  const Route = ReactRouter.Route;
  const IndexRoute = ReactRouter.IndexRoute;
  const hashHistory = ReactRouter.hashHistory;
import SessionActions from './actions/session_actions';
import Home from './components/home';
import SignupForm from './components/signup_form';
import LoginForm from './components/login_form';
import OfferingsIndex from './components/offerings/offerings_index';
import OfferingProfile from './components/offerings/offering_profile';
import OfferingForm from './components/offerings/offering_form';
import Portfolio from './components/portfolio/portfolio';
import InvestmentProfile from './components/portfolio/investment_profile';
import NavBar from './components/nav_bar';


const EstatePool = React.createClass({

  render () {
    return (
      <div className="app">
        <NavBar />
        <div className="app-main">
          {this.props.children}
        </div>
      </div>
    );
  }
});

const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={EstatePool}>
      <IndexRoute component={Home}/>
      <Route path="/signup" component={SignupForm}></Route>
      <Route path="/login" component={LoginForm}></Route>
      <Route path="/offerings" component={OfferingsIndex}></Route>
      <Route path="/offerings/:offering_name" component={OfferingProfile}></Route>
      <Route path="/new-offering" component={OfferingForm}></Route>
      <Route path="/portfolio" component={Portfolio}></Route>
      <Route path="/portfolio/investment/:offering_name" component={InvestmentProfile}></Route>
    </Route>
  </Router>
);



document.addEventListener('DOMContentLoaded', ()=>{
  if (window.currentAccount){
    SessionActions.receiveCurrentAccount(window.currentAccount);
  }
  const root = document.getElementById('content');
  ReactDOM.render(appRouter, root);
});
