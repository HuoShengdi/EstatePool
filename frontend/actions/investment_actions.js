import AppDispatcher from "../dispatcher/dispatcher";
import InvestmentConstants from "../constants/investment_constants";
import InvestmentApiUtil from "../util/investment_api_util";
const hashHistory = require('react-router').hashHistory;

const InvestmentActions = {
  fetchInvestments(){
    InvestmentApiUtil.fetchInvestments(this.receiveInvestments);
  },
  fetchInvestment(id){
    InvestmentApiUtil.fetchInvestment(id, this.receiveInvestment);
  },
  receiveInvestment(investment){
    AppDispatcher.dispatch({
      actionType: InvestmentConstants.INVESTMENT_RECEIVED,
      investment: investment
    });
  },
  receiveNewInvestment(investment){
    AppDispatcher.dispatch({
      actionType: InvestmentConstants.INVESTMENT_RECEIVED,
      investment: investment
    });
    hashHistory.push("/portfolio");
  },
  receiveInvestments(investments){
    AppDispatcher.dispatch({
      actionType: InvestmentConstants.INVESTMENTS_RECEIVED,
      investments: investments
    });
  },
  createInvestment(formData){
    InvestmentApiUtil.createInvestment(formData, this.receiveInvestment);
  }
};

export default InvestmentActions;
