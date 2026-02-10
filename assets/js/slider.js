// assets/js/slider.js
class HeroSlider {
  constructor() {
    this.slider = document.querySelector('.hero-slider')
    if (!this.slider) return

    this.track = this.slider.querySelector('.slider-track')
    this.slides = Array.from(this.track.querySelectorAll('.slide'))
    this.dots = Array.from(this.slider.querySelectorAll('.dot'))
    this.prevBtn = this.slider.querySelector('.prev-btn')
    this.nextBtn = this.slider.querySelector('.next-btn')

    this.currentIndex = 0
    this.isAnimating = false
    this.autoSlideInterval = null
    this.autoSlideDelay = 5000 // 5 seconds

    this.init()
  }

  init() {
    this.setupEventListeners()
    this.startAutoSlide()
    this.updateSlider()
  }

  setupEventListeners() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prevSlide())
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextSlide())
    }

    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index))
    })

    // Pause auto-slide on hover
    this.slider.addEventListener('mouseenter', () => this.stopAutoSlide())
    this.slider.addEventListener('mouseleave', () => this.startAutoSlide())

    // Touch support for mobile
    let touchStartX = 0
    let touchEndX = 0

    this.slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX
    })

    this.slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX
      this.handleSwipe(touchStartX, touchEndX)
    })
  }

  handleSwipe(startX, endX) {
    const swipeThreshold = 50

    if (startX - endX > swipeThreshold) {
      this.nextSlide()
    } else if (endX - startX > swipeThreshold) {
      this.prevSlide()
    }
  }

  prevSlide() {
    if (this.isAnimating) return

    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length
    this.updateSlider()
    this.restartAutoSlide()
  }

  nextSlide() {
    if (this.isAnimating) return

    this.currentIndex = (this.currentIndex + 1) % this.slides.length
    this.updateSlider()
    this.restartAutoSlide()
  }

  goToSlide(index) {
    if (this.isAnimating || index === this.currentIndex) return

    this.currentIndex = index
    this.updateSlider()
    this.restartAutoSlide()
  }

  updateSlider() {
    this.isAnimating = true

    // Update slides
    this.slides.forEach((slide, index) => {
      slide.classList.remove('active')
      if (index === this.currentIndex) {
        setTimeout(() => {
          slide.classList.add('active')
        }, 10)
      }
    })

    // Update dots
    this.dots.forEach((dot, index) => {
      dot.classList.remove('active')
      if (index === this.currentIndex) {
        dot.classList.add('active')
      }
    })

    // Reset animation flag
    setTimeout(() => {
      this.isAnimating = false
    }, 500)
  }

  startAutoSlide() {
    this.stopAutoSlide()
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide()
    }, this.autoSlideDelay)
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval)
      this.autoSlideInterval = null
    }
  }

  restartAutoSlide() {
    this.stopAutoSlide()
    this.startAutoSlide()
  }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new HeroSlider()
})

// Horizontal scroll slider for activities
class ActivitiesSlider {
  constructor() {
    this.container = document.querySelector('.activities-scroll-container')
    if (!this.container) return

    this.track = this.container.querySelector('.activities-track')
    this.cards = Array.from(this.track.querySelectorAll('.activity-card'))
    this.leftBtn = this.container.querySelector('.left-btn')
    this.rightBtn = this.container.querySelector('.right-btn')

    this.cardWidth = 300 // Should match CSS flex-basis
    this.gap = 16 // Should match CSS gap
    this.currentScroll = 0
    this.maxScroll = this.track.scrollWidth - this.container.offsetWidth

    this.init()
  }

  init() {
    this.setupEventListeners()
    this.createActivityCards()
  }

  createActivityCards() {
    const activities = [
      {
        title: 'Educational Workshops',
        description:
          'Weekly educational workshops for underprivileged children in rural areas.',
        image:
          'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        title: 'Medical Camps',
        description:
          'Free medical checkup camps in remote villages with specialist doctors.',
        image:
          'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w-1350&q=80',
      },
      {
        title: 'Clean Water Projects',
        description:
          'Installing water purification systems in communities without clean water access.',
        image:
          'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        title: 'Skill Development',
        description:
          'Vocational training programs for youth and women empowerment.',
        image:
          'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        title: 'Environmental Conservation',
        description:
          'Tree plantation drives and environmental awareness campaigns.',
        image:
          'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
      {
        title: 'Digital Literacy',
        description:
          'Teaching basic computer skills to bridge the digital divide.',
        image:
          'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      },
    ]

    this.track.innerHTML = activities
      .map(
        (activity) => `
            <div class="activity-card">
                <div class="activity-image" style="background-image: url('${activity.image}')"></div>
                <div class="activity-content">
                    <h3>${activity.title}</h3>
                    <p>${activity.description}</p>
                    <a href="activities.html" class="btn btn-outline">Learn More</a>
                </div>
            </div>
        `,
      )
      .join('')
  }

  setupEventListeners() {
    if (this.leftBtn) {
      this.leftBtn.addEventListener('click', () => this.scrollLeft())
    }

    if (this.rightBtn) {
      this.rightBtn.addEventListener('click', () => this.scrollRight())
    }

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.scrollLeft()
      } else if (e.key === 'ArrowRight') {
        this.scrollRight()
      }
    })
  }

  scrollLeft() {
    this.currentScroll = Math.max(
      0,
      this.currentScroll - (this.cardWidth + this.gap) * 2,
    )
    this.updateScrollPosition()
  }

  scrollRight() {
    this.currentScroll = Math.min(
      this.maxScroll,
      this.currentScroll + (this.cardWidth + this.gap) * 2,
    )
    this.updateScrollPosition()
  }

  updateScrollPosition() {
    this.track.style.transform = `translateX(-${this.currentScroll}px)`

    // Update button states
    if (this.leftBtn) {
      this.leftBtn.disabled = this.currentScroll === 0
      this.leftBtn.style.opacity = this.currentScroll === 0 ? '0.5' : '1'
    }

    if (this.rightBtn) {
      this.rightBtn.disabled = this.currentScroll >= this.maxScroll
      this.rightBtn.style.opacity =
        this.currentScroll >= this.maxScroll ? '0.5' : '1'
    }
  }
}

// Initialize activities slider
document.addEventListener('DOMContentLoaded', () => {
  new ActivitiesSlider()
})
