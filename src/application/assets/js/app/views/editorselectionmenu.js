(function (require) {

  return {

    EditorSelectionMenuController: Em.Controller.extend({}),

    EditorSelectionMenuView: Em.View.extend({
  
      template: Em.Handlebars.compile(require('template-editorselectionmenu')),

      /*
        actions
      */

      bold: function (router, event) {

        document.execCommand('bold');

        var range = rangy.getSelection().getRangeAt(0),
            isBold = range.isContianedBy({
              tagNames: ['b', 'strong'],
              cssProperties: {
                fontWeight: 'bold'
              },
              until: '#editor-body'
            });

        $('#editor-selection-menu-button-bold').css('fontWeight', isBold ? 'bold' : 'normal');

      },

      /*
        events
      */

      mouseDown: function (event) {
        
        event.preventDefault();
        event.stopPropagation();
  
      }

    })
    
  };

})
