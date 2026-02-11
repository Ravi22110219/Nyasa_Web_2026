document.addEventListener('DOMContentLoaded', function () {
  // Initialize Swiper
  var testimonialSwiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto', // Automatically fit based on CSS width
    coverflowEffect: {
      rotate: 0, // No rotation for a cleaner modern look
      stretch: 0,
      depth: 150, // Depth of the 3D effect
      modifier: 2.5, // Intensity of the effect
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true, // Native Swiper feature to pause on hover
    },
    // Breakpoints aren't strictly needed with slidesPerView: 'auto'
    // and fixed CSS width, but this adds safety:
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
    },
  })

  // Extra logic to ensure smooth interaction with iframes
  const swiperContainer = document.querySelector('.mySwiper')

  if (swiperContainer) {
    swiperContainer.addEventListener('mouseenter', () => {
      testimonialSwiper.autoplay.stop()
    })

    swiperContainer.addEventListener('mouseleave', () => {
      testimonialSwiper.autoplay.start()
    })
  }
})
