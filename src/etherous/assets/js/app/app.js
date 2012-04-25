(function (require) {

  require('ember');

  etherous = Em.Application.create();

  // Model testing
  etherous.president = Ember.Object.create({
    name: "Barack Obama"
  });

  require('view-editor');
  require('view-welcome');
  
  etherous.EditorView.appendTo('#main');
  etherous.WelcomeView.appendTo('#main');

  return etherous;

})
