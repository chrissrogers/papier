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
        completeCallback = $.noop,
        positionRegex = /absolute|relative/,
        scrollTop = $(document).scrollTop(),
        guide,
        mover,
        delta;

    // action may be 'hide', 'reset', or a number representing # of pixels to move
    action = /^(hide|reset|-?\d+)$/.test(action) ? action : 'hide';

    animateOptions = $.extend({
      duration: 2000,
      easing: 'easeInOutQuad'
    }, animateOptions);

    // we need to have a properly mutable position property
    if (!positionRegex.test(elementPosition))
      element
        .data('pushDown.origPosition', elementPosition)
        .css({ position: 'relative' });

    // wrap element in the standard mover & guide unless it's already wrapped due to 
    // previously being pushed
    if ((mover = element.parent('._jq-pushDown-mover')).length) {
      guide = mover.parent('._jq-pushDown-guide');
    } else {

      guide = element.wrap($('<div class="_jq-pushDown-guide" />').css({
        position: 'absolute',
        overflow: 'hidden',
        margin: 0, padding: 0,
        top: 0, bottom: 0, left: 0, right: 0
      })).parent();

      mover = element.wrap($('<div class="_jq-pushDown-mover" />').css({
        position: 'relative',
        overflow: 'hidden',
        margin: 0, padding: 0,
        height: guide.height() - element.position().top,
        width: guide.width(),
        zIndex: element.css('zIndex')
      })).parent();

      element.css('marginTop', -scrollTop);

    }

    // determine how far we will move
    delta = action === 'hide'
      ? parseInt(element.height(), 10)
      : action === 'reset'
        ? Math.abs(element.css('bottom'))
        : parseInt(action, 10);

    if (typeof animateOptions.complete === 'function') {
      completeCallback = animateOptions.complete;
    }

    mover
      .show()
      .animate({
        bottom: -(delta)
      }, $.extend(animateOptions, {
        complete: function () {

          if (action === 'hide')
            mover.hide();

          if (/hide|reset/.test(action) || parseInt(mover.css('bottom'), 10) === 0) {

            element.unwrap();

            if (!positionRegex.test(elementPosition))
              element.css({ position: elementPosition });

          }

          completeCallback();
        }
      }));

    return this;
 
  };
 
})(jQuery);
