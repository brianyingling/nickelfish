$(document).ready(function() {
    var curtain   = new Curtain('#curtain');
    var slideShow = new Slideshow(curtain);

    // add event handlers
    $('li').click(function(e) {
      $(this).parent().parent().find('li').removeClass('highlight');
      if(this !== $('li:last')[0]) {
        e.preventDefault();
        $(this).addClass('highlight');
      }
    });
});