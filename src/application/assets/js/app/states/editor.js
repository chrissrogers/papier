(function (require) {

  return Em.Route.extend({

    route: '/',

    connectOutlets: function(router, context) {
      var appController = router.get('applicationController');

      appController.connectOutlet({
        name: 'editor',
        outletName: 'primary'
      });
    },

    /*
    * state transitions
    */

    enter: function (manager, transition) {
      this._super(manager, transition);
    },

    exit: function (manager, transition) {
      this._super(manager, transition);
    },

    /*
    * actions
    */

    launchWelcome: Em.State.transitionTo('welcome')

  });

})
