// Home Slider

$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

// On Scroll Function

// function navMenu() {
//   let navBar = document.querySelector(".navbar-sticky");
//   let scrollTopButton = document.querySelector("#scrolllUp");

//   window.onscroll = function () {
//     var Scroll = document.documentElement.scrollTop;
//     if (scroll >= 120) {
//       navBar.classList.add("navbar-sticky-moved-up");
//     } else {
//       navBar.classList.remove("navbar-sticky-moved-up");
//     }

//     // Apply transition
//     if (scroll >= 250) {
//       navBar.classList.add("navbar-sticky-transitioned");
//       scrollTopButton.classList.add("scrollActive");
//     } else {
//       navBar.classList.remove("navbar-sticky-transitioned");
//       scrollTopButton.classList.remove("scrollActive");
//     }

//     // Sticky on
//     if (scroll >= 500) {
//       navBar.classList.add("navbar-sticky-on");
//     } else {
//       navBar.classList.remove("navbar-sticky-on");
//     }
//   };
// }

// navMenu();

// counter design

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 12, 2000);
  counter("count2", 100, 250, 3000);
  counter("count3", 0, 1200, 4000);
  counter("count4", 0, 100, 2000);
  counter("count5", 0, 50, 2500);
  counter("count6", 0, 100, 2200);
});
