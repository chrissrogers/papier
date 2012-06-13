//
//  jQuery pushDown
//
//  Author: Christopher Rogers
//
//  Changelog
//
//  2012-06-01 - 1.0 - Initial release
//
 
(function($) {
 
  $.fn.pushDown = function (action, animateOptions) {
 
    var element = $(this),
        elementPosition = element.data('pushDown.origPosition') || element.css('position'),
        positionRegex = /absolute|relative/,
        callback = function () {},
        wrapper = $('<div class="_jq-pushDown-wrapper" />').css({
          position: 'absolute',
          overflow: 'hidden',
          margin: 0,
          padding: 0,
          top: 0, bottom: 0, left: 0, right: 0
        }),
        delta;

    // action may be 'hide', 'reset', or a number representing # of pixels to move
    action = /^(hide|reset|\d+)$/.test(action) ? action : 'hide';

    animateOptions = $.extend({
      duration: 2000,
      easing: 'easeInOutQuad'
    }, animateOptions);

    // we need to have a properly mutable position property
    if (!positionRegex.test(elementPosition))
      element
        .data('pushDown.origPosition', elementPosition)
        .css({ position: 'relative' });

    // determine how far we will move
    delta = action === 'hide'
      ? parseInt(element.height(), 10)
      : action === 'reset'
        ? Math.abs(element.css('bottom'))
        : parseInt(action, 10);

    if (!element.parent('._jq-pushDown-wrapper').length)
      element.wrap(wrapper);

    if (typeof animateOptions.complete === 'function') {
      callback = animateOptions.complete;
    }

    element
      .show()
      .animate({
        bottom: -delta
      }, $.extend(animateOptions, {
        complete: function () {

          action === 'hide' && element.hide();

          if (/hide|reset/.test(action) || parseInt(element.css('bottom'), 10) === 0) {

            element.unwrap();

            if (!positionRegex.test(elementPosition))
              element.css({ position: elementPosition });

            callback();
          }
        }
      }));
 
  };
 
})(jQuery);
