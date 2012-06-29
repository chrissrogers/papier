(function (require, a, b) {

  var _ = require('underscore'),

      // instantiate the application
      Papier = window.Papier = Em.Application.create();

  Papier.Constants = require('config-constants');

  _.extend.apply(this, [Papier].concat(require('views')));

  // append the router
  Papier.Router = require('routes');

  Papier.initialize();

})
