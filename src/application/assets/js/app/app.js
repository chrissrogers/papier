(function (require) {

  // create the application
  var Papier = Em.Application.create();

  // testing some model data
  Papier.president = Ember.Object.create({
    name: "Barack Obama"
  });

  Papier.ApplicationController = Em.Controller.extend({});
  Papier.ApplicationView = require('view-application');

  Papier.EditorController = Em.Controller.extend({});
  Papier.EditorView = require('view-editor');

  Papier.WelcomeController = Em.Controller.extend({});
  Papier.WelcomeView = require('view-welcome');

  Papier.Router = require('routes');

  window.Papier = Papier;

  Papier.initialize();

})
