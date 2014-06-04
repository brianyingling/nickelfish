// Slideshow takes in an array of names
// and builds slides based on them.

function Slideshow(curtain) {
  var self      = this;
  this.index    = 0;
  this.slides   = [];
  this.curtain  = curtain;

  Loader.get('slideshow.json', function(resp) {
    this.slides = resp.projects;

    // load the first image and text into the DOM
    $('#slide-image').attr('src',this.slides[0].image);
    $('#slide-text').html(this.slides[self.index].name);
    self.animate();
  });
}

Slideshow.prototype = {
  // responsible for the timing of displaying the images
  animate: function() {
    var self, slides, timer;
    self = this;

    // show every 5 secs
    timer = setInterval(function() {
      self.index++;
      self.curtain.drop(function() {

        // reset index counter
        if (self.index === this.slides.length)
          self.index = 0;

        // load new image, text
        $('#slide-image').attr('src',this.slides[self.index].image);
        $('#slide-text').html(this.slides[self.index].name);
        self.curtain.rise();
      });

    }, 5000);
  }
};




