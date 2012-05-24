(function (require) {

  require('ember');

  papier = Em.Application.create();

  // Model testing
  papier.president = Ember.Object.create({
    name: "Barack Obama"
  });

  require('view-editor');
  require('view-welcome');
  
  papier.EditorView.appendTo('#main');
  papier.WelcomeView.appendTo('#main');

  return papier;

})
