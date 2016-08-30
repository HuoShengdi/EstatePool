import React from 'react';
const Link = require('react-router').Link;
import OfferingStore from '../../stores/offering_store';
import OfferingActions from '../../actions/offering_actions';
import OfferingListItem from './offering_list_item';

const OfferingsIndex = React.createClass({
  getInitialState(){
    return {offerings: OfferingStore.offerings()};
  },
  onChange(){
    this.setState({offerings: OfferingStore.offerings()});
  },
  componentDidMount(){
    this.offeringListener = OfferingStore.addListener(this.onChange);
    OfferingActions.fetchOfferings();
  },
  componentWillUnmount(){
    this.offeringListener.remove();
  },
  render(){
    let newOfferingLink = <Link to='/new-offering'>Add New Offering</Link>;
    const OfferingItems = this.state.offerings.map((offering)=>{
      return <OfferingListItem offering={offering} key={offering.id} />;
    });
    return (
      <div>
        <h1>Offerings</h1>
        {newOfferingLink}
        <div className='offering-list'>
          {OfferingItems}
        </div>

      </div>
    );
  }
});

export default OfferingsIndex;
