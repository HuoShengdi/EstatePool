import InvestmentConstants from '../constants/offering_constants';
const Store = require('flux/utils').Store;
import AppDispatcher from '../dispatcher/dispatcher';

let _investments = {};

const InvestmentStore = new Store(AppDispatcher);

function _loadInvestment(investment){
  _investments[investment.id] = investment;
}

function _resetInvestments(investments){
  _investments = {};
  investments.forEach((investment)=>{
    _investments[investment.id] = investment;
  });
}

function _investmentsArray(){
  let array = Object.keys(_investments).map((key)=>{
    return _investments[key];
  });
  return array;
}

InvestmentStore.investments = function(){
  return Object.assign({}, _investments);
};

InvestmentStore.__onDispatch = function (payload) {
  switch (payload.actionType){
    case InvestmentConstants.INVESTMENT_RECEIVED:
      _loadInvestment(payload.investment);
      InvestmentStore.__emitChange();
      break;
    case InvestmentConstants.INVESTMENTS_RECEIVED:
      _resetInvestments(payload.investments);
      InvestmentStore.__emitChange();
      break;
  }
};

export default InvestmentStore;
