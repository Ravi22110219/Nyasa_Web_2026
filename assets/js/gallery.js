// assets/js/gallery.js
class Gallery {
  constructor() {
    this.galleryGrid = document.querySelector('.gallery-grid')
    this.filterButtons = document.querySelectorAll('.filter-btn')
    this.loadMoreBtn = document.getElementById('load-more')
    this.lightbox = document.getElementById('lightbox')
    this.lightboxImage = document.getElementById('lightbox-image')
    this.lightboxCaption = document.getElementById('lightbox-caption')
    this.closeLightbox = document.getElementById('close-lightbox')
    this.prevBtn = document.getElementById('prev-btn')
    this.nextBtn = document.getElementById('next-btn')

    this.currentFilter = 'all'
    this.currentPage = 1
    this.itemsPerPage = 12
    this.allImages = []
    this.currentImages = []
    this.currentIndex = 0

    this.init()
  }

  init() {
    this.createGalleryImages()
    this.setupEventListeners()
    this.loadImages()
  }

  createGalleryImages() {
    this.allImages = [
      // Education
      {
        id: 1,
        category: 'education',
        title: 'Chetana',
        date: '2025-03-15',
        url: '../../assets/images/gallery/edu.jpg',
      },
      {
        id: 2,
        category: 'education',
        title: 'ART & CRAFT',
        date: '2024-02-28',
        url: '../../assets/images/gallery/edu1.jpg',
      },
      {
        id: 3,
        category: 'education',
        title: 'Library Opening',
        date: '2024-02-10',
        url: '../../assets/images/gallery/edu2.jpg',
      },

      // Healthcare
      {
        id: 4,
        category: 'healthcare',
        title: 'Summer Camp',
        date: '2026-01-11',
        url: '../../assets/images/gallery/health.JPG',
      },
      {
        id: 5,
        category: 'healthcare',
        title: 'Winter Camp',
        date: '2025-12-16',
        url: '../../assets/images/gallery/health1.jpg',
      },
      {
        id: 6,
        category: 'healthcare',
        title: 'Health Awareness',
        date: '2024-02-15',
        url: '../../assets/images/gallery/health2.jpg',
      },

      // Community
      {
        id: 7,
        category: 'community',
        title: 'Community Meeting',
        date: '2024-03-25',
        url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 8,
        category: 'community',
        title: 'Village Development',
        date: '2024-03-10',
        url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 9,
        category: 'community',
        title: 'Cultural Event',
        date: '2024-02-20',
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      },

      // Distribution
      {
        id: 10,
        category: 'distribution',
        title: 'Distribution',
        date: '2024-03-18',
        url: '../../assets/images/gallery/dist.jpg',
      },
      {
        id: 11,
        category: 'distribution',
        title: 'Distribution',
        date: '2024-03-01',
        url: '../../assets/images/gallery/',
      },
      {
        id: 12,
        category: 'distribution',
        title: 'Distribution',
        date: '2024-02-12',
        url: '../../assets/images/gallery/',
      },

      // Events
      {
        id: 13,
        category: 'events',
        title: '26 January',
        date: '2024-01-26',
        url: '../../assets/images/gallery/15aug.JPG',
      },
      {
        id: 14,
        category: 'events',
        title: '26 January',
        date: '2024-01-26',
        url: '../../assets/images/gallery/15aug1.JPG',
      },
      {
        id: 15,
        category: 'events',
        title: '26 January',
        date: '2024-01-26',
        url: '../../assets/images/gallery/15aug2.JPG',
      },

      // More images for pagination
      {
        id: 16,
        category: 'education',
        title: 'Science Fair',
        date: '2024-01-05',
        url: '../../assets/images/gallery/',
      },
      {
        id: 17,
        category: 'healthcare',
        title: 'Eye Checkup Camp',
        date: '2023-12-20',
        url: '../../assets/images/gallery/',
      },
      {
        id: 18,
        category: 'community',
        title: 'Skill Training',
        date: '2023-12-10',
        url: '../../assets/images/gallery/',
      },
    ]
  }

  setupEventListeners() {
    // Filter buttons
    this.filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => this.handleFilterClick(btn))
    })

    // Load more button
    if (this.loadMoreBtn) {
      this.loadMoreBtn.addEventListener('click', () => this.loadMoreImages())
    }

    // Lightbox controls
    if (this.closeLightbox) {
      this.closeLightbox.addEventListener('click', () =>
        this.closeLightboxModal(),
      )
    }

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.showPrevImage())
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.showNextImage())
    }

    // Close lightbox on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeLightboxModal()
      } else if (e.key === 'ArrowLeft') {
        this.showPrevImage()
      } else if (e.key === 'ArrowRight') {
        this.showNextImage()
      }
    })

    // Close lightbox on background click
    this.lightbox.addEventListener('click', (e) => {
      if (e.target === this.lightbox) {
        this.closeLightboxModal()
      }
    })
  }

  handleFilterClick(button) {
    // Update active button
    this.filterButtons.forEach((btn) => btn.classList.remove('active'))
    button.classList.add('active')

    // Update filter
    this.currentFilter = button.dataset.filter
    this.currentPage = 1

    // Clear grid and load filtered images
    this.galleryGrid.innerHTML = ''
    this.loadImages()
  }

  loadImages() {
    // Filter images based on current filter
    let filteredImages = this.allImages
    if (this.currentFilter !== 'all') {
      filteredImages = this.allImages.filter(
        (img) => img.category === this.currentFilter,
      )
    }

    // Calculate start and end indices for current page
    const startIndex = (this.currentPage - 1) * this.itemsPerPage
    const endIndex = startIndex + this.itemsPerPage
    const pageImages = filteredImages.slice(startIndex, endIndex)

    // Update current images for lightbox
    this.currentImages = filteredImages

    // Check if we have more images to load
    const hasMoreImages = endIndex < filteredImages.length
    this.loadMoreBtn.style.display = hasMoreImages ? 'block' : 'none'

    // Create gallery items
    pageImages.forEach((image, index) => {
      const galleryItem = this.createGalleryItem(image, startIndex + index)
      this.galleryGrid.appendChild(galleryItem)
    })

    // Lazy load images
    this.lazyLoadImages()
  }

  createGalleryItem(image, globalIndex) {
    const item = document.createElement('div')
    item.className = 'gallery-item'
    item.dataset.category = image.category
    item.dataset.index = globalIndex

    const formattedDate = new Date(image.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })

    item.innerHTML = `
            <img src="${image.url}" alt="${image.title}" class="gallery-image" loading="lazy">
            <div class="gallery-overlay">
                <span class="gallery-category">${image.category.charAt(0).toUpperCase() + image.category.slice(1)}</span>
                <h4 class="gallery-title">${image.title}</h4>
                <span class="gallery-date">${formattedDate}</span>
            </div>
        `

    // Add click event for lightbox
    item.addEventListener('click', () => this.openLightbox(globalIndex))

    return item
  }

  lazyLoadImages() {
    const images = this.galleryGrid.querySelectorAll('.gallery-image')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.src
          observer.unobserve(img)
        }
      })
    })

    images.forEach((img) => observer.observe(img))
  }

  loadMoreImages() {
    this.currentPage++
    this.loadImages()
  }

  openLightbox(index) {
    this.currentIndex = parseInt(index)
    this.updateLightbox()
    this.lightbox.classList.add('active')
    document.body.style.overflow = 'hidden'
  }

  closeLightboxModal() {
    this.lightbox.classList.remove('active')
    document.body.style.overflow = 'auto'
  }

  showPrevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--
      this.updateLightbox()
    }
  }

  showNextImage() {
    if (this.currentIndex < this.currentImages.length - 1) {
      this.currentIndex++
      this.updateLightbox()
    }
  }

  updateLightbox() {
    const image = this.currentImages[this.currentIndex]

    if (!image) return

    this.lightboxImage.src = image.url
    this.lightboxImage.alt = image.title

    const formattedDate = new Date(image.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

    this.lightboxCaption.innerHTML = `
            <h3>${image.title}</h3>
            <p>${formattedDate} • ${image.category.charAt(0).toUpperCase() + image.category.slice(1)}</p>
        `
  }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Gallery()
})
