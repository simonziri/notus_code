// Cursor loop
let loopTL = gsap.timeline({ repeat: -1, yoyo: true });

loopTL.to(".component_cursor", {
  opacity: 0.3,
  duration: 1.25,
  ease: "power1.inOut",
});

// Slide in

gsap.from("[slide-in-st]", {
  scrollTrigger: {
    trigger: "[slide-in-st]",
    // toggleActions: "restart none none reverse",
  },

  stagger: 0.2,
  y: 20,
  opacity: 0,
  duration: 1.5,
  ease: "expo.out",
});

// Slide in hero background

gsap.from("[slide-in-bg]", {
  scrollTrigger: {
    trigger: "[slide-in-bg]",
    // toggleActions: "restart none none reverse",
  },

  y: 20,
  opacity: 0,
  duration: 4,
  ease: "expo.out",
});
