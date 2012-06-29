// handles assignment of views to the main application object
(function (require) {


  var _ = require('underscore');

  // this concats all view + controller objects into one master
  // set, which wil be extended onto the application object
  
  return _.extend.apply(this, _.map([
    'application', 
    'editor', 
    'editorbody', 
    'editorselectionmenu', 
    'welcome'
  ], function (view) {

    return require('view-' + view);
  
  }));

})
