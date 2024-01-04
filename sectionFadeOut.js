//ALREADY EMBEDDED

// Parallax subtle slide up
document.querySelectorAll("[plx-slide]").forEach(function () {
  gsap.to(this.document.querySelector("[plx-slide]"), {
    scrollTrigger: {
      trigger: this,
      start: "top 80px",
      scrub: true,
      markers: false,
      // toggleActions: "restart none none reverse",
    },

    y: -100,
    opacity: 0,
  });
});
