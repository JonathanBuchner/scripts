
$(document).ready(
  () => {
    let cube = $('#cube');
    let front = $('#cube .front')[0];
    let back = $('#cube .back')[0];
    let left = $('#cube .left')[0];
    let right = $('#cube .right')[0];

    let moveCube = 'move-cube';

    let videos = [front, back, left, right];
    let videoReady = 0;

    videos.forEach(
      (video) => {
        video.addEventListener('canplay',
         function() {
            this.play();            
          }
        );
      }
    );

    cube.addClass(moveCube);
  }
);
