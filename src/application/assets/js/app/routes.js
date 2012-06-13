(function (require) {

  var _ = require('underscore');

  // define states
  return Em.Router.extend({
    
    rootElement: 'body',

    root: Em.State.extend({

      index: _.extend(require('view-welcome'), {
        route: '/'
      }),

      editor: _.extend(require('view-editor'), {
        route: '/write'
      })

    })

  });

})
