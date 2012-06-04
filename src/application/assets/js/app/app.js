(function (require) {

  require('ember');

  papier = Em.Application.create();

  // Model testing
  papier.president = Ember.Object.create({
    name: "Barack Obama"
  });

  require('view-editor');
  require('view-welcome');
  
  papier.EditorView.append();
  papier.WelcomeView.append();

  return papier;

})
