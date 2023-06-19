ScrollReveal().reveal('.headline');

var slideUp = {
  origin: 'bottom',
  scale: 1.1,
  easing: 'ease-in',
  duration: 500,
  delay: 250
};


ScrollReveal().reveal('.slide-up', slideUp);


gsap.registerPlugin(ScrollTrigger);

const scrubTextElements = document.querySelectorAll(".scrubText");

scrubTextElements.forEach((element) => {
  gsap.to(element, {
    y: 30,
    scale: 0.85,
    opacity: 1,
    scrollTrigger: {
      trigger: element,
      start: "top 70%",
      end: `+=${element.offsetHeight + 80}`,
      scrub: 0.5,
      toggleActions: "restart none none none",
      markers: true,
      toggleClass: "red",
    }
  });
});
