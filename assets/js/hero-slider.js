// Hero Slider JavaScript - Save as assets/js/hero-slider.js
function initializeHeroSlider() {
  const slides = document.querySelectorAll('.slide')
  const dots = document.querySelectorAll('.dot')
  const prevBtn = document.querySelector('.prev-btn')
  const nextBtn = document.querySelector('.next-btn')
  const sliderLoader = document.querySelector('.slider-loader')

  if (!slides.length || !prevBtn || !nextBtn) {
    console.warn('Hero slider elements not found')
    return
  }

  let currentSlide = 0
  let slideInterval
  let isAnimating = false

  // Load all images
  function loadSliderImages() {
    const slideImages = document.querySelectorAll('.slide-image')
    let loadedImages = 0
    const totalImages = slideImages.length

    if (totalImages === 0) return

    slideImages.forEach((slideImage) => {
      const bgUrl = slideImage.getAttribute('data-bg')
      if (!bgUrl) return

      const img = new Image()
      img.src = bgUrl

      img.onload = () => {
        loadedImages++
        slideImage.style.backgroundImage = `url('${bgUrl}')`
        slideImage.querySelector('.image-loader')?.remove()

        if (loadedImages === totalImages && sliderLoader) {
          sliderLoader.style.display = 'none'
        }
      }

      img.onerror = () => {
        loadedImages++
        console.warn(`Failed to load image: ${bgUrl}`)
        slideImage.style.backgroundImage =
          'linear-gradient(135deg, var(--primary-color), #1a365d)'
        slideImage.querySelector('.image-loader')?.remove()

        if (loadedImages === totalImages && sliderLoader) {
          sliderLoader.style.display = 'none'
        }
      }
    })
  }

  // Initialize animations on first slide
  function initializeSlideAnimations() {
    const activeSlide = slides[currentSlide]
    if (!activeSlide) return

    const content = activeSlide.querySelector('.slide-content')
    const image = activeSlide.querySelector('.slide-image')

    // Reset animations
    content?.classList.remove('animate-slide-in-left')
    image?.classList.remove('animate-zoom-in')

    // Trigger reflow
    void content?.offsetWidth
    void image?.offsetWidth

    // Add animations
    setTimeout(() => {
      content?.classList.add('animate-slide-in-left')
      image?.classList.add('animate-zoom-in')
    }, 50)
  }

  // Show specific slide
  function showSlide(n) {
    if (isAnimating) return
    isAnimating = true

    // Remove active class from all slides and dots
    slides.forEach((slide) => slide.classList.remove('active'))
    dots.forEach((dot) => {
      dot.classList.remove('active')
      dot.setAttribute('aria-selected', 'false')
    })

    // Calculate new slide index
    currentSlide = (n + slides.length) % slides.length

    // Add active class to current slide and dot
    slides[currentSlide].classList.add('active')
    dots[currentSlide].classList.add('active')
    dots[currentSlide].setAttribute('aria-selected', 'true')

    // Update ARIA attributes
    slides.forEach((slide, index) => {
      slide.setAttribute('aria-hidden', index !== currentSlide)
    })

    // Trigger animations for active slide
    initializeSlideAnimations()

    // Reset animation flag
    setTimeout(() => {
      isAnimating = false
    }, 500)
  }

  function nextSlide() {
    showSlide(currentSlide + 1)
  }

  function prevSlide() {
    showSlide(currentSlide - 1)
  }

  function goToSlide(n) {
    showSlide(n)
    resetInterval()
  }

  function startInterval() {
    clearInterval(slideInterval)
    slideInterval = setInterval(nextSlide, 5000)
  }

  function resetInterval() {
    clearInterval(slideInterval)
    startInterval()
  }

  // Event Listeners
  prevBtn.addEventListener('click', (e) => {
    e.preventDefault()
    prevSlide()
    resetInterval()
  })

  nextBtn.addEventListener('click', (e) => {
    e.preventDefault()
    nextSlide()
    resetInterval()
  })

  dots.forEach((dot, index) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault()
      goToSlide(index)
    })
  })

  // Pause on hover
  const slider = document.querySelector('.hero-slider')
  if (slider) {
    slider.addEventListener('mouseenter', () => {
      clearInterval(slideInterval)
    })

    slider.addEventListener('mouseleave', startInterval)

    slider.addEventListener('focusin', () => {
      clearInterval(slideInterval)
    })

    slider.addEventListener('focusout', startInterval)
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (
      e.target.closest('.hero-slider') ||
      document.activeElement.closest('.hero-slider')
    ) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
        resetInterval()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        nextSlide()
        resetInterval()
      } else if (e.key === 'Home') {
        e.preventDefault()
        goToSlide(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goToSlide(slides.length - 1)
      }
    }
  })

  // Initialize
  loadSliderImages()
  startInterval()

  // Touch/swipe support for mobile
  let touchStartX = 0
  let touchEndX = 0

  slider?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX
  })

  slider?.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX
    handleSwipe()
  })

  function handleSwipe() {
    const swipeThreshold = 50
    const diff = touchStartX - touchEndX

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next slide
        nextSlide()
      } else {
        // Swipe right - previous slide
        prevSlide()
      }
      resetInterval()
    }
  }

  // Update slider when visibility changes
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(slideInterval)
    } else {
      startInterval()
    }
  })
}

// Export for component loader
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initializeHeroSlider }
}
