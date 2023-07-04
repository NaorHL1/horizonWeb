gsap.registerPlugin(ScrollTrigger);

const demoVideo1Info = {
  totalFrames: 117,
  totalTime: 19.8,
  images: [],
  currentFrame: 0,
  currentImage: (index) =>
    `./dna/dna${index.toString().padStart(3, "0")}.png`,
};

animateOnScroll("demo_video1", demoVideo1Info);