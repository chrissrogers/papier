(function (require) {

  return Em.State.extend({

    route: '/hi',

    connectOutlets: function(router, context) {
      var appController = router.get('applicationController');

      // appController.connectOutlet('primary', Papier.EditorView);
      appController.connectOutlet('secondary', Papier.WelcomeView);
    },

    launchEditor: Em.State.transitionTo('index'),

    enter: function (manager, transition) {
      this._super(manager, transition);
    },

    exit: function (manager, transition) {
      console.log(this, manager, transition);
      this._super(manager, transition);
    }

  });

})
