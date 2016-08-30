import React from 'react';

const InvestmentItem = React.createClass({
  render () {
    const inv = this.props.investment;
    return (
      <div>
        <div>
          Offering: {inv.offering_name}
        </div>
        <div>
          Amount Committed: ${inv.amount}
        </div>
        <div>
          Investment Status: {inv.status}
        </div>
      </div>
    );
  }
});

export default InvestmentItem;
