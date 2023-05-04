import Swiper from '../../vendor/swiper';

const initSwiper = () => {

  new Swiper('.swiper', {// eslint-disable-line
    direction: 'horizontal',
    loop: true,

    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },

    maxBackfaceHiddenSlides: 0,
    breakpoints: {

      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },

      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },

      // when window width is >= 1200px
      // 1200: {
      //   slidesPerView: 4,
      //   slidesPerGroup: 4,
      //   spaceBetween: 30,
      // },

      // when window width is >= 1250px
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 40,
      },
    },
  });
};

export {initSwiper};
