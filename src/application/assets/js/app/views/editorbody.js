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
      var selectionID = 'selection-tmp-' + Math.floor(Math.random() * 1000000000)
          selection = rangy.getSelection(),
          range = selection.getRangeAt(0),
          node = $('<span id="' + selectionID + '" />')
            .css({
              position: 'relative'
            })[0],
          view = this;

      $(document).one('mousedown keyup', function () {
        view.fire('clearSelectionNodes');
      });

      if (range.toString()) {
        // place a reference node after the selection
        range.insertNodeAtEnd(node);

        // attach the menu to the reference node
        $('<menu />')
          .css({
            position: 'absolute',
            background: 'red',
            width: '20px',
            height: '20px',
            top: 0,
            left: 0
          })
          .appendTo(node);
      }
    },

    clearSelectionNodes: function (event) {
      
      this.$('span[id|="selection-tmp"]').remove();

    }

  });

})
