import Swiper from '../../vendor/swiper';

const initSwiper = () => {

  new Swiper('.swiper', {// eslint-disable-line
    direction: 'horizontal',
    loop: true,

    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },

    slidesPerView: 4,
    spaceBetween: 40,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
        initialSlide: 2,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 2,
      },

      954: {
        slidesPerView: 3,
        spaceBetween: 30,
        initialSlide: 0,
      },

      1250: {
        slidesPerView: 4,
        spaceBetween: 40,
        initialSlide: 0,
      },
    },
  });
};

export {initSwiper};
