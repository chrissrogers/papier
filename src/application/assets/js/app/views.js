(function (require) {

  var _ = require('underscore');

  // handles assignment of views to the main applicaiton object

  return _.map([
    'application', 
    'editor', 
    'editorbody', 
    'editorselectionmenu', 
    'welcome'
  ], function (view) {
    return require('view-' + view);
  });

})
