(function (require) {

  return {
  
    EditorController: Em.Controller.extend({

      launchWelcome: Em.State.transitionTo('welcome')

    }),

    EditorView: Em.View.extend({
  
      template: Em.Handlebars.compile(require('template-editor')),
      
      classNames: ['view-editor']
  
    })

  };

})
