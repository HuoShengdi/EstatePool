import SessionConstants from '../constants/session_constants';
const Store = require('flux/utils').Store;
import AppDispatcher from '../dispatcher/dispatcher';

let _currentAccount = {};
let _currentAccountHasBeenFetched = false;

const SessionStore = new Store(AppDispatcher);

const _login = function (account) {
  _currentAccount = account;
  _currentAccountHasBeenFetched = true;
};

const _logout = function () {
  _currentAccount = {};
  _currentAccountHasBeenFetched = true;
};

SessionStore.currentAccount = function () {
  return Object.assign({},_currentAccount);
};

SessionStore.isAccountLoggedIn = function () {
  return Boolean(_currentAccount.id);
};

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentAccount);
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _logout();
      SessionStore.__emitChange();
      break;
  }
};

SessionStore.currentAccountHasBeenFetched = function (){
  return Boolean(_currentAccountHasBeenFetched);
};

export default SessionStore;
