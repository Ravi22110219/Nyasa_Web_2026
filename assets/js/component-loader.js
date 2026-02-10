// Component Loader Script
document.addEventListener('DOMContentLoaded', function () {
  // Define all components to load
  const components = [
    { id: 'navbar-container', file: 'components/navbar.html' },
    { id: 'hero-slider-container', file: 'components/hero-slider.html' },
    { id: 'about-section-container', file: 'components/about-section.html' },
    { id: 'vision-mission-container', file: 'components/vision-mission.html' },
    { id: 'stats-section-container', file: 'components/stats-section.html' },
    {
      id: 'activities-section-container',
      file: 'components/activities-preview.html',
    },
    { id: 'testimonials-container', file: 'components/testimonials.html' },
    { id: 'sponsors-container', file: 'components/sponsors.html' },
    { id: 'cta-section-container', file: 'components/cta-section.html' },
    { id: 'footer-container', file: 'components/footer.html' },
  ]

  // Load all components
  components.forEach((component) => {
    if (document.getElementById(component.id)) {
      fetch(component.file)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Failed to load ${component.file}: ${response.status}`,
            )
          }
          return response.text()
        })
        .then((data) => {
          document.getElementById(component.id).innerHTML = data

          // Initialize scripts for specific components
          switch (component.id) {
            case 'hero-slider-container':
              setTimeout(() => initializeHeroSlider(), 100)
              break
            case 'stats-section-container':
              setTimeout(() => initializeStatsCounter(), 200)
              break
            case 'activities-section-container':
              setTimeout(() => initializeActivitiesScroll(), 300)
              break
            case 'testimonials-container':
              setTimeout(() => initializeTestimonialsSlider(), 400)
              break
          }
        })
        .catch((error) => {
          console.error(`Error loading ${component.file}:`, error)
          document.getElementById(component.id).innerHTML =
            `<div class="error-loading">Error loading component. Please try again later.</div>`
        })
    }
  })

  // Initialize scroll animations
  function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll')

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

  // Run after all components are loaded
  setTimeout(initializeScrollAnimations, 500)
})
