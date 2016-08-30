export default {
  signUp (account, success, error) {
    $.ajax({
      url: 'api/accounts',
      type: 'POST',
      dataType: 'json',
      data: {account},
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("signup", errors);
      }
    });
  },
  logIn (account, success, error){
    $.ajax({
      url: 'api/session',
      type: 'POST',
      data: { account },
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("login", errors);
      }
    });
  },
  logOut (success){
    $.ajax({
      url: 'api/session',
      type: 'DELETE',
      success,
      error: function () {
        success();
      }
    });
  }
};
