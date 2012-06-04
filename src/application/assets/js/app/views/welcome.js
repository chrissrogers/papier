
papier.WelcomeView = Ember.View.create({
  
  template: Ember.Handlebars.compile(require('template-welcome')),
  id: 'view-welcome',
    
  launchEditor: function (event) {
    var view = event.view;

    require('jquery-pushdown');

    view.$().pushDown();
  }

});
