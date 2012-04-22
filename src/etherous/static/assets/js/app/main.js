(function (require) {
  
  var _ = require('underscore');

  _.each(['a','b','c'], function (elem) {
    console.log(elem);
  });

})

/*
define([

  'ember',

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

});*/
