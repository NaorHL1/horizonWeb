function animateOnScroll(canvasID, videoInfo) {
  const canvas = document.getElementById(canvasID);
  const canvasContext = canvas.getContext("2d");
  
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth / 1.7;
  
  var isMobile = window.navigator.userAgent.match(/Mobile|iPhone|iPod|BlackBerry|Windows Phone|iPad|Android/i);

  // If the user is on a mobile device, set the canvas width to a smaller value
  if (isMobile) {
    canvas.width = 800;
  }
  
  canvas.style.position = "fixed";

  // Preload all images
  const imagePromises = [];
  for (let i = 0; i <= videoInfo.totalFrames; i++) {
    const img = new Image();
    const imageLoadPromise = new Promise((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject();
    });
    img.src = videoInfo.currentImage(i);
    videoInfo.images.push(img);
    imagePromises.push(imageLoadPromise);
  }

  // Wait for all images to load before starting the animation
  Promise.all(imagePromises)
    .then(() => {
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
    })
    .catch((error) => {
      console.error("Failed to load images:", error);
    });

  function render() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.drawImage(videoInfo.images[videoInfo.currentFrame], 0, 0);
  }
}
