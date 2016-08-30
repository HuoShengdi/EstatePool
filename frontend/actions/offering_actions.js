import AppDispatcher from "../dispatcher/dispatcher";
import OfferingConstants from "../constants/offering_constants";
import OfferingApiUtil from "../util/offering_api_util";
const hashHistory = require('react-router').hashHistory;

const OfferingActions = {
  fetchOfferings(){
    OfferingApiUtil.fetchOfferings(this.receiveOfferings);
  },
  fetchOffering(name){
    OfferingApiUtil.fetchOffering(name, this.receiveOffering);
  },
  receiveOffering(offering){
    AppDispatcher.dispatch({
      actionType: OfferingConstants.OFFERING_RECEIVED,
      offering: offering
    });
  },
  receiveNewOffering(offering){
    AppDispatcher.dispatch({
      actionType: OfferingConstants.OFFERING_RECEIVED,
      offering: offering
    });
    hashHistory.push("/offerings");
  },
  receiveOfferings(offerings){
    AppDispatcher.dispatch({
      actionType: OfferingConstants.OFFERINGS_RECEIVED,
      offerings: offerings
    });
  },
  createOffering(formData){
    OfferingApiUtil.createOffering(formData, this.receiveOffering);
  }
};

export default OfferingActions;
