// assets/js/testimonial.js
class TestimonialSlider {
  constructor() {
    this.slider = document.querySelector('.testimonial-slider')
    if (!this.slider) return

    this.track = this.slider.querySelector('.testimonial-track')
    this.prevBtn = this.slider.querySelector('.prev-btn')
    this.nextBtn = this.slider.querySelector('.next-btn')

    this.currentIndex = 0
    this.isAnimating = false
    this.testimonials = []

    this.init()
  }

  init() {
    this.createTestimonials()
    this.setupEventListeners()
    this.updateSlider()
  }

  createTestimonials() {
    this.testimonials = [
      {
        text: "Nyasa's educational programs have transformed our village. Children who never went to school are now learning and dreaming big.",
        name: 'Rajesh Kumar',
        role: 'Village Head, Maharashtra',
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      },
      {
        text: "The medical camps organized by Nyasa saved my daughter's life. We are forever grateful for their support and dedication.",
        name: 'Priya Sharma',
        role: 'Beneficiary, Rajasthan',
        image:
          'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      },
      {
        text: 'Working with Nyasa has been an incredible experience. Their commitment to sustainable development is truly inspiring.',
        name: 'Dr. Anil Patel',
        role: 'Volunteer Doctor',
        image:
          'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      },
      {
        text: "Nyasa's approach to community development is holistic and effective. They don't just provide aid, they build capacity.",
        name: 'Sanjay Gupta',
        role: 'Corporate Partner',
        image:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      },
    ]

    this.track.innerHTML = this.testimonials
      .map(
        (testimonial) => `
            <div class="testimonial-card">
                <div class="testimonial-text">
                    ${testimonial.text}
                </div>
                <div class="testimonial-author">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="author-image">
                    <div class="author-info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
            </div>
        `,
      )
      .join('')

    this.testimonialCards = Array.from(
      this.track.querySelectorAll('.testimonial-card'),
    )
  }

  setupEventListeners() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prevTestimonial())
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextTestimonial())
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.prevTestimonial()
      } else if (e.key === 'ArrowRight') {
        this.nextTestimonial()
      }
    })

    // Touch support
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
      this.nextTestimonial()
    } else if (endX - startX > swipeThreshold) {
      this.prevTestimonial()
    }
  }

  prevTestimonial() {
    if (this.isAnimating) return

    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length
    this.updateSlider()
  }

  nextTestimonial() {
    if (this.isAnimating) return

    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length
    this.updateSlider()
  }

  updateSlider() {
    this.isAnimating = true

    const offset = -this.currentIndex * 100
    this.track.style.transform = `translateX(${offset}%)`

    // Reset animation flag
    setTimeout(() => {
      this.isAnimating = false
    }, 500)
  }
}

// Initialize testimonial slider
document.addEventListener('DOMContentLoaded', () => {
  new TestimonialSlider()
})
