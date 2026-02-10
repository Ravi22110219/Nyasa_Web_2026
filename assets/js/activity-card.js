// assets/js/activity-card.js
class ActivityCardComponent {
  constructor(containerId, config = {}) {
    this.container = document.getElementById(containerId)
    this.config = {
      layout: 'grid', // 'grid' or 'slider'
      limit: 6,
      filterBy: 'all',
      ...config,
    }

    this.activities = []
    this.currentIndex = 0

    if (this.container) {
      this.init()
    }
  }

  init() {
    this.loadActivities()
    this.displayActivities()
    this.setupEventListeners()
  }

  loadActivities() {
    this.activities = [
      {
        id: 1,
        title: 'Digital Literacy Workshop',
        description:
          'Empowering rural youth with essential computer skills and digital knowledge to bridge the technology gap in remote communities.',
        category: 'education',
        date: 'March 15, 2024',
        image:
          'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        location: 'Rural Schools, Maharashtra',
        participants: 50,
        duration: '2 Days',
        tags: ['Computer Basics', 'Internet Safety', 'Digital Skills'],
        status: 'completed',
      },
      {
        id: 2,
        title: 'Mobile Medical Camp',
        description:
          'Free health checkups and medical consultations for underserved communities in remote areas.',
        category: 'healthcare',
        date: 'February 28, 2024',
        image:
          'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        location: 'Rural Villages, Rajasthan',
        participants: 200,
        duration: '1 Day',
        tags: ['Health Checkup', 'Free Medicine', 'Doctor Consultation'],
        status: 'completed',
      },
      {
        id: 3,
        title: 'Clean Water Initiative',
        description:
          'Installing water purification systems in villages without access to clean drinking water.',
        category: 'environment',
        date: 'February 15, 2024',
        image:
          'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        location: 'Remote Villages, Bihar',
        participants: 15,
        duration: '1 Week',
        tags: ['Water Purification', 'Sanitation', 'Community Health'],
        status: 'ongoing',
      },
      {
        id: 4,
        title: 'Women Empowerment Program',
        description:
          'Skill development and entrepreneurship training for women in rural areas to achieve financial independence.',
        category: 'livelihood',
        date: 'January 30, 2024',
        image:
          'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        location: "Women's Centers, Uttar Pradesh",
        participants: 30,
        duration: '3 Months',
        tags: ['Skill Development', 'Entrepreneurship', 'Women Empowerment'],
        status: 'ongoing',
      },
      {
        id: 5,
        title: 'Tree Plantation Drive',
        description:
          'Community-led tree plantation initiative to combat climate change and restore local ecosystems.',
        category: 'environment',
        date: 'January 20, 2024',
        image:
          'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        location: 'Community Lands, Madhya Pradesh',
        participants: 100,
        duration: '1 Day',
        tags: ['Afforestation', 'Climate Action', 'Community Participation'],
        status: 'completed',
      },
      {
        id: 6,
        title: 'After-School Tutoring',
        description:
          'Supplementary education support for underprivileged children in urban slums to improve learning outcomes.',
        category: 'education',
        date: 'Ongoing',
        image:
          'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        location: 'Urban Slums, Delhi',
        participants: 80,
        duration: 'Ongoing',
        tags: ['Tutoring', 'Academic Support', 'Mentorship'],
        status: 'ongoing',
      },
      {
        id: 7,
        title: 'Sustainable Farming Workshop',
        description:
          'Training farmers in eco-friendly farming techniques to increase yield while protecting the environment.',
        category: 'agriculture',
        date: 'December 15, 2023',
        image:
          'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        location: "Farmers' Cooperatives, Punjab",
        participants: 45,
        duration: '2 Days',
        tags: ['Sustainable Farming', 'Organic Agriculture', 'Crop Management'],
        status: 'completed',
      },
      {
        id: 8,
        title: 'Disaster Relief Campaign',
        description:
          'Emergency relief and rehabilitation support for communities affected by natural disasters.',
        category: 'relief',
        date: 'November 2023',
        image:
          'https://images.unsplash.com/photo-1583321500900-82807e458f3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        location: 'Flood-affected Areas, Kerala',
        participants: 25,
        duration: '2 Weeks',
        tags: ['Disaster Relief', 'Emergency Support', 'Rehabilitation'],
        status: 'completed',
      },
    ]

    // Filter activities if needed
    if (this.config.filterBy !== 'all') {
      this.activities = this.activities.filter(
        (activity) => activity.category === this.config.filterBy,
      )
    }

    // Limit activities
    if (this.config.limit) {
      this.activities = this.activities.slice(0, this.config.limit)
    }
  }

  displayActivities() {
    if (!this.container) return

    if (this.config.layout === 'grid') {
      this.displayAsGrid()
    } else if (this.config.layout === 'slider') {
      this.displayAsSlider()
    }
  }

  displayAsGrid() {
    this.container.innerHTML = `
            <div class="activity-cards-grid">
                ${this.activities.map((activity) => this.createActivityCardHTML(activity)).join('')}
            </div>
        `
  }

  displayAsSlider() {
    this.container.innerHTML = `
            <div class="activity-cards-slider">
                <div class="activity-cards-track" id="activityTrack">
                    ${this.activities
                      .map(
                        (activity) => `
                        <div class="activity-card" style="flex: 0 0 300px;">
                            ${this.createActivityCardHTML(activity)}
                        </div>
                    `,
                      )
                      .join('')}
                </div>
                <button class="slider-nav prev" id="sliderPrev">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>
                </button>
                <button class="slider-nav next" id="sliderNext">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                </button>
            </div>
        `

    this.track = document.getElementById('activityTrack')
    this.setupSliderNavigation()
  }

  createActivityCardHTML(activity) {
    return `
            <div class="activity-card" data-id="${activity.id}" data-category="${activity.category}">
                <div class="activity-card-header">
                    <div class="activity-category-badge" data-category="${activity.category}">
                        ${this.getCategoryLabel(activity.category)}
                    </div>
                    <div class="activity-date">${activity.date}</div>
                </div>
                
                <div class="activity-image-container">
                    <img src="${activity.image}" alt="${activity.title}" class="activity-image">
                    <div class="activity-overlay">
                        <div class="activity-stats">
                            <span class="stat">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                                    <circle cx="9" cy="7" r="4"/>
                                    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                                    <path d="M16 3.13a4 4 0 010 7.75"/>
                                </svg>
                                ${activity.participants}+ Participants
                            </span>
                            <span class="stat">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                    <line x1="16" y1="2" x2="16" y2="6"/>
                                    <line x1="8" y1="2" x2="8" y2="6"/>
                                    <line x1="3" y1="10" x2="21" y2="10"/>
                                </svg>
                                ${activity.duration}
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            <span>${activity.location}</span>
                        </div>
                        <a href="activities.html#activity-${activity.id}" class="activity-link">
                            Learn More
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        `
  }

  getCategoryLabel(category) {
    const labels = {
      education: 'Education',
      healthcare: 'Healthcare',
      environment: 'Environment',
      livelihood: 'Livelihood',
      agriculture: 'Agriculture',
      relief: 'Disaster Relief',
      community: 'Community',
    }
    return labels[category] || category
  }

  setupEventListeners() {
    // Add click event to activity cards
    this.container.addEventListener('click', (e) => {
      const activityCard = e.target.closest('.activity-card')
      if (activityCard) {
        const activityId = activityCard.dataset.id
        this.handleActivityClick(activityId)
      }
    })
  }

  setupSliderNavigation() {
    const prevBtn = document.getElementById('sliderPrev')
    const nextBtn = document.getElementById('sliderNext')
    const cardWidth = 300
    const gap = 16
    const totalWidth = cardWidth + gap

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.currentIndex = Math.max(0, this.currentIndex - 1)
        this.updateSliderPosition(totalWidth)
      })
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const maxIndex = this.activities.length - 3 // Show 3 cards at a time
        this.currentIndex = Math.min(maxIndex, this.currentIndex + 1)
        this.updateSliderPosition(totalWidth)
      })
    }

    // Update button states
    this.updateSliderButtons(totalWidth)
  }

  updateSliderPosition(totalWidth) {
    if (this.track) {
      const translateX = -this.currentIndex * totalWidth
      this.track.style.transform = `translateX(${translateX}px)`
      this.updateSliderButtons(totalWidth)
    }
  }

  updateSliderButtons(totalWidth) {
    const prevBtn = document.getElementById('sliderPrev')
    const nextBtn = document.getElementById('sliderNext')
    const maxIndex = this.activities.length - 3

    if (prevBtn) {
      prevBtn.disabled = this.currentIndex === 0
      prevBtn.style.opacity = this.currentIndex === 0 ? '0.5' : '1'
    }

    if (nextBtn) {
      nextBtn.disabled = this.currentIndex >= maxIndex
      nextBtn.style.opacity = this.currentIndex >= maxIndex ? '0.5' : '1'
    }
  }

  handleActivityClick(activityId) {
    // Navigate to activities page with the specific activity
    window.location.href = `activities.html#activity-${activityId}`
  }
}

// Initialize activity cards on home page
if (document.querySelector('.activities-preview')) {
  document.addEventListener('DOMContentLoaded', () => {
    new ActivityCardComponent('activitiesContainer', {
      layout: 'slider',
      limit: 6,
    })
  })
}

// Initialize activity cards on activities page
if (document.querySelector('.activities-grid')) {
  document.addEventListener('DOMContentLoaded', () => {
    new ActivityCardComponent('activitiesGrid', {
      layout: 'grid',
      limit: 0, // Show all
    })
  })
}
