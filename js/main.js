const swiper = new Swiper('.swiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        767: {
          slidesPerView: 1,
          spaceBetween: 20,
          allowTouchMove: true,
        }
      }
    });