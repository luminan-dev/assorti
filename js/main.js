const swiper = new Swiper('.info-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.info-pagination',
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
var swiper2 = new Swiper('.swiper-container', {
  slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.custom-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            let currentFormatted = current < 10 ? '0' + current : current;
            let totalFormatted = total < 10 ? '0' + total : total;
            return `${currentFormatted} / ${totalFormatted}`;
        }
    }
});

