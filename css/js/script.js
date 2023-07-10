var textElement = document.getElementById('navTrigger');
var stopElement = document.getElementById('navStop');
var navContainer = document.querySelector('.Nav_Container');

window.addEventListener('scroll', function() {
  var textRect = textElement.getBoundingClientRect();
  var elementRect = stopElement.getBoundingClientRect();
  var triggerOffset = 40;
  var stopOffset = 120;
    
  if (window.scrollY > elementRect.bottom + stopOffset) {
    navContainer.classList.remove('active');
    navContainer.classList.add('reverse');
  } else {
    // Check if the top of the text element is visible
    if (textRect.top <= triggerOffset) {
      navContainer.classList.add('active');
      navContainer.classList.remove('reverse');
    } else {
      navContainer.classList.remove('active');
      navContainer.classList.add('reverse');
    }
  }
});

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




const elements = document.querySelectorAll('.animate-fadeIn');

// loop through each element
elements.forEach(function(element) {
  // listen for the 'animationend' event on each element
  element.addEventListener('animationend', function() {
    // remove the class from the current element
    this.classList.remove('animate-fadeIn');
  });
});

gsap.registerPlugin(ScrollTrigger);

const scrollFadeElements = document.querySelectorAll(".scrollFade");

scrollFadeElements.forEach((element) => {
	gsap.fromTo(element, {
        opacity: 1,
    }, {
        opacity: 0,
        scrollTrigger: {
            trigger: element,
            start: "top-=100 top",
            end: `+=${element.offsetHeight}`,
            scrub: true,
            toggleActions: "restart none none none",
            markers: false,
        }
    });
  });

const scrubTextElements = document.querySelectorAll(".scrubText");

scrubTextElements.forEach((element) => {
	gsap.fromTo(element,
	  {opacity: 0},
	  { 
		y: 30,
		scale: 0.85,
		opacity: 1,
		scrollTrigger: {
		  trigger: element,
		  start: "top 70%",
		  end: `+=${element.offsetHeight + 80}`,
		  scrub: true,
		  toggleActions: "restart none none none",
		  markers: false,
		  toggleClass: "red",
		}
	  }
	);
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




