$(document).ready(function() {
  var $docEl = $('html, body'),
    $wrap = $('#music'),
    scrollTop;

  $('.test-container.vieja').click(function(e) {
    overlayOpen();
    e.preventDefault();
  });

  $('.discography-close').click(function(e) {
    overlayClose();
    e.preventDefault();
  });

  var overlayClose = function() {
    $.unlockBody();
    $('body').removeClass('overlay-open');
  }
  var overlayOpen = function() {
    $('body').addClass('overlay-open');
    $.lockBody();
  }

  $.lockBody = function() {
    if(window.pageYOffset) {
      scrollTop = window.pageYOffset;

      setTimeout(function(){
        $wrap.css({
          top: - (scrollTop)
        });
      }, 600);
    }
    setTimeout(function(){
      $docEl.css({
        height: "100%",
        overflow: "hidden"
      });
    }, 600);
  }

  $.unlockBody = function() {
    $docEl.css({
      height: "",
      overflow: ""
    });

    $wrap.css({
      top: ''
    });

    window.scrollTo(0, scrollTop);
    window.setTimeout(function () {
      scrollTop = null;
    }, 1000);

  }
});
