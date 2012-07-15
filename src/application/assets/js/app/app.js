(function (require) {

  var _ = require('underscore'),

      // instantiate the application
      Papier = window.Papier = Em.Application.create();

  Papier.Constants = require('config-constants');

  _.extend(Papier, require('views'));

  // append the router
  Papier.Router = require('routes');

  Papier.initialize();

})
