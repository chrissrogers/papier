
require.config({
  baseUrl: '/assets/js',
  paths: {
    jquery: '//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min',
    ember: 'lib/ember/ember-0.9.5'
  }
});

require(['app/init'], function (etherous) {

});

