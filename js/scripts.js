

$(document).ready(
  () => {
    //Dom elements
    let loadingVideo = $('#loading-video');
    let stage = $('#stage');
    let cube = $('#cube');
    let shadow = $('#shadow');
    let front = $('#cube .front')[0];
    let frontFace = $('#cube .front');
    let back = $('#cube .back')[0];
    let backFace = $('#cube .back');
    let left = $('#cube .left')[0];
    let leftFace = $('#cube .left');
    let right = $('#cube .right')[0];
    let rightFace = $('#cube .right');
    let title = $('h1');

    //Css style classes
    let green = 'green';
    let hide = 'hide';
    let moveCube = 'move-cube-down';
    let moveCubeShowFront = 'move-cube-show-front';
    let moveCubeShowBack = 'move-cube-show-back';
    let moveCubeShowLeft = 'move-cube-show-left';
    let moveCubeShowRight = 'move-cube-show-right';
    let removeOpacity = 'no-opacity';
    let moveShadow = 'move-shadow'
    let moveTitle = 'move-title';


    let videos = [front, back, left, right];
    let videoReady = 0;

    //Hide stage initially until videos are ready to playVideos
    loadingVideo.addClass(green);
    stage.hide();

    //Add classes to start css animations.
    function startAnimation() {
      stage.show();
      loadingVideo.addClass(hide);
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
          //Even though the browser is told to play the videos, it takes at least a seconds for the browser to start 4 videos.
          setTimeout(
            () => {
              startAnimation();
              console.log('Animation started');
            }, 2000
          );

        }
    }

    frontFace.click(
      () => {
        cube.addClass(moveCubeShowFront);
        frontFace.addClass(removeOpacity);

        backFace.addClass(hide);
        leftFace.addClass(hide);
        rightFace.addClass(hide);
        shadow.addClass(hide);
      }
    );

    backFace.click(
      () => {
        cube.addClass(moveCubeShowBack);
        backFace.addClass(removeOpacity);

        frontFace.addClass(hide);
        leftFace.addClass(hide);
        rightFace.addClass(hide);
        shadow.addClass(hide);
      }
    );

    leftFace.click(
      () => {
        cube.addClass(moveCubeShowLeft);
        leftFace.addClass(removeOpacity);

        frontFace.addClass(hide);
        backFace.addClass(hide);
        rightFace.addClass(hide);
        shadow.addClass(hide);
      }
    );

    rightFace.click(
      () => {
        cube.addClass(moveCubeShowRight);
        rightFace.addClass(removeOpacity);

        frontFace.addClass(hide);
        backFace.addClass(hide);
        leftFace.addClass(hide);
        shadow.addClass(hide);
      }
    );

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
