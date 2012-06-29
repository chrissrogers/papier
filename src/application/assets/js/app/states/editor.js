(function (require) {

  return Em.Route.extend({

    route: '/',

    connectOutlets: function(router, context) {
      var appController = router.get('applicationController');

      appController.connectOutlet('primary', Papier.EditorView);
    },

    // events

    launchWelcome: Em.State.transitionTo('welcome'),


    bold: function (router, event, t) {

      document.execCommand('bold');

      var range = rangy.getSelection().getRangeAt(0),
          isBold = range.isContianedBy({
            tagNames: ['b', 'strong'],
            cssProperties: {
              fontWeight: 'bold'
            },
            until: '#editor-body'
          });

      $('#editor-selection-menu-button-bold').css('fontWeight', isBold ? 'bold' : 'normal');

    },

    // state transitions

    enter: function (manager, transition) {
      this._super(manager, transition);
    },

    exit: function (manager, transition) {
      this._super(manager, transition);
    }

  });

})
