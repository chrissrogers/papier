
define([

  'lib/ember/require-loader',

], function (em) {

  // Create a local namespace for the app
  var etherous = em.Application.create();

  etherous.mainView = em.View.extend({
    mouseDown: function() {
      window.alert("hello world!");
    }
  });

  // add etherous to ember so that we may access it from within handlebars templates
  em.etherous = etherous;

  return etherous;

});
