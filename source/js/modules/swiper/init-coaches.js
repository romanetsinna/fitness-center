import {Swiper} from './vendor/swiper';

// eslint-disable-next-line no-undef
const initSwiper = new Swiper('.swiper', {
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

initSwiper();

//   if (swiper) {
//     // eslint-disable-next-line no-new
//     new Swiper('.swiper', {
//       direction: 'horizontal',
//       loop: true,

//       navigation: {
//         prevEl: '.swiper-button-prev',
//         nextEl: '.swiper-button-next',
//       },

//       slidesPerView: 4,
//       spaceBetween: 40,

//       breakpoints: {
//         320: {
//           slidesPerView: 1,
//           spaceBetween: 30,
//           initialSlide: 2,
//         },

//         768: {
//           slidesPerView: 2,
//           spaceBetween: 30,
//           initialSlide: 2,
//         },

//         954: {
//           slidesPerView: 3,
//           spaceBetween: 30,
//           initialSlide: 0,
//         },

//         1250: {
//           slidesPerView: 4,
//           spaceBetween: 40,
//           initialSlide: 0,
//         },
//       },

//     });
//   }
// };

export {initSwiper};
