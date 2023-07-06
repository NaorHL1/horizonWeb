const mobileNav = () => {
	const headerBtn = document.querySelector('.header__bars');
	const mobileNav = document.querySelector('.mobile-nav');
	const mobileLinks = document.querySelectorAll('.mobile-nav__link');
  
	// State
	let isMobileNavOpen = false;
  
	headerBtn.addEventListener('click', () => {
	  isMobileNavOpen = !isMobileNavOpen;
	  if (isMobileNavOpen) {
		mobileNav.style.display = 'flex';
		document.body.style.overflowY = 'hidden';
		document.body.style.position = 'fixed';
	  } else {
		mobileNav.style.display = 'none';
		document.body.style.overflowY = 'auto';
		document.body.style.position = 'static';
	  }
	});
  
	mobileLinks.forEach(link => {
	  link.addEventListener('click', () => {
		isMobileNavOpen = false;
		mobileNav.style.display = 'none';
		document.body.style.overflowY = 'auto';
	  });
	});
  };
  
mobileNav();


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

const art = document.querySelectorAll("#art");

  
let tl = gsap.timeline({
	scrollTrigger: {
	  trigger: art,
	  start: "top 20%",
	  end: "+=150%",
	  scrub: 1,
	  markers: false,
	}
  });
  
//   tl.to(art, {
// 	y: -300,
// 	x: 200,
// 	rotation: -20,
// 	scale: 2.5,
// 	opacity: 0.7,
// 	ease: "power1.inOut",
// 	duration: 0.3 // this is the proportion of the scroll distance this animation will take, adjust if needed
//   })

  
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
      scrub: 0.55,
      toggleActions: "restart none none none",
      markers: false,
      toggleClass: "red",
    }
  });
});



const maskText = document.querySelectorAll(".maskText");

  gsap.to(maskText, {
    y: -120,
    opacity: 1,
    scrollTrigger: {
      trigger: maskText,
      start: "top 70%",
      end: `+=${maskText.offsetHeight + 80}`,
      scrub: 0.5,
      toggleActions: "restart none none none",
      markers: false,
      toggleClass: "red",
    }
  });

	$(document).ready(function(){

		var controller = new ScrollMagic.Controller();
	
		var pinScene01 = new ScrollMagic.Scene({
			triggerElement: '#slide01',
			triggerHook: 0,
			duration: 2000
		})
		.setPin('#slide01 .pin-wrapper')
		.addTo(controller)
		;
	
		// Scene 2 - pin the third section
		var pinScene02 = new ScrollMagic.Scene({
			triggerElement: '#slide01',
			triggerHook: 0,
			duration: 4000
		})
		.setPin('#slide02 .pin-wrapper')
		.addTo(controller)
		;
	
	  var pinScene03 = new ScrollMagic.Scene({
			triggerElement: '#slide01',
			triggerHook: 0,
			duration: 6000
		})
		.setPin('#slide03 .pin-wrapper')
		.addTo(controller)
		;
	
});




