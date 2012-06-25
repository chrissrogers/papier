(function (require) {

  return Em.View.extend({

    template: Em.Handlebars.compile(require('template-editorbody')),

    // events

    mouseUp: function (event) {
      this.fire('pollMenuDisplay', event);
    },

    keyUp: function (event) {
      // only poll if an arrow key is pressed, hinting that a selection may have been made
      if (event.which >= 37 && event.which <= 40)
        this.fire('pollMenuDisplay', event);
    },

    // event handlers

    pollMenuDisplay: function (event) {
      var selection = rangy.getSelection(),
          view = this;

      // destroy any existant menus next time we use the keyboard or mouse
      $(document).on('mousedown.papiermenu keydown.papiermenu', function (event) {
        var _ = require('underscore'),
            isModifierKey = _.indexOf(Papier.Constants.MODIFIER_KEY_CHAR_CODES, event.which) > -1;

        // only fire on mouse events and non-modifier keys
        if (event.type === 'mousedown' || !isModifierKey) {
          view.fire('clearSelectionNodes');
          $(this).off('mousedown.papiermenu keydown.papiermenu');
        }
      });

      if (selection.toString()) {

        var range = selection.getRangeAt(0),
            node = $('<span class="_js-selection-anchor" />')[0];

        // place a reference node after the selection
        range.insertNodeAtEnd(node);

        // attach the menu to the reference node
        $('<menu />').appendTo(node);

      }
    },

    clearSelectionNodes: function (event) {
      
      this.$('span._js-selection-anchor').remove();

    }

  });

})
