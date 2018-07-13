 (function() {
  var video = document.createElement('video');
  video.width = 400;
  video.height = 300;
  video.autoplay = true;
  video.controls = true;
  var container = document.querySelector('.booth'),
    butt = document.querySelector('button'),
    vendorUrl = window.URL || window.webkitURL;

  navigator.getMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;


  function requestCam() {
      navigator.getMedia({
        video: true,
        audio: true
      }, function(stream) {
        var videoEl = video.cloneNode(true);
        container.appendChild(videoEl);
        videoEl.onloadedmetadata = function() {
          this.play();
        };
        videoEl.src = vendorUrl.createObjectURL(stream);
      }, function(error) {
        console.log(error);
      });
    }
  butt.addEventListener('click', requestCam, false);
})();