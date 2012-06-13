(function (require) {

  return Em.View.extend({

    template: Em.Handlebars.compile(require('template-editor')),
    
    classNames: ['view-editor']

  });

})
