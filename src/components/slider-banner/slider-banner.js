import { Navigation, Pagination } from 'swiper';
import createSlider from '../../js/partials/slider';

const slidersEl = document.querySelectorAll('.js-slider-banner');
if (slidersEl[0]) {
  slidersEl.forEach((slider) => {
    createSlider(slider, {
      modules: [Navigation, Pagination],
      pagination: {
        el: '.js-slider-pagination',
      },
      navigation: {
        prevEl: '.js-slider-prev',
        nextEl: '.js-slider-next',
      },
      loop: true,
      spaceBetween: 0,
      grabCursor: true,
      speed: 500,
    });
  });
}
