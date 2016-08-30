import React from 'react';
const hashHistory = require('react-router').hashHistory;

const OfferingListItem = React.createClass({
  goToOffering(e){
    hashHistory.push('/offerings/' + this.props.offering.name);
  },
  render () {
    return (
      <div className='offering-item' onClick={this.goToOffering}>
        <h2>{this.props.offering.name}</h2>
        <h4>Investment Type: {this.props.offering.investment_type}</h4>
        <h4>Property Type: {this.props.offering.property_type}</h4>
      </div>
    );
  }
});

export default OfferingListItem;
