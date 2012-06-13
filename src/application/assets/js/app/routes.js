(function (require) {

  // define states
  return Em.Router.extend({

    location: 'hash',

    enableLogging: true,

    root: Em.State.extend({
      index: require('state-editor'),
      welcome: require('state-welcome')
    })

  });

})
