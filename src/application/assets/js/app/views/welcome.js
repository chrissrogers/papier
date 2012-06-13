(function (require) {

  return Em.ViewState.create({

    view: Em.View.create({

      template: Ember.Handlebars.compile(require('template-welcome')),

      classNames: ['view-welcome'],

      launchEditor: function (event) {
        // papier.stateManager.goToState('editor');
        papier.router.transitionTo('editor');
      }

    }),

    enter: function (manager, transition) {
      this._super(manager, transition);
    },

    exit: function (manager, transition) {
      var viewNode = this.view.$();

      // custom pushDown animation
      viewNode.pushDown(200, {
        complete: function () {
          viewNode.remove();
        }
      });
    }
    
  });

})
