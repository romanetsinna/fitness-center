import Swiper from '../../vendor/swiper';

const initCoachesSwiper = () => {

  new Swiper('#coaches-slider', {// eslint-disable-line
    direction: 'horizontal',
    loop: true,

    navigation: {
      prevEl: '.coaches__button-prev',
      nextEl: '.coaches__button-next',
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

      // when window width is >= 1250px
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 40,
      },
    },
  });
};

const initReviewsSwiper = () => {

  new Swiper('#reviews-slider', {// eslint-disable-line
    direction: 'horizontal',
    navigation: {
      prevEl: '.reviews__button-prev',
      nextEl: '.reviews__button-next',
    },
    slidesPerView: 1,
  });
};

export {initCoachesSwiper, initReviewsSwiper};
