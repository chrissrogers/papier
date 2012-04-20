
require.config({
  baseUrl: '/assets/js',
  paths: {
    jquery: '//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min',
    ember: 'lib/ember-require',
    _: 'lib/underscore'
  }
});

require(['app/init'], function (etherous) {



});

