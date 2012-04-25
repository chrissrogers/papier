
etherous.EditorView = Ember.View.create({
  template: Ember.Handlebars.compile(require('template-editor')),
  president: etherous.president.name,
  mouseDown: function () {
    window.alert("Editor");
  }
});
