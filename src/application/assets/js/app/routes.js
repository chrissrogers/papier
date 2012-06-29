(function (require) {

  // defines controller and view classes used by the router states
  // as well as the router and corresponding states

  // the returned object is appended to the main application object

  return Em.Router.extend({

    location: 'hash',

    enableLogging: true,

    root: Em.Route.extend({
      index: require('state-editor'),
      welcome: require('state-welcome')
    })

  });

})
