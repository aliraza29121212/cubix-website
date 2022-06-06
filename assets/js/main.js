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

// On Scroll Function
function navMenu() {
  let navBar = document.querySelector(".navbar-sticky");
  let scrollTopButton = document.querySelector("#scrollUp");
  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if (scroll >= 120) {
      navBar.classList.add("navbar-sticky-moved-up");
    } else {
      navBar.classList.remove("navbar-sticky-moved-up");
    }
    // apply transition
    if (scroll >= 250) {
      navBar.classList.add("navbar-sticky-transitioned");
      // scrollTopButton.classList.add('scrollActive');
    } else {
      navBar.classList.remove("navbar-sticky-transitioned");
      // scrollTopButton.classList.remove('scrollActive');
    }
    // sticky on
    if (scroll >= 200) {
      navBar.classList.add("navbar-sticky-on");
    } else {
      navBar.classList.remove("navbar-sticky-on");
    }
  };
}
navMenu();

navMenu();

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
  counter("count2", 0, 250, 3000);
  counter("count3", 950, 1200, 5000);
  counter("count4", 0, 100, 2000);
  counter("count5", 0, 50, 2500);
  counter("count6", 0, 100, 2200);
});
