$(window).load(function() {
  $("body").removeClass("loading");
});


$( ".navbar-close").click(function() {
  $("body").toggleClass("menu-open");
});

$(".main-container").click(function (){
  if($('body').hasClass('menu-open')){
    $('body').removeClass('menu-open');
  }
});
$(".navbar-item").click(function (){
  if($('body').hasClass('menu-open')){
    $('body').removeClass('menu-open');
  }
});


$( ".discography-side-link.vieja").click(function() {
  $("body").addClass("vieja");
});
$( ".discography-close").click(function() {
  $("body").removeClass("vieja");
});
$( ".discography-side-link.forastero").click(function() {
  $("body").addClass("forastero");
});
$( ".discography-close").click(function() {
  $("body").removeClass("forastero");
});
$( ".discography-side-link.faraway").click(function() {
  $("body").addClass("faraway");
});
$( ".discography-close").click(function() {
  $("body").removeClass("faraway");
});

$(document).ready(function() {
  var $docEl = $('html, body'),
    $wrap = $('#music'),
    scrollTop;

  $('.discography-side-link').click(function(e) {
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
      }, 200);
    }
    setTimeout(function(){
      $docEl.css({
        height: "100%",
        overflow: "hidden"
      });
    }, 200);
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




$(window).scroll(function() {
    $('.scroll').filter(checkVisible).addClass('active');
    // select divs then filter them based on view
}).scroll();

function checkVisible() {
    var elm = this;
    var eval = eval || "visible";
    var vpH = $(window).height(), // Viewport Height
        st = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    // if (eval == "above") return ((y < (vpH + st))); you don't really need this
}

new LazyLoad();
