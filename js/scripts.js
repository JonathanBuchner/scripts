

$(document).ready(
  () => {
    //Dom elements
    let stage = $('#stage');
    let cube = $('#cube');
    let shadow = $('#shadow');
    let front = $('#cube .front')[0];
    let back = $('#cube .back')[0];
    let left = $('#cube .left')[0];
    let right = $('#cube .right')[0];
    let title = $('h1');

    //Css styles
    let moveCube = 'move-cube';
    let moveShadow = 'move-shadow'
    let moveTitle = 'move-title';

    let videos = [front, back, left, right];
    let videoReady = 0;

    //Hide stage initially until videos are ready to playVideos
    stage.hide();

    //Add classes to start css animations.
    function startAnimation() {
      stage.show();
      cube.addClass(moveCube);
      shadow.addClass(moveShadow);
      title.addClass(moveTitle);
    }

    //If all videos are ready to play, play the vidoes and call startAnimation
    function checkVideosReadyToPlay() {
        if (videos.length === videoReady) {
          //Play each video
          videos.forEach(
            (video) => {
              video.play();
            }
          );
          //Even though the browser is told to play the videos, it takes at least a seconds.
          setTimeout(
            () => {
              startAnimation();
            }, 1000
          );

        }
    }

    //Add event listerns to count and wait until videos are ready.
    videos.forEach(
      (video) => {
        video.addEventListener('canplay',
         () => {
            videoReady++;
            checkVideosReadyToPlay();
          }
        );
      }
    );


  }
);
