(function (require) {

  return {
    
    ApplicationController: Em.Controller.extend({}),

    ApplicationView: Em.View.extend({

      template: Em.Handlebars.compile(require('template-application'))

    })

  };

})
