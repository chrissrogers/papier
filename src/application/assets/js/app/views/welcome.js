(function (require) {

  return Em.View.extend({

    template: Em.Handlebars.compile(require('template-welcome')),

    classNames: ['view-welcome']

  });

})
