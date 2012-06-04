//
//  jQuery pushDown
//
//  Author: Christopher Rogers
//
//  Changelog
//
//  2012-06-01 - 1.0 - Initial release
//
//
 
(function($) {
 
  $.fn.pushDown = function (action, animateOptions) {
 
    var element = $(this),
        elementPosition = element.css('position'),
        positionRegex = /absolute|relative/,
        wrapper = $('<div />').css({
          position: 'relative',
          overflow: 'hidden',
          margin: 0,
          padding: 0
        }),
        animateOptions = typeof action === 'object'
          ? action
          : animateOptions;

    element.wrap(wrapper);

    // we need to have a properly mutable position property
    if (!positionRegex.test(elementPosition))
      element.css({ position: 'relative' });

    element
      .animate({
        bottom: -element.height()
      }, $.extend({
        duration: 1600,
        easing: 'easeInOutQuad'
      }, animateOptions, {
        complete: function () {
          element
            .hide()
            .unwrap();

          if (!positionRegex.test(elementPosition))
            element.css({ position: elementPosition });
        }
      }));
 
  }
 
})(jQuery);
