(function (require) {

  return {

    WelcomeController: Em.Controller.extend({}),

    WelcomeView: Em.View.extend({
  
      template: Em.Handlebars.compile(require('template-welcome')),
  
      classNames: ['view-welcome']
  
    })
  
  };

})
