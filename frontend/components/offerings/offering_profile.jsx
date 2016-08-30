import React from 'react';
import OfferingStore from '../../stores/offering_store';
import OfferingActions from '../../actions/offering_actions';
import InvestmentForm from './investment_form';
import SessionStore from '../../stores/session_store';

const OfferingProfile = React.createClass({
  getInitialState(){
    return {offering: {}};
  },
  handleChange(){
    this.setState({offering: OfferingStore.offering(this.props.params.offering_name)});
  },
  componentDidMount(){
    this.offeringListener = OfferingStore.addListener(this.handleChange);
    OfferingActions.fetchOffering(this.props.params.offering_name);
  },
  componentWillUnmount(){
    this.offeringListener.remove();
  },
  accountIsInvested(){
    if (this.state.offering.investor_ids){
      return this.state.offering.investor_ids.includes(SessionStore.currentAccount().id);
    }
    else {
      return false;
    }
  },
  render () {
    let investForm = (
      <InvestmentForm
        offeringId={this.state.offering.id}
        accountId={SessionStore.currentAccount().id}/>
    );
    return (
      <div>
        <h1>{this.state.offering.name}</h1>
        <h4>Investment Type: {this.state.offering.investment_type}</h4>
        <h4>Property Type: {this.state.offering.property_type}</h4>
        <h4>Description:</h4>
        <p>{this.state.offering.description}</p>
        <h5>Total Investments: ${this.state.offering.investment_total}</h5>
        {this.accountIsInvested() ? "" : investForm}
      </div>
    );
  }
});

export default OfferingProfile;
