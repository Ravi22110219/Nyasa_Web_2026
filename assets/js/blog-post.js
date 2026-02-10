// Blog Post Interactive Features
class BlogPost {
  constructor() {
    this.timelineLinks = document.querySelectorAll('.timeline-link')
    this.commentForm = document.getElementById('commentForm')
    this.newsletterForm = document.querySelector('.newsletter-form')

    this.init()
  }

  init() {
    this.setupTimelineNavigation()
    this.setupCommentForm()
    this.setupNewsletterForm()
    this.setupScrollSpy()
  }

  setupTimelineNavigation() {
    this.timelineLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault()

        const targetId = link.getAttribute('href')
        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          // Update active link
          this.timelineLinks.forEach((l) => l.classList.remove('active'))
          link.classList.add('active')

          // Smooth scroll to target
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      })
    })
  }

  setupScrollSpy() {
    const sections = document.querySelectorAll(
      '.year-section, .conclusion-section',
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            this.timelineLinks.forEach((link) => {
              link.classList.remove('active')
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active')
              }
            })
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px',
      },
    )

    sections.forEach((section) => {
      observer.observe(section)
    })
  }

  setupCommentForm() {
    if (this.commentForm) {
      this.commentForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const name = this.commentForm.querySelector('input[type="text"]').value
        const email = this.commentForm.querySelector(
          'input[type="email"]',
        ).value
        const comment = this.commentForm.querySelector('textarea').value

        // In a real application, you would send this data to a server
        // For now, we'll just show a success message
        this.showNotification(
          'Comment submitted successfully! It will appear after moderation.',
          'success',
        )

        // Reset form
        this.commentForm.reset()
      })
    }
  }

  setupNewsletterForm() {
    if (this.newsletterForm) {
      this.newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const email = this.newsletterForm.querySelector(
          'input[type="email"]',
        ).value

        // Validate email
        if (this.validateEmail(email)) {
          this.showNotification(
            'Thank you for subscribing to our newsletter!',
            'success',
          )
          this.newsletterForm.reset()
        } else {
          this.showNotification('Please enter a valid email address.', 'error')
        }
      })
    }
  }

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  showNotification(message, type) {
    // Remove any existing notification
    const existingNotification = document.querySelector('.notification')
    if (existingNotification) {
      existingNotification.remove()
    }

    // Create notification
    const notification = document.createElement('div')
    notification.className = `notification ${type}`
    notification.innerHTML = `
      <span>${message}</span>
      <button class="close-notification">&times;</button>
    `

    // Add to page
    document.body.appendChild(notification)

    // Show notification
    setTimeout(() => {
      notification.classList.add('show')
    }, 10)

    // Auto-remove after 5 seconds
    setTimeout(() => {
      notification.classList.remove('show')
      setTimeout(() => {
        notification.remove()
      }, 300)
    }, 5000)

    // Close button
    notification
      .querySelector('.close-notification')
      .addEventListener('click', () => {
        notification.classList.remove('show')
        setTimeout(() => {
          notification.remove()
        }, 300)
      })
  }
}

// Initialize blog post when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new BlogPost()

  // Add notification styles
  const style = document.createElement('style')
  style.textContent = `
    .notification {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      border-radius: var(--radius-md);
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      max-width: 400px;
      z-index: 1000;
      transform: translateX(100%);
      opacity: 0;
      transition: transform 0.3s ease, opacity 0.3s ease;
      box-shadow: var(--shadow-lg);
    }
    
    .notification.show {
      transform: translateX(0);
      opacity: 1;
    }
    
    .notification.success {
      background-color: var(--primary-color);
    }
    
    .notification.error {
      background-color: #dc3545;
    }
    
    .close-notification {
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0;
      line-height: 1;
    }
  `
  document.head.appendChild(style)
})
