  
papier.EditorView = Ember.View.create({

  template: Ember.Handlebars.compile(require('template-editor')),
  
  president: papier.president.name

});
