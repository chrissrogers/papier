(function (require) {
  
  var _ = require('underscore'),

      // instantiate the application
      Papier = window.Papier = Em.Application.create();

  // append the router
  _.extend(Papier, require('routes'));

  Papier.initialize();

})
