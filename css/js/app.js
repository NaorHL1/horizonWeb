gsap.registerPlugin(ScrollTrigger);

const demoVideo1Info = {
  totalFrames: 121,
  totalTime: 19,
  images: [],
  currentFrame: 0,
  currentImage: (index) =>
    `./dna/dna${index.toString().padStart(3, "0")}.png`,
};

animateOnScroll("demo_video1", demoVideo1Info);