(function (require) {

  return {
  
    EditorController: Em.Controller.extend({}),

    EditorView: Em.View.extend({
  
      template: Em.Handlebars.compile(require('template-editor')),
      
      classNames: ['view-editor']
  
    })

  };

})
