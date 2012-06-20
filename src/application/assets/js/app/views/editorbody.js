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

    pollMenuDisplay: function (event) {
      var selectionID = 'selection-tmp-' + Math.floor(Math.random() * 1000000000)
          selection = rangy.getSelection(),
          range = selection.getRangeAt(0),
          node = $('<span id="' + selectionID + '" />')[0];

      console.log(selection, selection.getRangeAt(0));

      range.surroundContents(node);
    }

  });

})
