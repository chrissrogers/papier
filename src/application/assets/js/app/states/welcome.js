(function (require) {

  return Em.Route.extend({

    route: '/hello',

    // references for this state's active views
    activeViews: {},

    // defines the pairing of view classes to application outlets
    connectOutlets: function (router, context) {
      var appController = router.get('applicationController');

      // appController.connectOutlet('primary', Papier.EditorView);
      this.activeViews.welcome = appController.connectOutlet({
        name: 'welcome',
        outletName: 'secondary'
      });
    },

    // events

    launchEditor: Em.State.transitionTo('index'),

    // state transitions

    enter: function (manager, transition) {
      this._super(manager, transition);
    },

    exit: function (manager, transition) {

      var stateSuper = this._super,
          viewNode = this.activeViews.welcome.$();

      // custom pushDown animation
      viewNode.pushDown('hide', {
        duration: 3000,
        complete: function () {
          viewNode.fadeOut();

          stateSuper(manager, transition);
        }
      });

    }

  });

})
