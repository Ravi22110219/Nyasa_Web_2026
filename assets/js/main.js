// assets/js/main.js - UPDATED & CORRECTED VERSION
class ComponentLoader {
  constructor() {
    this.components = {
      navbar: 'components/navbar.html',
      footer: 'components/footer.html',
      heroSlider: 'components/hero-slider.html',
      aboutSection: 'components/about-section.html',
      visionMission: 'components/vision-mission.html',
      statsSection: 'components/stats-section.html',
      activitiesSection: 'components/activities-preview.html',
      testimonials: 'components/testimonials.html',
      sponsors: 'components/sponsors.html',
      ctaSection: 'components/cta-section.html',
    }
  }

  async loadComponent(elementId, componentPath) {
    try {
      const response = await fetch(componentPath)
      if (!response.ok) {
        throw new Error(`Failed to load component: ${componentPath}`)
      }
      const html = await response.text()
      const container = document.getElementById(elementId)
      if (container) {
        container.innerHTML = html

        // Initialize component-specific scripts
        this.initializeComponentScripts(elementId)
      }
    } catch (error) {
      console.error('Error loading component:', error)
      this.showComponentError(elementId, error)
    }
  }

  initializeComponentScripts(elementId) {
    switch (elementId) {
      case 'navbar-container':
        this.initializeNavbar()
        break
      case 'footer-container':
        this.initializeFooter()
        break
      case 'hero-slider-container':
        this.initializeHeroSlider()
        break
      case 'stats-section-container':
        this.initializeStatsCounter()
        break
      case 'activities-section-container':
        this.initializeActivitiesScroll()
        break
      case 'testimonials-container':
        this.initializeTestimonialsSlider()
        break
      case 'sponsors-container':
        this.initializeSponsors()
        break
    }
  }

  showComponentError(elementId, error) {
    const container = document.getElementById(elementId)
    if (container) {
      container.innerHTML = `
        <div class="component-error">
          <i class="fas fa-exclamation-triangle"></i>
          <p>Failed to load component. Please refresh the page.</p>
          <small>Error: ${error.message}</small>
        </div>
      `
    }
  }

  async loadHomePageComponents() {
    try {
      // Load all home page components in sequence
      await this.loadComponent(
        'hero-slider-container',
        this.components.heroSlider,
      )
      await this.loadComponent(
        'about-section-container',
        this.components.aboutSection,
      )
      await this.loadComponent(
        'vision-mission-container',
        this.components.visionMission,
      )
      await this.loadComponent(
        'stats-section-container',
        this.components.statsSection,
      )
      await this.loadComponent(
        'activities-section-container',
        this.components.activitiesSection,
      )
      await this.loadComponent(
        'testimonials-container',
        this.components.testimonials,
      )
      await this.loadComponent('sponsors-container', this.components.sponsors)
      await this.loadComponent(
        'cta-section-container',
        this.components.ctaSection,
      )

      // Initialize scroll animations after all components are loaded
      setTimeout(() => this.initializeScrollAnimations(), 500)
    } catch (error) {
      console.error('Error loading home page components:', error)
    }
  }

  initializeNavbar() {
    // Mobile hamburger menu toggle
    const hamburger = document.getElementById('hamburger')
    const navMenu = document.getElementById('nav-menu')

    if (hamburger && navMenu) {
      console.log('Navbar initialized, hamburger found:', hamburger)

      hamburger.addEventListener('click', (e) => {
        e.stopPropagation() // Prevent event bubbling
        console.log('Hamburger clicked')
        hamburger.classList.toggle('active')
        navMenu.classList.toggle('active')

        // Toggle aria-expanded attribute for accessibility
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true'
        hamburger.setAttribute('aria-expanded', !isExpanded)
      })

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (
          hamburger.classList.contains('active') &&
          !hamburger.contains(e.target) &&
          !navMenu.contains(e.target)
        ) {
          hamburger.classList.remove('active')
          navMenu.classList.remove('active')
          hamburger.setAttribute('aria-expanded', 'false')
        }
      })

      // Close menu on link click (mobile)
      document.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
          if (window.innerWidth <= 768) {
            hamburger.classList.remove('active')
            navMenu.classList.remove('active')
            hamburger.setAttribute('aria-expanded', 'false')
          }
        })
      })

      // Close menu on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && hamburger.classList.contains('active')) {
          hamburger.classList.remove('active')
          navMenu.classList.remove('active')
          hamburger.setAttribute('aria-expanded', 'false')
          hamburger.focus()
        }
      })
    } else {
      console.error('Navbar elements not found:', { hamburger, navMenu })
    }

    // Add scroll effect
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar')
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled')
        } else {
          navbar.classList.remove('scrolled')
        }
      }
    })

    // Initialize current page highlighting
    this.updateCurrentPageNavLink(this.getCurrentPage())
  }

  updateActiveNavLink(clickedLink) {
    const navLinks = document.querySelectorAll('.nav-link')
    navLinks.forEach((link) => {
      link.classList.remove('active')
      link.setAttribute('aria-current', 'false')
    })
    clickedLink.classList.add('active')
    clickedLink.setAttribute('aria-current', 'page')
  }

  initializeFooter() {
    this.initializeVisitorCounter()

    const currentYear = new Date().getFullYear()
    const yearElement = document.getElementById('current-year')
    if (yearElement) {
      yearElement.textContent = currentYear
    }
  }

  initializeVisitorCounter() {
    const visitorElement = document.getElementById('visitor-count')
    if (visitorElement) {
      let count = localStorage.getItem('nyasaVisitorCount')

      if (!count) {
        // Start with a random base number between 500-1500
        count = Math.floor(Math.random() * 1000) + 500
      } else {
        count = parseInt(count)
      }

      count++

      localStorage.setItem('nyasaVisitorCount', count.toString())

      this.animateCounter(visitorElement, count)
    }
  }

  animateCounter(element, target) {
    let current = 0
    const increment = target / 100
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      element.textContent = Math.floor(current).toLocaleString()
    }, 20)
  }

  async initialize() {
    // Load navbar and footer on all pages
    await this.loadComponent('navbar-container', this.components.navbar)
    await this.loadComponent('footer-container', this.components.footer)

    // Initialize page-specific content
    this.initializePageSpecificContent()
  }

  initializePageSpecificContent() {
    const currentPage = this.getCurrentPage()

    switch (currentPage) {
      case 'index':
      case '':
      case 'home':
        this.initializeHomePage()
        break
      case 'activities':
        this.initializeActivitiesPage()
        break
      case 'gallery':
        this.initializeGalleryPage()
        break
      case 'blog':
        this.initializeBlogPage()
        break
      case 'report':
        this.initializeReportPage()
        break
      case 'news':
        this.initializeNewsPage()
        break
      case 'about':
        this.initializeAboutPage()
        break
      case 'contribute':
        this.initializeContributePage()
        break
      default:
        // For any other page, just update nav link
        this.updateCurrentPageNavLink(currentPage)
    }
  }

  getCurrentPage() {
    const path = window.location.pathname
    const page = path.split('/').pop().replace('.html', '').replace('index', '')
    return page.toLowerCase()
  }

  updateCurrentPageNavLink(currentPage) {
    const navLinks = document.querySelectorAll('.nav-link')
    navLinks.forEach((link) => {
      const href = link.getAttribute('href')
      if (!href) return

      const linkPage = href
        .replace('.html', '')
        .replace('index', '')
        .toLowerCase()

      // Remove active state from all links
      link.classList.remove('active')
      link.removeAttribute('aria-current')

      // Set active state for current page
      if (
        (currentPage === '' || currentPage === 'index') &&
        (linkPage === '' || linkPage === 'index' || linkPage === 'home')
      ) {
        link.classList.add('active')
        link.setAttribute('aria-current', 'page')
      } else if (linkPage === currentPage) {
        link.classList.add('active')
        link.setAttribute('aria-current', 'page')
      }
    })
  }

  initializeHomePage() {
    this.loadHomePageComponents()
  }

  initializeHeroSlider() {
    // Check if hero slider script is already loaded
    if (typeof initializeHeroSlider === 'function') {
      initializeHeroSlider()
    } else {
      // Load the script dynamically
      this.loadScript('assets/js/hero-slider.js')
        .then(() => {
          if (typeof initializeHeroSlider === 'function') {
            initializeHeroSlider()
          }
        })
        .catch((err) =>
          console.error('Failed to load hero slider script:', err),
        )
    }
  }

  initializeStatsCounter() {
    // Check if stats counter script is already loaded
    if (typeof initializeStatsCounter === 'function') {
      initializeStatsCounter()
    } else {
      this.loadScript('assets/js/stats-counter.js')
        .then(() => {
          if (typeof initializeStatsCounter === 'function') {
            initializeStatsCounter()
          }
        })
        .catch((err) =>
          console.error('Failed to load stats counter script:', err),
        )
    }
  }

  initializeActivitiesScroll() {
    if (typeof initializeActivitiesScroll === 'function') {
      initializeActivitiesScroll()
    } else {
      this.loadScript('assets/js/activities-scroll.js')
        .then(() => {
          if (typeof initializeActivitiesScroll === 'function') {
            initializeActivitiesScroll()
          }
        })
        .catch((err) =>
          console.error('Failed to load activities scroll script:', err),
        )
    }
  }

  initializeTestimonialsSlider() {
    if (typeof initializeTestimonialsSlider === 'function') {
      initializeTestimonialsSlider()
    } else {
      this.loadScript('assets/js/testimonials-slider.js')
        .then(() => {
          if (typeof initializeTestimonialsSlider === 'function') {
            initializeTestimonialsSlider()
          }
        })
        .catch((err) =>
          console.error('Failed to load testimonials slider script:', err),
        )
    }
  }

  initializeSponsors() {
    // Sponsors don't need special initialization, just ensure images load
    const sponsorLogos = document.querySelectorAll('.sponsor-logo img')
    sponsorLogos.forEach((img) => {
      img.onerror = () => {
        img.style.display = 'none'
        img.parentElement.innerHTML = '<i class="fas fa-building"></i>'
      }
    })
  }

  initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll')

    if (!animatedElements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    )

    animatedElements.forEach((el) => observer.observe(el))
  }

  loadScript(src) {
    return new Promise((resolve, reject) => {
      // Check if script is already loaded
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve()
        return
      }

      const script = document.createElement('script')
      script.src = src
      script.onload = () => resolve()
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
      document.body.appendChild(script)
    })
  }

  initializeActivitiesPage() {
    this.loadScript('assets/js/activities.js')
      .then(() => {
        if (typeof initializeActivitiesPage === 'function') {
          initializeActivitiesPage()
        }
      })
      .catch((err) =>
        console.error('Failed to load activities page script:', err),
      )
  }

  initializeGalleryPage() {
    this.loadScript('assets/js/gallery.js')
      .then(() => {
        if (typeof initializeGalleryPage === 'function') {
          initializeGalleryPage()
        }
      })
      .catch((err) => console.error('Failed to load gallery script:', err))
  }

  initializeBlogPage() {
    this.loadScript('assets/js/blog.js')
      .then(() => {
        if (typeof initializeBlogPage === 'function') {
          initializeBlogPage()
        }
      })
      .catch((err) => console.error('Failed to load blog script:', err))
  }

  initializeReportPage() {
    this.loadScript('assets/js/report.js')
      .then(() => {
        if (typeof initializeReportPage === 'function') {
          initializeReportPage()
        }
      })
      .catch((err) => console.error('Failed to load report script:', err))
  }

  initializeNewsPage() {
    this.loadScript('assets/js/news.js')
      .then(() => {
        if (typeof initializeNewsPage === 'function') {
          initializeNewsPage()
        }
      })
      .catch((err) => console.error('Failed to load news script:', err))
  }

  initializeAboutPage() {
    this.loadScript('assets/js/about.js')
      .then(() => {
        if (typeof initializeAboutPage === 'function') {
          initializeAboutPage()
        }
      })
      .catch((err) => console.error('Failed to load about script:', err))
  }

  initializeContributePage() {
    this.loadScript('assets/js/contribute.js')
      .then(() => {
        if (typeof initializeContributePage === 'function') {
          initializeContributePage()
        }
      })
      .catch((err) => console.error('Failed to load contribute script:', err))
  }

  // Helper method to debounce function calls
  debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const app = new ComponentLoader()
  app.initialize()

  // Add global error handler for unhandled promises
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason)
  })
})

// Make ComponentLoader available globally if needed
window.ComponentLoader = ComponentLoader
