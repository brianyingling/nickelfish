// Responsible for fetching the data
// based on name.

var Loader = {

  get: function(filename, callback) {
    var resp;

    $.getJSON('data/'+filename).done(function(data) {
      callback(data);
    });
  }
};