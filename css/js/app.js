gsap.registerPlugin(ScrollTrigger);

const demoVideo1Info = {
  totalFrames: 150,
  totalTime: 15,
  images: [],
  currentFrame: 0,
  currentImage: (index) =>
    `./dna/dna${index.toString().padStart(4, "0")}.jpg`,
};
animateOnScroll("demo_video1", demoVideo1Info);