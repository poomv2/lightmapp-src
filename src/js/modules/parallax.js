import AOS from 'aos';
import $ from 'jquery';

AOS.init();

const planet = document.querySelector('#planet');

function setTranslate(xPos, yPos, el) {
  el.style.transform = `translate3d(${xPos}, ${yPos}px, 0)`;
}

window.addEventListener('DOMContentLoaded', scrollLoop, false);

let xScrollPosition;
let yScrollPosition;

function scrollLoop() {
  xScrollPosition = window.scrollX;
  yScrollPosition = window.scrollY;

  setTranslate(0, yScrollPosition * -0.7, planet);
  setTranslate(0, yScrollPosition * -1.2, sphere);
  setTranslate(0, yScrollPosition * -1.5, sphere2);

  // setTranslate(0, yScrollPosition * -0.2, checkers);

  requestAnimationFrame(scrollLoop);
}

$('#joinBeta_btn').on('click',
  () => {
    $('html, body').animate({
      scrollTop: $('.signup').offset().top + 130,
    }, 500);
  });
