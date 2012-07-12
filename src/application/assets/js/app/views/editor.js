(function (require) {

  return {
  
    EditorController: Em.Controller.extend({}),

    EditorView: Em.View.extend({
  
      template: Em.Handlebars.compile(require('template-editor')),
      
      classNames: ['view-editor'],

      // events

      mouseUp: function (event) {
        this.trigger('cursorPositionChange', event);
      },

      keyUp: function (event) {
        this.trigger('cursorPositionChange', event);
      },

      // event handlers

      cursorPositionChange: function (event) {

        var selection = rangy.getSelection()

        // if something is selected, we show the slection menu
        if (selection.toString())
          this.trigger('showSelectionMenu', selection);
        else
          this.trigger('hideSelectionMenu');

      },

      showSelectionMenu: function (selection) {

        var _ = require('underscore'),
            referenceNode = $('<span class="_js-selection-reference" />'),
            selectionMenu = $('#editor-selection-menu'),
            range = selection.getRangeAt(0),
            view = this;

        // place a reference node after the selection
        range.insertNodeAtEnd(referenceNode[0]);

        // set the menu offset to the reference node's offset
        selectionMenu
          .css(referenceNode.offset())
          .fadeIn(50);

      },

      hideSelectionMenu: function (event) {

        var selectionMenu = this.$('#editor-selection-menu'),
            referenceNodes = this.$('span._js-selection-reference')

        selectionMenu.fadeOut(50);

        referenceNodes.remove();

      }
  
    })

  };

})
