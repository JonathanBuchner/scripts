

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
    let show = 'show';
    let moveCube = 'move-cube-down';
    let moveCubeShowFront = 'move-cube-show-front';
    let moveCubeShowBack = 'move-cube-show-back';
    let moveCubeShowLeft = 'move-cube-show-left';
    let moveCubeShowRight = 'move-cube-show-right';
    let removeOpacity = 'no-opacity';
    let moveShadow = 'move-shadow'
    let moveTitle = 'move-title';
    let repositionBottom = 'reposition-bottom';


    let videos = [front, back, left, right];
    let videoReady = 0;

    //Hide stage initially until videos are ready to playVideos
    loadingVideo.addClass(green);
    stage.hide();

    //Add and remove classes for start css animations.
    function startAnimation() {
      stage.show();
      loadingVideo.addClass(hide).removeClass(green); //Hides spinnger //Returns spinner back to blue
      $('#loading-spinner').removeClass('fa-spin');   //Stops spinner from spinning

      cube.addClass(moveCube);                        //Starts downward cube animation
      shadow.addClass(moveShadow);                    //Starts moving shadow up
      title.addClass(moveTitle);                      //Moves title up
    }

    //If all videos are ready to play, play the vidoes and call startAnimation
    function checkVideosReadyToPlay() {
        if (videos.length === videoReady) {
          //Play each video
          videos.forEach(
            (video) => {
              video.play();
              video.muted = true;
            }
          );
          //Even though the browser is told to play the videos, it takes at least a seconds for most browser to start 4 videos.
          setTimeout(
            () => {
              startAnimation();
              console.log('Animation started');
            }, 2000
          );

        }
    }

    //This repositions the video loading animiation, reusing it as a tool to reset the page.
    function repositionLoadingVideo() {
      loadingVideo.addClass(repositionBottom);
      loadingVideo.addClass(show);
    }

    function stopOtherVideosPlaySelected(chosenVideo) {
      videos.forEach(
        (video) => {
          video.pause();
        }
      );
      chosenVideo.play();
      chosenVideo.muted = false;
    }

    let hideAllElseExcept = (face) => {
      face.addClass(removeOpacity);
      if (face !== frontFace) frontFace.addClass(hide);
      if (face !== backFace) backFace.addClass(hide);
      if (face !== leftFace) leftFace.addClass(hide);
      if (face !== rightFace) rightFace.addClass(hide);
      shadow.addClass(hide);
      repositionLoadingVideo();
    }

    frontFace.click(
      () => {
        cube.addClass(moveCubeShowFront);
        stopOtherVideosPlaySelected(front);
        hideAllElseExcept(frontFace);
      }
    );

    backFace.click(
      () => {
        cube.addClass(moveCubeShowBack);
        stopOtherVideosPlaySelected(back);
        hideAllElseExcept(backFace);
      }
    );

    leftFace.click(
      () => {
        cube.addClass(moveCubeShowLeft);
        stopOtherVideosPlaySelected(left);
        hideAllElseExcept(leftFace);
      }
    );

    rightFace.click(
      () => {
        cube.addClass(moveCubeShowRight);
        stopOtherVideosPlaySelected(right);
        hideAllElseExcept(rightFace);
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

    loadingVideo.mouseover(
      () => {
        $('h2.replay').addClass('hover');
      }
    )

    loadingVideo.mouseout(
      () => {
        $('h2.replay').removeClass('hover');
      }
    )

    loadingVideo.click(
      () => {
          location.reload();
      }
    );
  }
);
