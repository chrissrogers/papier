(function (require) {

  // create the application
  var papier = Em.Application.create();

  papier.router = require('routes');

  // testing some model data
  papier.president = Ember.Object.create({
    name: "Barack Obama"
  });

  window.papier = papier;

})
