import OfferingConstants from '../constants/offering_constants';
const Store = require('flux/utils').Store;
import AppDispatcher from '../dispatcher/dispatcher';

let _offerings = {};

const OfferingStore = new Store(AppDispatcher);

function _loadOffering(offering){
  _offerings[offering.name] = offering;
}

function _resetOfferings(offerings){
  _offerings = {};
  offerings.forEach((offering)=>{
    _offerings[offering.name] = offering;
  });
}

function _offeringsArray(){
  let array = Object.keys(_offerings).map((key)=>{
    return _offerings[key];
  });
  return array;
}

OfferingStore.offerings = function(){
  return _offeringsArray();
};

OfferingStore.offering = function(name){
  return _offerings[name];
};

OfferingStore.__onDispatch = function (payload) {
  switch (payload.actionType){
    case OfferingConstants.OFFERING_RECEIVED:
      _loadOffering(payload.offering);
      OfferingStore.__emitChange();
      break;
    case OfferingConstants.OFFERINGS_RECEIVED:
      _resetOfferings(payload.offerings);
      OfferingStore.__emitChange();
      break;
  }
};

export default OfferingStore;
