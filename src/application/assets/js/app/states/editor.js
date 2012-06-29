(function (require) {

  return Em.State.extend({

    route: '/',

    connectOutlets: function(router, context) {
      var appController = router.get('applicationController');

      appController.connectOutlet('primary', Papier.EditorView);
    },

    // events

    launchWelcome: Em.State.transitionTo('welcome'),

    // state transitions

    enter: function (manager, transition) {
      this._super(manager, transition);
    },

    exit: function (manager, transition) {
      this._super(manager, transition);
    }

  });

})
