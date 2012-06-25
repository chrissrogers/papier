(function (require) {
  
  var _ = require('underscore'),

      // instantiate the application
      Papier = window.Papier = Em.Application.create();

  // define some constants
  Papier.Constants = {
    MODIFIER_KEY_CHAR_CODES: [
      16, 17, 18, 19, 20, 33, 34, 35, 36, 45, 91, 92, 93, 
      112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123,
      144, 145
    ]
  };

  // append the router
  _.extend(Papier, require('routes'));

  Papier.initialize();

})
