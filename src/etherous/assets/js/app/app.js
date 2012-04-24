(function (require) {

  var app = Em.Application.create();

  app.WelcomeView = require('app-view-welcome');
  app.EditorView = require('app-view-editor');

  return app;

})
