import React, { PropTypes } from 'react';
import OfferingActions from '../../actions/offering_actions';
import SessionStore from '../../stores/session_store';

const OfferingForm = React.createClass({
  getInitialState(){
    return {
      name: "",
      account_id: SessionStore.currentAccount().id,
      investment_type: "",
      property_type: "",
      min_investment: 0,
      target_return: 0,
      description: ""
    };
  },
  handleSubmit(e){
    if(e){
      e.preventDefault();
    }
    const formData = this.state;
    OfferingActions.createOffering(formData);

  },
  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },
  render () {
    return (
      <div id='new-offering'>
        <form id='offering-form' onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.update("name")}>
            </input>
          </label>
          <br/>
          <label>
            Investment Type:
            <input type="text" value={this.state.investment_type} onChange={this.update("investment_type")}>
            </input>
          </label>
          <br/>
          <label>
            Property Type:
            <input type="text" value={this.state.property_type} onChange={this.update("property_type")}>
            </input>
          </label>
          <br/>
          <label>
            Description:
            <br/>
            <textarea value={this.state.description} onChange={this.update("description")}></textarea>
          </label>
          <input type='submit' value="Submit"></input>
        </form>
      </div>
    );
  }
});

export default OfferingForm;
