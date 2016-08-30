const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

import AppDispatcher from '../dispatcher/dispatcher';
import SessionConstants from '../constants/session_constants';
import SessionApiUtil from '../util/session_api_util';
import ErrorActions from './error_actions';

const SessionActions = {
  signUp (formData) {
    SessionApiUtil.signUp(
      formData,
      SessionActions.receiveCurrentAccount,
      ErrorActions.setErrors);
  },
  logIn(formData){
    SessionApiUtil.logIn(
      formData,
      SessionActions.receiveCurrentAccount,
      ErrorActions.setErrors);
  },
  logOut() {
    SessionApiUtil.logOut(SessionActions.removeCurrentAccount);
  },
  fetchCurrentAccount(complete){
    SessionApiUtil.fetchCurrentAccount(
    SessionActions.receiveCurrentAccount, complete);
  },
  receiveCurrentAccount(currentAccount){
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentAccount: currentAccount
    });
  },
  removeCurrentAccount() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
    hashHistory.push("/login");
  }
};

export default SessionActions;
