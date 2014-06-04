function Curtain(cssSelector) {
  var self = this;
  this.cssSelector = cssSelector;
}

Curtain.prototype = {
  rise: function() {
    $(this.cssSelector).animate({height: 20}, 'slow');
  },
  drop: function(callback) {
    $(this.cssSelector).animate({height:561}, 'slow', 'easeInOutBack', function() {
      callback();
    });
  }
};
