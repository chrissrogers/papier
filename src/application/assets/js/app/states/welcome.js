(function (require) {

  return Em.State.extend({

    route: '/hi',

    // references for this state's active views
    activeViews: {},

    // defines the pairing of view classes to application outlets
    connectOutlets: function (router, context) {
      var appController = router.get('applicationController');

      // appController.connectOutlet('primary', Papier.EditorView);
      this.activeViews.welcome = appController.connectOutlet('secondary', Papier.WelcomeView);
    },

    //
    // events
    //

    launchEditor: Em.State.transitionTo('index'),

    //
    // state transitions
    //     

    enter: function (manager, transition) {
      this._super(manager, transition);
    },

    exit: function (manager, transition) {

      var stateSuper = this._super,
          viewNode = this.activeViews.welcome.$();

      // custom pushDown animation
      viewNode.pushDown(200, {
        complete: function () {
          // viewNode.remove();
          stateSuper(manager, transition);
        }
      });

    }

  });

})
