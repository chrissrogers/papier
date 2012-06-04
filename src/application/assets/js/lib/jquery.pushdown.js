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
        elementPosition = element.css('position'),
        positionRegex = /absolute|relative/,
        wrapper = $('<div />').css({
          position: 'relative',
          overflow: 'hidden',
          margin: 0,
          padding: 0
        }),
        animateOptions = $.extend({
          duration: 1600,
          easing: 'easeInOutQuad'
        }, typeof action === 'object' ? action : animateOptions),
        action = typeof action === 'string' && /hide|show/.test(action)
          ? action
          : 'hide';

    // we need to have a properly mutable position property
    if (!positionRegex.test(elementPosition))
      element.css({ position: 'relative' });

    element
      .show()
      .wrap(wrapper)
      .animate({
        bottom: action === 'hide' ? -element.height() : 0
      }, $.extend(animateOptions, {
        complete: function () {
          element
            [action]()
            .unwrap();

          if (!positionRegex.test(elementPosition))
            element.css({ position: elementPosition });
        }
      }));
 
  }
 
})(jQuery);
