// PROCESS ANIMATION

let processTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".process_section-track",
    start: "top 90vh",
    end: "bottom bottom",
    scrub: true,
    markers: false,
  },
});

let trackMovement =
  document.getElementById("process_steps").offsetHeight -
  document.getElementById("process_track").offsetHeight;

processTL.to(
  "[process-fade-out-bg]",
  {
    backgroundColor: "#f7f4f2",
  },
  0
);

processTL.to(
  ".process_track",
  {
    y: trackMovement,
    ease: "power2.easeInOut",
  },
  "<25%"
);

processTL.to(
  "[process-fade-out]",
  {
    opacity: 0.3,
  },
  0
);

processTL.to(
  "[process-grow]",
  {
    transform: "scale(1.2)",
  },
  0
);
