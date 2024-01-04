// Cursor loop
let loopTL = gsap.timeline({ repeat: -1, yoyo: true });

loopTL.to(".component_cursor", {
  opacity: 0.3,
  duration: 1.25,
  ease: "power1.inOut",
});

// Srollanimation

let introtext = document.getElementById("intro-text").innerHTML;

let scrollTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_intro",
    start: "top center",
    end: "bottom 65%",
    scrub: true,
    markers: false,
  },
});

scrollTl.to("#intro-text", {
  duration: 5,
  text: {
    value: introtext,
    oldClass: "intro_text is-unwritten",
    newClass: "intro_text",
  },
  ease: "none",
});
