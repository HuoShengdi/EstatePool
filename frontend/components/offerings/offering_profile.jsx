import React from 'react';
import OfferingStore from '../../stores/offering_store';
import OfferingActions from '../../actions/offering_actions';

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
  render () {
    return (
      <div>
        <h1>{this.state.offering.name}</h1>
        <h4>Investment Type: {this.state.offering.investment_type}</h4>
        <h4>Property Type: {this.state.offering.property_type}</h4>
        <h4>Description:</h4>
        <p>{this.state.offering.description}</p>
      </div>
    );
  }
});

export default OfferingProfile;
