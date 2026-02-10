// assets/js/sponsor.js
class SponsorComponent {
  constructor() {
    this.sponsorsGrid = document.getElementById('sponsorsGrid')
    this.sponsorModal = document.getElementById('sponsorModal')
    this.modalClose = document.getElementById('modalClose')
    this.modalCloseBtn = document.getElementById('modalCloseBtn')

    this.sponsors = []

    this.init()
  }

  init() {
    this.loadSponsors()
    this.setupEventListeners()
  }

  loadSponsors() {
    this.sponsors = [
      {
        id: 1,
        name: 'TechCorp Solutions',
        category: 'Technology Partner',
        logo: 'https://via.placeholder.com/200x100/0B1F3A/FFFFFF?text=TechCorp',
        website: 'https://techcorp.example.com',
        description:
          'Leading technology company providing digital infrastructure and solutions for our education programs. TechCorp has been instrumental in setting up computer labs in rural schools.',
      },
      {
        id: 2,
        name: 'GreenEarth Foundation',
        category: 'Environmental Partner',
        logo: 'https://via.placeholder.com/200x100/3A86FF/FFFFFF?text=GreenEarth',
        website: 'https://greenearth.example.com',
        description:
          'Environmental organization supporting our tree plantation drives and sustainable farming initiatives. GreenEarth provides expertise and funding for ecological conservation projects.',
      },
      {
        id: 3,
        name: 'EduGrowth Partners',
        category: 'Education Partner',
        logo: 'https://via.placeholder.com/200x100/FF6B35/FFFFFF?text=EduGrowth',
        website: 'https://edugrowth.example.com',
        description:
          'Educational trust that collaborates on curriculum development and teacher training programs. EduGrowth helps us create engaging learning materials for rural schools.',
      },
      {
        id: 4,
        name: 'HealthFirst Corporation',
        category: 'Healthcare Partner',
        logo: 'https://via.placeholder.com/200x100/4CAF50/FFFFFF?text=HealthFirst',
        website: 'https://healthfirst.example.com',
        description:
          'Healthcare provider supporting our medical camps and health awareness programs. HealthFirst supplies medicines and medical equipment for rural healthcare initiatives.',
      },
      {
        id: 5,
        name: 'Community Builders Inc',
        category: 'Infrastructure Partner',
        logo: 'https://via.placeholder.com/200x100/9C27B0/FFFFFF?text=Community+Builders',
        website: 'https://communitybuilders.example.com',
        description:
          'Construction and development company assisting in building community centers and school infrastructure. Community Builders provides materials and expertise for construction projects.',
      },
      {
        id: 6,
        name: 'Future Leaders Fund',
        category: 'Scholarship Partner',
        logo: 'https://via.placeholder.com/200x100/FF9800/FFFFFF?text=Future+Leaders',
        website: 'https://futureleaders.example.com',
        description:
          'Educational fund providing scholarships for underprivileged children. Future Leaders Fund supports higher education opportunities for deserving students.',
      },
      {
        id: 7,
        name: 'CleanWater Systems',
        category: 'Water Solutions Partner',
        logo: 'https://via.placeholder.com/200x100/00BCD4/FFFFFF?text=CleanWater',
        website: 'https://cleanwater.example.com',
        description:
          'Water purification technology company providing clean water solutions for rural communities. CleanWater Systems installs and maintains water filtration systems.',
      },
      {
        id: 8,
        name: 'AgriGrowth Solutions',
        category: 'Agriculture Partner',
        logo: 'https://via.placeholder.com/200x100/8BC34A/FFFFFF?text=AgriGrowth',
        website: 'https://agrigrowth.example.com',
        description:
          'Agricultural technology firm supporting sustainable farming practices. AgriGrowth provides training and equipment for modern farming techniques.',
      },
    ]

    this.displaySponsors()
  }

  displaySponsors() {
    if (!this.sponsorsGrid) return

    this.sponsorsGrid.innerHTML = this.sponsors
      .map(
        (sponsor) => `
            <div class="sponsor-item" data-id="${sponsor.id}">
                <img src="${sponsor.logo}" alt="${sponsor.name}" class="sponsor-logo">
                <h4 class="sponsor-name">${sponsor.name}</h4>
                <span class="sponsor-category">${sponsor.category}</span>
            </div>
        `,
      )
      .join('')

    // Add click event to each sponsor item
    document.querySelectorAll('.sponsor-item').forEach((item) => {
      item.addEventListener('click', () => {
        const sponsorId = parseInt(item.dataset.id)
        this.openSponsorModal(sponsorId)
      })
    })
  }

  setupEventListeners() {
    // Close modal on close button click
    if (this.modalClose) {
      this.modalClose.addEventListener('click', () => {
        this.closeSponsorModal()
      })
    }

    if (this.modalCloseBtn) {
      this.modalCloseBtn.addEventListener('click', () => {
        this.closeSponsorModal()
      })
    }

    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
      if (
        e.key === 'Escape' &&
        this.sponsorModal.classList.contains('active')
      ) {
        this.closeSponsorModal()
      }
    })

    // Close modal on outside click
    this.sponsorModal.addEventListener('click', (e) => {
      if (e.target === this.sponsorModal) {
        this.closeSponsorModal()
      }
    })
  }

  openSponsorModal(sponsorId) {
    const sponsor = this.sponsors.find((s) => s.id === sponsorId)
    if (!sponsor) return

    // Update modal content
    document.getElementById('modalLogo').src = sponsor.logo
    document.getElementById('modalLogo').alt = sponsor.name
    document.getElementById('modalName').textContent = sponsor.name
    document.getElementById('modalCategory').textContent = sponsor.category
    document.getElementById('modalDescription').textContent =
      sponsor.description
    document.getElementById('modalWebsite').href = sponsor.website

    // Show modal
    this.sponsorModal.classList.add('active')
    document.body.style.overflow = 'hidden'
  }

  closeSponsorModal() {
    this.sponsorModal.classList.remove('active')
    document.body.style.overflow = 'auto'
  }
}

// Initialize sponsor component
if (document.querySelector('.sponsors-section')) {
  document.addEventListener('DOMContentLoaded', () => {
    new SponsorComponent()
  })
}
