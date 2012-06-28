(function (require) {

  // handles assignment of views to the main application object

  return require('underscore').map([
    'application', 
    'editor', 
    'editorbody', 
    'editorselectionmenu', 
    'welcome'
  ], function (view) {
    return require('view-' + view);
  });

})
