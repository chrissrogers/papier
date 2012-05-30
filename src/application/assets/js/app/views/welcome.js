
papier.WelcomeView = Ember.View.create({
  
  template: Ember.Handlebars.compile(require('template-welcome')),

  launchEditor: function (event) {

    $(this).css('border', '10px solid red');

  }

});
