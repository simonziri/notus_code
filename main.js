

//ALREADY EMBEDDED

const testimonialSlider = new Swiper(".swiper.is-testimonials", {
    slidesPerView: "auto",
    keyboard: true,
    speed: 700,
    spaceBetween: "1rem",
    grabCursor: true,
  });

// LENIS SMOOTH SCROLL

let lenis;
if (Webflow.env("editor") === undefined) {
  lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 1,
    gestureOrientation: "vertical",
    normalizeWheel: false,
    smoothTouch: false,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}
$("[data-lenis-start]").on("click", function () {
  lenis.start();
});
$("[data-lenis-stop]").on("click", function () {
  lenis.stop();
});
$("[data-lenis-toggle]").on("click", function () {
  $(this).toggleClass("stop-scroll");
  if ($(this).hasClass("stop-scroll")) {
    lenis.stop();
  } else {
    lenis.start();
  }
});

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

  // CURSOR TESTIMONIAL

document.addEventListener("DOMContentLoaded", () => {
    /* //SET SWIPER
      const swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: false,
        //grabCursor: true,
        spaceBetween: 40,
        centeredSlides: false,
        slidesPerView: "auto"
      });*/
  
    //SET CUSTOM CURSOR
    const slider = document.querySelector(".swiper");
    const cursor = document.querySelector(".cursor_move");
    const cursorComponent = cursor.querySelector(".cursor_component");
  
    function moveCursor(event) {
      cursor.style.transform = `translate3d(calc(${event.clientX}px - 50vw), calc(${event.clientY}px - 50vh), 0)`;
    }
  
    window.onmousemove = (event) => {
      moveCursor(event);
    };
  
    window.onpointermove = (event) => {
      moveCursor(event);
    };
  
    //ADJUST CUSTOM CURSOR FOR SLIDER
    slider.onmouseenter = () => {
      cursorComponent.classList.add("is-visible");
    };
  
    slider.onmouseleave = () => {
      cursorComponent.classList.remove("is-visible");
    };
  
    slider.onpointerdown = () => {
      cursorComponent.classList.add("is-active");
    };
  
    slider.onpointerup = () => {
      cursorComponent.classList.remove("is-active");
    };
  });
  