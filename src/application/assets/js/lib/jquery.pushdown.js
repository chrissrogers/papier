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
          position: 'absolute',
          overflow: 'hidden',
          margin: 0,
          padding: 0,
          top: 0, bottom: 0, left: 0, right: 0
        });

    action = typeof action === 'string' && /hide|show/.test(action) ? action : 'hide';

    animateOptions = $.extend({
      duration: 2000,
      easing: 'easeInOutQuad'
    }, typeof action === 'object' ? action : animateOptions);

    // we need to have a properly mutable position property
    if (!positionRegex.test(elementPosition))
      element.css({ position: 'relative' });

    element
      .show()
      .wrap(wrapper)
      .animate({
        // jquery.animate-enhanced has unexpected behavior here
        bottom: -element.height() // action === 'hide' ? -element.height() : -300
      }, $.extend(animateOptions, {
        complete: function () {
          element
            [action]()
            .unwrap();

          if (!positionRegex.test(elementPosition))
            element.css({ position: elementPosition });
        }
      }));
 
  };
 
})(jQuery);
