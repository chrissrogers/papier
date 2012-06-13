(function (require) {

  return Em.ViewState.create({
    
    view: Em.View.create({

      template: Ember.Handlebars.compile(require('template-editor')),
      
      classNames: ['view-editor']

    }),

    enter: function (manager, transition) {
      this._super(manager, transition);
    },

    exit: function (manager, transition) {
      this._super(manager, transition);
    }

  });

})
