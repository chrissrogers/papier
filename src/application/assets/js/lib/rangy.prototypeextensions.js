/*
 prototype extensions, for convenience
*/

var _ = require('underscore');

rangy.init();

rangy.rangePrototype.insertNodeAtEnd = function (node) {
  var range = this.cloneRange();
  
  range.collapse(false);
  range.insertNode(node);
  range.detach();
  
  this.setEndAfter(node);
};

rangy.rangePrototype.isContianedBy = function (options) {

  var commonAncestor = $(this.commonAncestorContainer),
      containerNodes,
      matchedNodes;

  options = _(options).defaults({
    tagNames: [],
    cssProperties: {},
    until: ''
  });

  // containers are the common ancestor and all parents until we reach a stopping point
  containerNodes = commonAncestor.add(commonAncestor.parentsUntil(options.until));

  // look for nodes in containers that match either tag names or node css props
  matchedNodes = _.filter(containerNodes, function (node) {

    node = $(node);

    var matchesTag = _.indexOf(options.tagNames, node.prop('tagName')) > -1;

    return matchesTag || _.find(options.cssProperties, function (value, property) {
      return node.css(property) === value;
    });

  });

  return !_.isEmpty(matchedNodes);

};
