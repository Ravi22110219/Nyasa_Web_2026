// assets/js/contribute.js
class ContributePage {
  constructor() {
    this.optionBtns = document.querySelectorAll('.option-btn')
    this.volunteerForm = document.getElementById('volunteerForm')
    this.amountBtns = document.querySelectorAll('.amount-btn')
    this.customAmount = document.getElementById('customAmount')
    this.donateBtn = document.getElementById('donateBtn')
    this.contactForm = document.getElementById('contactForm')

    this.init()
  }

  init() {
    this.setupOptionButtons()
    this.setupVolunteerForm()
    this.setupDonationButtons()
    this.setupContactForm()
  }

  setupOptionButtons() {
    this.optionBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const option = e.target.dataset.option
        this.scrollToOption(option)
      })
    })
  }

  scrollToOption(option) {
    let targetElement

    switch (option) {
      case 'volunteer':
        targetElement = document.getElementById('volunteer-form')
        break
      case 'donate':
        targetElement = document.getElementById('donation-section')
        break
      case 'partner':
        targetElement = document.querySelector('.sponsor-info')
        break
      case 'awareness':
        targetElement = document.querySelector('.contact-section')
        break
    }

    if (targetElement) {
      const navbarHeight = 70 // Height of fixed navbar
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  setupVolunteerForm() {
    if (this.volunteerForm) {
      this.volunteerForm.addEventListener('submit', (e) => {
        e.preventDefault()

        // Get form data
        const formData = new FormData(this.volunteerForm)
        const data = Object.fromEntries(formData)

        // Validate required checkboxes/radios
        const interests = this.volunteerForm.querySelectorAll(
          'input[name="interest"]:checked',
        )
        const availability = this.volunteerForm.querySelector(
          'input[name="availability"]:checked',
        )

        if (interests.length === 0) {
          alert('Please select at least one area of interest.')
          return
        }

        if (!availability) {
          alert('Please select your availability.')
          return
        }

        // In a real application, you would send this data to a server
        // For now, we'll show a success message
        this.showMessage(
          'Thank you for your interest in volunteering! We will contact you soon.',
          'success',
        )
        this.volunteerForm.reset()

        // Log data to console (for demonstration)
        console.log('Volunteer Application:', {
          ...data,
          interests: Array.from(interests).map((i) => i.value),
          availability: availability.value,
        })
      })
    }
  }

  setupDonationButtons() {
    // Set up amount buttons
    this.amountBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        this.amountBtns.forEach((b) => b.classList.remove('active'))
        // Add active class to clicked button
        btn.classList.add('active')
        // Clear custom amount
        this.customAmount.value = ''
      })
    })

    // Set up custom amount input
    this.customAmount.addEventListener('input', () => {
      // Remove active class from amount buttons when custom amount is entered
      this.amountBtns.forEach((b) => b.classList.remove('active'))
    })

    // Set up donation button
    if (this.donateBtn) {
      this.donateBtn.addEventListener('click', () => {
        const amount = this.getDonationAmount()
        const name = document.getElementById('donorName').value
        const email = document.getElementById('donorEmail').value
        const type = document.getElementById('donationType').value

        if (!amount || amount < 100) {
          alert('Please select or enter a valid amount (minimum ₹100).')
          return
        }

        if (!name || !email) {
          alert('Please enter your name and email address.')
          return
        }

        // In a real application, you would integrate with a payment gateway
        // For demonstration, we'll show a success message
        this.showMessage(
          `Thank you for your ${type} donation of ₹${amount}!`,
          'success',
        )

        // Reset form
        this.amountBtns.forEach((b) => b.classList.remove('active'))
        this.customAmount.value = ''
        document.getElementById('donorName').value = ''
        document.getElementById('donorEmail').value = ''

        // Log data to console (for demonstration)
        console.log('Donation Details:', {
          amount,
          name,
          email,
          type,
        })
      })
    }
  }

  getDonationAmount() {
    // Check if a preset amount button is active
    const activeBtn = document.querySelector('.amount-btn.active')
    if (activeBtn) {
      return parseInt(activeBtn.dataset.amount)
    }

    // Otherwise get custom amount
    const customAmount = parseInt(this.customAmount.value)
    return customAmount || 0
  }

  setupContactForm() {
    if (this.contactForm) {
      this.contactForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const name = document.getElementById('contactName').value
        const email = document.getElementById('contactEmail').value
        const subject = document.getElementById('contactSubject').value
        const message = document.getElementById('contactMessage').value

        if (!name || !email || !subject || !message) {
          alert('Please fill in all required fields.')
          return
        }

        // In a real application, you would send this data to a server
        // For now, we'll show a success message
        this.showMessage(
          'Thank you for your message! We will get back to you soon.',
          'success',
        )
        this.contactForm.reset()

        // Log data to console (for demonstration)
        console.log('Contact Form:', {
          name,
          email,
          subject,
          message,
        })
      })
    }
  }

  showMessage(text, type) {
    // Create message element
    const message = document.createElement('div')
    message.className = `message ${type}`
    message.textContent = text

    // Style the message
    message.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 1.5rem;
            background-color: ${type === 'success' ? '#4CAF50' : '#f44336'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 2000;
            animation: slideIn 0.3s ease;
        `

    // Add animation
    const style = document.createElement('style')
    style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `
    document.head.appendChild(style)

    // Add to page
    document.body.appendChild(message)

    // Remove after 5 seconds
    setTimeout(() => {
      message.style.animation = 'slideOut 0.3s ease'
      setTimeout(() => {
        document.body.removeChild(message)
        document.head.removeChild(style)
      }, 300)
    }, 5000)
  }
}

// Initialize contribute page
document.addEventListener('DOMContentLoaded', () => {
  new ContributePage()
})
