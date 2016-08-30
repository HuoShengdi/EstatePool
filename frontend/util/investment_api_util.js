export default {
  fetchInvestment(id, success){
    $.ajax({
      url: '/api/investments/' + name,
      type: "GET",
      success
    });
  },
  fetchInvestments(success){
    $.ajax({
      url: '/api/investments',
      type: 'GET',
      success
    });
  },
  createInvestment(formData, success){
    $.ajax({
      url: '/api/investments',
      type: 'POST',
      data: {investment: formData},
      success
    });
  }
};
