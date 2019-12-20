var mediaSectionElement = $('section.media');
var video = mediaSectionElement.find('video')[0];
//You can play with this number
var videoSectionThreshold = mediaSectionElement.position().top; 

$(document).on('scroll', onScroll);

function onScroll() {
  var scrollTop = $(this).scrollTop();
  if( scrollTop >= videoSectionThreshold && scrollTop < (videoSectionThreshold + mediaSectionElement.height())){
    video.play();
  } else {
    video.pause();
  }
}
