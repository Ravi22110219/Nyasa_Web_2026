// assets/js/footer.js - UPDATED FOR NEW DESIGN
class FooterComponent {
  constructor() {
    this.newsletterForm = document.querySelector('.newsletter-form')
    this.subscribeBtn = document.querySelector('.newsletter-btn')
    this.socialIcons = document.querySelectorAll('.social-icons a')

    this.init()
  }

  init() {
    this.setupNewsletter()
    this.setupSocialIcons()
    this.setupFacebookWidget()
  }

  setupNewsletter() {
    if (this.newsletterForm) {
      this.newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const emailInput = this.newsletterForm.querySelector(
          'input[type="email"]',
        )
        const email = emailInput.value.trim()

        if (this.validateEmail(email)) {
          this.subscribeNewsletter(email)
        } else {
          this.showEmailError(emailInput)
        }
      })
    }

    // Add input validation on type
    const emailInput = document.querySelector(
      '.newsletter-form input[type="email"]',
    )
    if (emailInput) {
      emailInput.addEventListener('input', (e) => {
        this.clearEmailError(e.target)
      })
    }
  }

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  showEmailError(input) {
    input.style.borderColor = '#ff6b35'
    input.style.boxShadow = '0 0 0 2px rgba(255, 107, 53, 0.2)'

    // Show error message
    let errorMsg = input.nextElementSibling
    if (!errorMsg || !errorMsg.classList.contains('error-message')) {
      errorMsg = document.createElement('div')
      errorMsg.className = 'error-message'
      errorMsg.style.cssText = `
        color: #ff6b35;
        font-size: 0.8rem;
        margin-top: 4px;
      `
      input.parentNode.insertBefore(errorMsg, input.nextSibling)
    }
    errorMsg.textContent = 'Please enter a valid email address'

    // Focus the input
    input.focus()
  }

  clearEmailError(input) {
    input.style.borderColor = 'rgba(255, 255, 255, 0.2)'
    input.style.boxShadow = 'none'

    const errorMsg = input.nextElementSibling
    if (errorMsg && errorMsg.classList.contains('error-message')) {
      errorMsg.remove()
    }
  }

  subscribeNewsletter(email) {
    // Show loading state
    const originalText = this.subscribeBtn.textContent
    this.subscribeBtn.textContent = 'Subscribing...'
    this.subscribeBtn.disabled = true

    // Simulate API call
    setTimeout(() => {
      // Store subscription
      this.storeSubscription(email)

      // Show success message
      this.showSubscriptionSuccess()

      // Reset form
      this.newsletterForm.reset()
      this.subscribeBtn.textContent = 'SUBSCRIBED!'

      // Change button style permanently
      this.subscribeBtn.style.background = '#2a9d8f'
      this.subscribeBtn.style.cursor = 'default'

      // Reset button after 5 seconds
      setTimeout(() => {
        this.subscribeBtn.textContent = 'SUBSCRIBE'
        this.subscribeBtn.disabled = false
      }, 5000)
    }, 1000)
  }

  storeSubscription(email) {
    const subscription = {
      email: email,
      date: new Date().toISOString(),
      source: 'footer_newsletter',
    }

    let subscriptions =
      JSON.parse(localStorage.getItem('nyasa_newsletter')) || []
    const exists = subscriptions.some((sub) => sub.email === email)

    if (!exists) {
      subscriptions.push(subscription)
      localStorage.setItem('nyasa_newsletter', JSON.stringify(subscriptions))
    }

    // Log for debugging (remove in production)
    console.log('Newsletter subscription stored:', email)
  }

  showSubscriptionSuccess() {
    const successMsg = document.createElement('div')
    successMsg.className = 'newsletter-success'
    successMsg.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <span>Successfully subscribed to newsletter!</span>
    `
    successMsg.style.cssText = `
      display: flex;
      align-items: center;
      gap: 8px;
      color: #2a9d8f;
      font-size: 0.9rem;
      margin-top: 10px;
      padding: 8px 12px;
      background: rgba(42, 157, 143, 0.1);
      border-radius: var(--radius-sm);
      animation: fadeIn 0.3s ease;
    `

    const form = this.newsletterForm
    const existingSuccess = form.querySelector('.newsletter-success')
    if (existingSuccess) {
      existingSuccess.remove()
    }

    form.appendChild(successMsg)

    // Remove after 5 seconds
    setTimeout(() => {
      if (successMsg.parentNode) {
        successMsg.style.animation = 'fadeOut 0.3s ease'
        setTimeout(() => successMsg.remove(), 300)
      }
    }, 5000)
  }

  setupSocialIcons() {
    this.socialIcons.forEach((icon, index) => {
      // Add tooltip
      const platform =
        icon.getAttribute('aria-label') ||
        icon.querySelector('i').className.match(/fa-(\w+)/)[1]
      this.addTooltip(icon, platform)

      // Click tracking
      icon.addEventListener('click', (e) => {
        this.trackSocialClick(platform, icon.href)
      })

      // Hover effects
      icon.addEventListener('mouseenter', () => {
        this.animateSocialIcon(icon, index)
      })

      icon.addEventListener('mouseleave', () => {
        this.resetSocialIcon(icon)
      })
    })
  }

  addTooltip(icon, text) {
    icon.setAttribute('title', `Follow us on ${text}`)

    // Create custom tooltip
    icon.addEventListener('mouseenter', (e) => {
      const tooltip = document.createElement('div')
      tooltip.className = 'social-tooltip'
      tooltip.textContent = `Follow on ${text}`
      tooltip.style.cssText = `
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        background: var(--footer-bg);
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.8rem;
        white-space: nowrap;
        z-index: 1000;
        margin-bottom: 8px;
        opacity: 0;
        animation: fadeInUp 0.2s ease forwards;
      `

      // Check if tooltip already exists
      const existingTooltip = icon.querySelector('.social-tooltip')
      if (existingTooltip) {
        existingTooltip.remove()
      }

      icon.style.position = 'relative'
      icon.appendChild(tooltip)
    })

    icon.addEventListener('mouseleave', () => {
      const tooltip = icon.querySelector('.social-tooltip')
      if (tooltip) {
        tooltip.remove()
      }
    })
  }

  animateSocialIcon(icon, index) {
    const colors = {
      telegram: '#0088cc',
      facebook: '#1877f2',
      instagram: '#e1306c',
      twitter: '#1da1f2',
      youtube: '#ff0000',
    }

    const iconClass = icon.querySelector('i').className
    let platformColor = '#3a86ff' // default

    Object.keys(colors).forEach((platform) => {
      if (iconClass.includes(platform)) {
        platformColor = colors[platform]
      }
    })

    icon.style.transform = 'translateY(-5px) scale(1.1)'
    icon.style.background = platformColor
    icon.style.boxShadow = `0 8px 20px ${platformColor}40`

    // Add pulse animation
    icon.style.animation = `socialPulse 0.6s ease ${index * 0.1}s`
  }

  resetSocialIcon(icon) {
    icon.style.transform = 'translateY(0) scale(1)'
    icon.style.background = ''
    icon.style.boxShadow = ''
    icon.style.animation = ''
  }

  trackSocialClick(platform, url) {
    const eventData = {
      platform: platform,
      url: url,
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
    }

    // Store in localStorage
    let socialClicks =
      JSON.parse(localStorage.getItem('nyasa_social_clicks')) || []
    socialClicks.push(eventData)
    localStorage.setItem('nyasa_social_clicks', JSON.stringify(socialClicks))

    console.log(`Social click tracked: ${platform}`)
  }

  setupFacebookWidget() {
    const facebookIframe = document.querySelector('.facebook-widget iframe')
    if (facebookIframe) {
      // Add loading state
      facebookIframe.addEventListener('load', () => {
        facebookIframe.style.opacity = '1'
        facebookIframe.style.transition = 'opacity 0.3s ease'
      })

      facebookIframe.style.opacity = '0'
    }
  }
}

// CSS animations for the JS
const style = document.createElement('style')
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(-10px); }
  }
  
  @keyframes fadeInUp {
    from { opacity: 0; transform: translate(-50%, 10px); }
    to { opacity: 1; transform: translate(-50%, 0); }
  }
  
  @keyframes socialPulse {
    0%, 100% { transform: translateY(-5px) scale(1.1); }
    50% { transform: translateY(-8px) scale(1.15); }
  }
  
  .newsletter-success i {
    color: #2a9d8f;
  }
`
document.head.appendChild(style)

// Initialize footer component
if (document.querySelector('.footer')) {
  document.addEventListener('DOMContentLoaded', () => {
    new FooterComponent()
  })
}

// Export for module usage (if using ES6 modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FooterComponent
}
