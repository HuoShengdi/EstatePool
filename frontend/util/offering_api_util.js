export default {
  fetchOffering(name, success){
    $.ajax({
      url: '/api/offerings/' + name,
      type: "GET",
      success
    });
  },
  fetchOfferings(success){
    $.ajax({
      url: '/api/offerings',
      type: 'GET',
      success
    });
  },
  createOffering(formData, success){
    $.ajax({
      url: '/api/offerings',
      type: 'POST',
      data: {offering: formData},
      success
    });
  }
};
