import React, { PropTypes } from 'react';
import InvestmentActions from '../../actions/investment_actions';
import InvestmentStore from '../../stores/investment_store';
import InvestmentItem from './investment_item';

const Portfolio = React.createClass({
  getInitialState(){
    return {investments: InvestmentStore.investments()};
  },
  onChange(){
    console.log("hello world");
    this.setState({investments: InvestmentStore.investments()});
  },
  componentDidMount(){
    this.investmentListener = InvestmentStore.addListener(this.onChange);
    InvestmentActions.fetchInvestments();
  },
  componentWillUnmount(){
    this.investmentListener.remove();
  },
  render () {
    const investItems = this.state.investments.map((investment)=>{
      return <InvestmentItem investment={investment} key={investment.id}/>;
    });
    return (
      <div>
        <h2>Your investments</h2>
        <div>
          {investItems}
        </div>
      </div>
    );
  }
});

export default Portfolio;
