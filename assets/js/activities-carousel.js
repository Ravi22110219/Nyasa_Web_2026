// assets/js/activities-carousel.js
// Activities Carousel - Infinite Loop with Page Navigation

// Make function globally available
window.initActivitiesCarousel = function () {
  // Activity data with mapping to page sections
  const activitiesData = [
    {
      title: 'Chetana Initiative',
      description:
        'Empowering Nyasa kids by providing elementary education at Nyasa School. The program aims to bridge educational gaps and create meaningful connections.',
      category: 'education',
      date: '2026 - Ongoing',
      image: './assets/images/other/chetana.JPG',
      stats: {
        participants: '14+ Students',
        duration: 'Weekly Sessions',
      },
      tags: ['Elementary Education', 'NCERT', 'Weekly Tests'],
      location: 'Nyasa School, IITGN',
      pageId: 'chetana', // Unique identifier for scrolling
      pageUrl: 'activities.html', // Page to navigate to
    },
    {
      title: 'Akanksha Program',
      description:
        'Empowering young minds in Palaj and Basan, focusing on Government school children in grades 6th to 8th with interactive learning sessions.',
      category: 'education',
      date: '2026 - Ongoing',
      image: './assets/images/akanksha/20240912_163358.jpg',
      stats: {
        participants: '100+ Students',
        duration: 'Weekly Sessions',
      },
      tags: ['Government Schools', 'Mentorship', 'Empowerment'],
      location: 'Palaj & Basan Schools',
      pageId: 'akanksha',
      pageUrl: 'activities.html',
    },
    {
      title: 'Nyasa Summer Camp',
      description:
        '10-day summer camp for 100+ children with activities including art, music, dance, science experiments, sports, and basic computer skills.',
      category: 'summer-camp',
      date: 'May 25 - June 3, 2023',
      image: './assets/images/summercamp/Copy of _DSC0324.JPG',
      stats: {
        participants: '100+ Children',
        duration: '10 Days',
      },
      tags: ['Art & Music', 'Science', 'Sports', 'Computers'],
      location: 'Government Primary School, Palaj',
      pageId: 'summer-camp-2023',
      pageUrl: 'activities.html',
    },
    {
      title: 'Sanjeevani Medical Camp',
      description:
        "8th Sanjeevani health camp serving 500+ people with basic health checkups, medication, cancer awareness stalls and children's games.",
      category: 'healthcare',
      date: 'February 4, 2024',
      image: './assets/images/sanjeevani/DSC07195.JPG',
      stats: {
        participants: '500+ Patients',
        duration: '1 Day',
      },
      tags: ['Health Checkups', 'Medication', 'Cancer Awareness'],
      location: 'Borij Village',
      pageId: 'sanjeevani',
      pageUrl: 'activities.html',
    },
    {
      title: 'Distribution Drive',
      description:
        'Organized four distribution drives benefiting construction workers, metro workers, and contractual staff with essential items.',
      category: 'community',
      date: 'Multiple Events 2024',
      image: './assets/images/other/dist.jpg',
      stats: {
        participants: '500+ Families',
        duration: 'Multiple Events',
      },
      tags: ['Clothing', 'Bedding', 'Footwear', 'Essentials'],
      location: 'Various Locations',
      pageId: 'distribution-drive',
      pageUrl: 'activities.html',
    },
    {
      title: 'Ganesh Chaturthi Celebration',
      description:
        'Basan Kids joined Ganesh Utsav celebrations at IITGN, creating portraits, inspired by Chandrayaan 2 theme, and receiving stationery kits.',
      category: 'cultural',
      date: 'September 2024',
      image: './assets/images/other/ganesh.jpg',
      stats: {
        participants: '50+ Children',
        duration: '1 Day',
      },
      tags: ['Cultural Celebration', 'Creative Activities', 'Chandrayaan 2'],
      location: 'IIT Gandhinagar',
      pageId: 'ganesh-chaturthi',
      pageUrl: 'activities.html',
    },
    {
      title: 'Wildlife Week Celebration',
      description:
        'Nature Fest with documentary screenings, interactive quizzes, wild species exhibitions, and fancy dress show for Palaj school children.',
      category: 'environment',
      date: 'October 2024',
      image: './assets/images/other/Wildlife_celeberation.png',
      stats: {
        participants: '80+ Students',
        duration: '1 Week',
      },
      tags: ['Wildlife Conservation', 'Documentary', 'Nature Fest'],
      location: 'Palaj Government School',
      pageId: 'wildlife-week',
      pageUrl: 'activities.html',
    },
    {
      title: 'Taare Zameen Par',
      description:
        'Star gazing session with Odyssey - The Astronomy Club. Children observed Jupiter and the moon through telescopes.',
      category: 'education',
      date: '2024',
      image: './assets/images/other/Taare_Zameen_Par.png',
      stats: {
        participants: '60+ Students',
        duration: 'Evening Session',
      },
      tags: ['Astronomy', 'Telescope', 'Odyssey Collaboration'],
      location: 'Basan Government School',
      pageId: 'taare-zameen-par',
      pageUrl: 'activities.html',
    },
  ]

  // Check if carousel elements exist
  const carouselTrack = document.querySelector('.activities-carousel-track')
  const carouselDots = document.querySelector('.carousel-dots')
  const prevBtn = document.querySelector('.carousel-control.prev')
  const nextBtn = document.querySelector('.carousel-control.next')

  if (!carouselTrack) {
    console.log('Activities carousel track not found, will retry in 500ms')
    setTimeout(window.initActivitiesCarousel, 500)
    return
  }

  console.log(
    'Initializing activities carousel with',
    activitiesData.length,
    'activities',
  )

  let currentSlide = 0
  let slidesPerView = getSlidesPerView()
  let totalSlides = activitiesData.length
  let isAnimating = false

  // Function to navigate to activity page
  function navigateToActivity(activity) {
    const targetPage = activity.pageUrl || 'activities.html'
    const targetId = activity.pageId

    // Store the target section ID in sessionStorage before navigation
    sessionStorage.setItem('scrollToActivity', targetId)

    // Navigate to the activities page
    window.location.href = targetPage
  }

  // Create activity cards
  function createActivityCards() {
    // Clear existing cards
    carouselTrack.innerHTML = ''

    // Duplicate cards for infinite loop effect
    const duplicatedData = [...activitiesData, ...activitiesData]

    duplicatedData.forEach((activity, index) => {
      const card = document.createElement('div')
      card.className = 'activity-card'
      card.setAttribute('data-index', index % totalSlides)
      card.setAttribute('data-activity-id', activity.pageId)

      // Create the learn more button with click handler
      const learnMoreBtn = document.createElement('a')
      learnMoreBtn.href = '#'
      learnMoreBtn.className = 'activity-link'
      learnMoreBtn.innerHTML = 'Learn More <i class="fas fa-arrow-right"></i>'

      // Add click event listener
      learnMoreBtn.addEventListener('click', (e) => {
        e.preventDefault()
        navigateToActivity(activity)
      })

      card.innerHTML = `
        <div class="activity-image-container">
          <img src="${activity.image}" alt="${activity.title}" class="activity-image" loading="lazy" onerror="this.src='./assets/images/placeholder.jpg'; this.onerror=null;">
          <div class="activity-overlay">
            <div class="activity-stats">
              <span class="stat">
                <i class="fas fa-users"></i>
                ${activity.stats.participants}
              </span>
              <span class="stat">
                <i class="fas fa-clock"></i>
                ${activity.stats.duration}
              </span>
            </div>
          </div>
        </div>
        
        <div class="activity-content">
          <h3 class="activity-title">${activity.title}</h3>
          <p class="activity-description">${activity.description}</p>
          
          <div class="activity-tags">
            ${activity.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
          </div>
          
          <div class="activity-footer">
            <div class="activity-location">
              <i class="fas fa-map-marker-alt"></i>
              <span>${activity.location}</span>
            </div>
          </div>
        </div>
      `

      // Append the learn more button to the footer
      const footer = card.querySelector('.activity-footer')
      footer.appendChild(learnMoreBtn)

      carouselTrack.appendChild(card)
    })

    // Create dots for navigation
    if (carouselDots) {
      createDots()
    }

    // Update carousel position
    updateCarousel()
  }

  function getCategoryLabel(category) {
    const labels = {
      education: 'Education',
      'summer-camp': 'Summer Camp',
      healthcare: 'Healthcare',
      community: 'Community',
      cultural: 'Cultural',
      environment: 'Environment',
    }
    return labels[category] || 'Activity'
  }

  function getSlidesPerView() {
    if (window.innerWidth < 768) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }

  function createDots() {
    carouselDots.innerHTML = ''
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button')
      dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`)
      dot.addEventListener('click', () => goToSlide(i))
      carouselDots.appendChild(dot)
    }
  }

  function updateCarousel() {
    if (isAnimating || !carouselTrack.children.length) return

    isAnimating = true

    const cardWidth = carouselTrack.children[0].offsetWidth + 32 // including gap
    const offset = -currentSlide * cardWidth

    carouselTrack.style.transform = `translateX(${offset}px)`

    // Update dots
    if (carouselDots) {
      const dots = document.querySelectorAll('.carousel-dot')
      const actualIndex = currentSlide % totalSlides
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === actualIndex)
      })
    }

    // Handle infinite loop
    setTimeout(() => {
      if (currentSlide >= totalSlides) {
        currentSlide = 0
        carouselTrack.style.transition = 'none'
        carouselTrack.style.transform = `translateX(0px)`
        setTimeout(() => {
          carouselTrack.style.transition = 'transform 0.5s ease-in-out'
        }, 50)
      }

      if (currentSlide < 0) {
        currentSlide = totalSlides - 1
        const offset = -currentSlide * cardWidth
        carouselTrack.style.transition = 'none'
        carouselTrack.style.transform = `translateX(${offset}px)`
        setTimeout(() => {
          carouselTrack.style.transition = 'transform 0.5s ease-in-out'
        }, 50)
      }

      isAnimating = false
    }, 500)
  }

  function goToSlide(index) {
    if (isAnimating) return
    currentSlide = index
    updateCarousel()
  }

  function nextSlide() {
    if (isAnimating) return
    currentSlide++
    updateCarousel()
  }

  function prevSlide() {
    if (isAnimating) return
    currentSlide--
    updateCarousel()
  }

  // Add event listeners if buttons exist
  if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide)
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide)
  }

  // Auto slide
  let autoSlideInterval = setInterval(nextSlide, 5000)

  // Pause auto slide on hover
  if (carouselTrack) {
    carouselTrack.addEventListener('mouseenter', () => {
      clearInterval(autoSlideInterval)
    })

    carouselTrack.addEventListener('mouseleave', () => {
      autoSlideInterval = setInterval(nextSlide, 5000)
    })
  }

  // Handle window resize
  let resizeTimeout
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      slidesPerView = getSlidesPerView()
      updateCarousel()
    }, 250)
  })

  // Initialize
  createActivityCards()

  // Touch/swipe support for mobile
  let touchStartX = 0
  let touchEndX = 0

  if (carouselTrack) {
    carouselTrack.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX
    })

    carouselTrack.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX
      handleSwipe()
    })
  }

  function handleSwipe() {
    const swipeThreshold = 50
    const diff = touchStartX - touchEndX

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }
}

// Auto-initialize with retry mechanism
function tryInitCarousel() {
  if (document.querySelector('.activities-carousel-track')) {
    window.initActivitiesCarousel()
  } else {
    console.log('Activities carousel container not ready, retrying in 300ms...')
    setTimeout(tryInitCarousel, 300)
  }
}

// Start trying to initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', tryInitCarousel)
} else {
  tryInitCarousel()
}
