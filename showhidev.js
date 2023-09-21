require(['jquery-noconflict'], function($) {
 //Ensure MooTools is where it must be
  Window.implement('$', function(el, nc){
    return document.id(el, nc, this.document);
  });

  var $ = window.jQuery;
  
const videoContainers = document.querySelectorAll('.video-container');
videoContainers.forEach((videoContainer) => {

  const video = videoContainer.querySelector('video');
  const showHideVideo = videoContainer.querySelector('.show-hide-video');

  showHideVideo.addEventListener('click', () => {
    if (video.style.display === 'none') {
      video.style.display = 'block';
      video.play();
      showHideVideo.innerHTML = 'Hide Video';
    } else {
      video.style.display = 'none';
      video.pause();
      showHideVideo.innerHTML = 'Show Video';
    }
  });
});
}); 