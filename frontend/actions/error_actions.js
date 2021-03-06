import AppDispatcher from '../dispatcher/dispatcher';
import ErrorConstants from '../constants/error_constants';

const ErrorActions = {
  setErrors(form, errors) {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.SET_ERRORS,
      form: form,
      errors: errors
    });
  },

  clearErrors() {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS
    });
  }
};

export default ErrorActions;
