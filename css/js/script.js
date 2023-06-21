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
      markers: false,
      toggleClass: "red",
    }
  });
});

	$(document).ready(function(){

		var controller = new ScrollMagic.Controller();
	
		var pinScene01 = new ScrollMagic.Scene({
			triggerElement: '#slide01',
			triggerHook: 0,
			duration: 1000
		})
		.setPin('#slide01 .pin-wrapper')
		.addTo(controller)
		;
	
		// Scene 2 - pin the third section
		var pinScene02 = new ScrollMagic.Scene({
			triggerElement: '#slide01',
			triggerHook: 0,
			duration: 2000
		})
		.setPin('#slide02 .pin-wrapper')
		.addTo(controller)
		;
	
	  var pinScene03 = new ScrollMagic.Scene({
			triggerElement: '#slide01',
			triggerHook: 0,
			duration: 3000
		})
		.setPin('#slide03 .pin-wrapper')
		.addTo(controller)
		;
	
});


