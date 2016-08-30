import React, { PropTypes } from 'react';
import InvestmentActions from '../../actions/investment_actions';

const InvestmentForm = React.createClass({
  getInitialState(){
    return {
      offering_id: this.props.offeringId,
      account_id: this.props.accountId,
      amount: ""
    };
  },
  handleSubmit(e){
    if(e){
      e.preventDefault();
    }
    const formData = this.state;
    formData["amount"] = parseInt(this.state.amount);
    InvestmentActions.createInvestment(formData);
  },
  componentWillReceiveProps(props){
    this.setState({
      offering_id: props.offeringId,
      account_id: props.accountId,
    });
  },
  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },
  render () {
    return (
      <div className="investment-form">
        <h5>Invest in this Property:</h5>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.amount} onChange={this.update("amount")}></input>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
});

export default InvestmentForm;
