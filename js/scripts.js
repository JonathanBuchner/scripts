
$(document).ready(
  () => {
    let cube = $('#cube');
    let shadow = $('#shadow');
    let front = $('#cube .front')[0];
    let back = $('#cube .back')[0];
    let left = $('#cube .left')[0];
    let right = $('#cube .right')[0];
    let title = $('h1');

    let moveCube = 'move-cube';
    let moveShadow = 'move-shadow'
    let moveTitle = 'move-title';

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
    shadow.addClass(moveShadow);
    title.addClass(moveTitle);
  }
);
