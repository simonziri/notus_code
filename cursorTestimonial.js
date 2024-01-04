// ALREADY EMBEDDED

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
