function animateOnScroll(canvasID, videoInfo) {
  const canvas = document.getElementById(canvasID);
  const canvasContext = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth / 1.7;
  
  var isMobile = window.navigator.userAgent.match(/Mobile|iPhone|iPod|BlackBerry|Windows Phone|iPad|Android/i);

// If the user is on a mobile device, set the canvas width to the window width
  if(isMobile) {
    canvas.width = 1500;
  }

  canvas.style.position = "fixed";

  for (let i = 0; i <= videoInfo.totalFrames; i++) {
    const img = new Image();
    img.src = videoInfo.currentImage(i);
    videoInfo.images.push(img);
  }

  gsap.to(videoInfo, {
    currentFrame: videoInfo.totalFrames,
    snap: "currentFrame",
    ease: "none",
    scrollTrigger: {
      trigger: canvas,
      start: "top",
      end: `bottom+=${videoInfo.totalFrames * videoInfo.totalTime}`,
      scrub: 0.2,
      markers: false,
      pinSpacing: false,
    },
    onUpdate: render,
  });

  videoInfo.images[0].onload = () => {
    canvasContext.drawImage(videoInfo.images[0], 0, 0);
  };

  function render() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    canvasContext.drawImage(videoInfo.images[videoInfo.currentFrame], 0, 0); // Draw the new frame
  }
}
