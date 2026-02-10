// home.js

document.addEventListener('DOMContentLoaded', function () {
  // Initialize Hero Infinite Slider
  const heroSlider = document.querySelector('.hero-slider')
  if (heroSlider) {
    initializeHeroSlider()
  }

  // Initialize Animated Stats Counter
  const statCards = document.querySelectorAll('.stat-card')
  if (statCards.length > 0) {
    initializeAnimatedStats()
  }

  // Initialize Activities Carousel
  const activitiesContainer = document.querySelector(
    '.activities-scroll-container',
  )
  if (activitiesContainer) {
    initializeActivitiesCarousel()
  }

  // Initialize 3D Testimonial Slider
  const testimonialSlider = document.querySelector('.testimonial-slider')
  if (testimonialSlider) {
    initializeTestimonialSlider()
  }

  // Add scroll animations
  initializeScrollAnimations()
})

// Hero Slider Functions
function initializeHeroSlider() {
  const sliderTrack = document.querySelector('.slider-track')
  const slides = document.querySelectorAll('.slide')
  const dots = document.querySelectorAll('.dot')
  const prevBtn = document.querySelector('.prev-btn')
  const nextBtn = document.querySelector('.next-btn')

  let currentSlide = 0
  const totalSlides = slides.length
  let autoSlideInterval

  // Function to update slider
  function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentSlide * 25}%)`

    // Update active classes
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentSlide)
    })

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide)
    })
  }

  // Function for next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides
    updateSlider()
  }

  // Function for previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
    updateSlider()
  }

  // Start auto slide
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000)
  }

  // Stop auto slide
  function stopAutoSlide() {
    clearInterval(autoSlideInterval)
  }

  // Event Listeners
  nextBtn.addEventListener('click', () => {
    stopAutoSlide()
    nextSlide()
    startAutoSlide()
  })

  prevBtn.addEventListener('click', () => {
    stopAutoSlide()
    prevSlide()
    startAutoSlide()
  })

  // Dot click events
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopAutoSlide()
      currentSlide = index
      updateSlider()
      startAutoSlide()
    })
  })

  // Pause on hover
  sliderTrack.addEventListener('mouseenter', stopAutoSlide)
  sliderTrack.addEventListener('mouseleave', startAutoSlide)

  // Start auto sliding
  startAutoSlide()
}

// Animated Stats Counter
function initializeAnimatedStats() {
  const statCards = document.querySelectorAll('.stat-card')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const statNumber = entry.target.querySelector('.stat-number')
          if (statNumber) {
            animateCounter(statNumber)
          }
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px',
    },
  )

  statCards.forEach((card) => observer.observe(card))
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'))
  const duration = 2000 // 2 seconds
  const increment = target / (duration / 16) // 60fps
  let current = 0

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    element.textContent = Math.floor(current).toLocaleString()
  }, 16)
}

// Activities Carousel
function initializeActivitiesCarousel() {
  const track = document.querySelector('.activities-track')
  const leftBtn = document.querySelector('.left-btn')
  const rightBtn = document.querySelector('.right-btn')
  const activityCards = document.querySelectorAll('.activity-card')

  if (!track || !leftBtn || !rightBtn) return

  let position = 0
  const cardWidth = 320 // w-80 = 20rem = 320px
  const gap = 32 // gap-8 = 2rem = 32px
  const cardsPerView = Math.floor(window.innerWidth / (cardWidth + gap))
  const maxPosition = (activityCards.length - cardsPerView) * (cardWidth + gap)

  leftBtn.addEventListener('click', () => {
    position = Math.min(position + (cardWidth + gap), 0)
    track.style.transform = `translateX(${position}px)`
  })

  rightBtn.addEventListener('click', () => {
    position = Math.max(position - (cardWidth + gap), -maxPosition)
    track.style.transform = `translateX(${position}px)`
  })

  // Add mouse wheel support
  track.addEventListener('wheel', (e) => {
    e.preventDefault()
    if (e.deltaY > 0) {
      position = Math.max(position - (cardWidth + gap), -maxPosition)
    } else {
      position = Math.min(position + (cardWidth + gap), 0)
    }
    track.style.transform = `translateX(${position}px)`
  })
}

// 3D Testimonial Slider
function initializeTestimonialSlider() {
  const testimonialTrack = document.querySelector('.testimonial-track')
  const testimonialCards = document.querySelectorAll('.testimonial-card')
  const prevBtn = document.querySelector('.testimonial-btn.prev-btn')
  const nextBtn = document.querySelector('.testimonial-btn.next-btn')
  const dots = document.querySelectorAll('.testimonial-dot')

  if (!testimonialTrack || testimonialCards.length === 0) return

  let currentTestimonial = 0
  const totalTestimonials = testimonialCards.length
  let autoSlideInterval

  // Function to update testimonial slider
  function updateTestimonialSlider() {
    testimonialTrack.style.transform = `translateX(-${currentTestimonial * 100}%)`

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentTestimonial)
    })

    // Add 3D effect
    testimonialCards.forEach((card, index) => {
      const content = card.querySelector('.testimonial-content')
      if (index === currentTestimonial) {
        content.style.transform = 'perspective(1000px) rotateY(0deg) scale(1)'
        content.style.opacity = '1'
      } else {
        const direction = index > currentTestimonial ? 1 : -1
        content.style.transform = `perspective(1000px) rotateY(${direction * 30}deg) scale(0.9)`
        content.style.opacity = '0.6'
      }
    })
  }

  // Function for next testimonial
  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials
    updateTestimonialSlider()
  }

  // Function for previous testimonial
  function prevTestimonial() {
    currentTestimonial =
      (currentTestimonial - 1 + totalTestimonials) % totalTestimonials
    updateTestimonialSlider()
  }

  // Start auto slide
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextTestimonial, 4000)
  }

  // Stop auto slide
  function stopAutoSlide() {
    clearInterval(autoSlideInterval)
  }

  // Event Listeners
  nextBtn.addEventListener('click', () => {
    stopAutoSlide()
    nextTestimonial()
    startAutoSlide()
  })

  prevBtn.addEventListener('click', () => {
    stopAutoSlide()
    prevTestimonial()
    startAutoSlide()
  })

  // Dot click events
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopAutoSlide()
      currentTestimonial = index
      updateTestimonialSlider()
      startAutoSlide()
    })
  })

  // Pause on hover
  testimonialTrack.addEventListener('mouseenter', stopAutoSlide)
  testimonialTrack.addEventListener('mouseleave', startAutoSlide)

  // Touch events for mobile
  let touchStartX = 0
  let touchEndX = 0

  testimonialTrack.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX
    stopAutoSlide()
  })

  testimonialTrack.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX
    handleSwipe()
    startAutoSlide()
  })

  function handleSwipe() {
    const swipeThreshold = 50
    const difference = touchStartX - touchEndX

    if (Math.abs(difference) > swipeThreshold) {
      if (difference > 0) {
        // Swipe left
        nextTestimonial()
      } else {
        // Swipe right
        prevTestimonial()
      }
    }
  }

  // Initialize
  updateTestimonialSlider()
  startAutoSlide()
}

// Scroll Animations
function initializeScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    },
  )

  animatedElements.forEach((element) => observer.observe(element))
}

// Parallax Effect for Hero Slider
function initializeParallax() {
  const heroSlider = document.querySelector('.hero-slider')
  if (!heroSlider) return

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset
    const rate = scrolled * 0.5
    heroSlider.style.transform = `translate3d(0, ${rate}px, 0)`
  })
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const targetId = this.getAttribute('href')
    if (targetId === '#') return

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  })
})

// Lazy Loading for Images
function initializeLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]')

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.add('loaded')
        observer.unobserve(img)
      }
    })
  })

  lazyImages.forEach((img) => imageObserver.observe(img))
}

// Initialize all functions when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  initializeHeroSlider()
  initializeAnimatedStats()
  initializeActivitiesCarousel()
  initializeTestimonialSlider()
  initializeScrollAnimations()
  initializeParallax()
  initializeLazyLoading()
})
