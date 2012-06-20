(function (require) {

  // defines controller and view classes used by the router states
  // as well as the router and corresponding states

  // the returned object is appended to the main application object

  return {
    ApplicationController: Em.Controller.extend({}),
    ApplicationView: require('view-application'),

    EditorController: Em.Controller.extend({}),
    EditorView: require('view-editor'),

    EditorBodyController: Em.Controller.extend({}),
    EditorBodyView: require('view-editorbody'),

    WelcomeController: Em.Controller.extend({}),
    WelcomeView: require('view-welcome'),

    Router: Em.Router.extend({

      location: 'hash',

      enableLogging: true,

      root: Em.State.extend({
        index: require('state-editor'),
        welcome: require('state-welcome')
      })

    })
  };

})
