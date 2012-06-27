(function (require) {

  return {

    EditorSelectionMenuController: Em.Controller.extend({}),

    EditorSelectionMenuView: Em.View.extend({
  
      template: Em.Handlebars.compile(require('template-editorselectionmenu')),
  
      // events
  
      mouseDown: function (event) {
        
        event.preventDefault();
        event.stopPropagation();
  
      }
  
    })
    
  };

})
