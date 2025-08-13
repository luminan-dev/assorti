const swiper = new Swiper('.info-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: { // telefon
      slidesPerView: 1,
      spaceBetween: 20,

    },
    768: { // planshet va kattaroq ekranlar
      slidesPerView: 1,
      spaceBetween: 30,
    }
  }
});

