(function (require) {

  return {

    EditorBodyController: Em.Controller.extend({}),

    EditorBodyView: Em.View.extend({

      template: Em.Handlebars.compile(require('template-editorbody')),

      activeSelection: '',

      // events

      mouseUp: function (event) {
        var view = this;

        // if we have a selection, allow a delay to account for clicks within already-selected text
        // (behavior in that case results in a deselection)
        setTimeout(function () {
          view.fire('checkForSelection', event);
        }, 250);

      },

      keyUp: function (event) {
        // only poll if an arrow key is pressed, hinting that a selection may have been made
        if (event.which > 37 && event.which <= 40)
          this.fire('checkForSelection', event);
      },

      // event handlers

      checkForSelection: function (event) {
        
        var selection = rangy.getSelection(),
            range = selection.getRangeAt(0);

        if (selection.toString())
          this.fire('showSelectionMenu', selection, range);

      },

      showSelectionMenu: function (selection, range) {

        var _ = require('underscore'),
            referenceNode = $('<span class="_js-selection-reference" />'),
            selectionMenu = $('#editor-selection-menu'),
            view = this;

        // place a reference node after the selection
        range.insertNodeAtEnd(referenceNode[0]);

        // set the menu offset to the reference node's offset
        selectionMenu
          .css(referenceNode.offset())
          .fadeIn(50);

        this.activeSelection = selection;

        // destroy any existant menus next time we use the keyboard or mouse
        $(document).on('mousedown.papiermenu keydown.papiermenu', function (event) {
          
          var isModifierKey = event.type === 'keydown'
                ? _.indexOf(Papier.Constants.MODIFIER_KEY_CHAR_CODES, event.which) > -1
                : false;

          // only fire on mouse events and non-modifier keys
          if (event.type === 'mousedown' || !isModifierKey) {
            view.fire('hideSelectionMenu');

            // decouple the event after we destroy menu reference nodes
            $(this).off('mousedown.papiermenu keydown.papiermenu');
          }

        });

      },

      hideSelectionMenu: function (event) {

        var selectionMenu = this.get('parentView').$().find('#editor-selection-menu'),
            referenceNodes = this.$('span._js-selection-reference')
        
        selectionMenu.fadeOut(50);

        referenceNodes.remove();

      }

    })
  
  };

})
