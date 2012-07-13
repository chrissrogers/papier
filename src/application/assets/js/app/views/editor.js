(function (require) {

  return {
  
    EditorController: Em.Controller.extend({}),

    EditorView: Em.View.extend({
  
      template: Em.Handlebars.compile(require('template-editor')),
      
      classNames: ['view-editor'],

      /*
        events
      */

      mouseUp: function (event) {
        this.trigger('cursorPositionChange', event);
      },

      keyUp: function (event) {
        this.trigger('cursorPositionChange', event);
      },

      /*
        event handlers
      */

      /** 
       * detects state of user's cursor/selection, and delgates to behaviors
       * that rely on certain cursor and selection conditions
       */
      cursorPositionChange: function (event) {

        var selection = rangy.getSelection();

        // Selection Menu
        
        if (selection.toString())
          this.trigger('showSelectionMenu', selection);
        else
          this.trigger('hideSelectionMenu');

        // Cosmetic Behaviors

        if (selection.rangeCount)
          this.trigger('highlightCurrentParagraph', selection);

      },

      /**
       * displays the selection context menu
       */
      showSelectionMenu: function (selection) {

        var referenceNode = $('<span class="_js-selection-reference" />'),
            selectionMenu = $('#editor-selection-menu'),
            range = selection.getRangeAt(0);

        // place a reference node after the selection
        range.insertNodeAtEnd(referenceNode[0]);

        // set the menu offset to the reference node's offset
        selectionMenu
          .css(referenceNode.offset())
          .fadeIn(50);

      },

      /**
       * hides the selection context menu and destroys all selection 
       * reference nodes
       */
      hideSelectionMenu: function () {

        var referenceNodes = this.$('span._js-selection-reference');

        if (referenceNodes.length) {
          
          var selectionMenu = this.$('#editor-selection-menu');

          selectionMenu.fadeOut(50);
          referenceNodes.remove();  

        }

      },

      /**
       * highlights paragraph containing the cursor and de-emphasizes others
       */
      highlightCurrentParagraph: function (selection) {

        var paragraphs = this.$('p'),
            currentParagraph = $(selection.focusNode).closest('p');

        paragraphs.addClass('de-emphasized');

        currentParagraph.removeClass('de-emphasized');

      }
  
    })

  };

})
