// assets/js/report.js
class ReportsPage {
  constructor() {
    this.reportsContainer = document.getElementById('reportsContainer')
    this.yearFilter = document.getElementById('yearFilter')
    this.categoryFilter = document.getElementById('categoryFilter')

    this.allReports = []

    this.init()
  }

  init() {
    this.loadReports()
    this.setupFilters()
  }

  loadReports() {
    this.allReports = [
      {
        id: 1,
        title: 'Annual Impact Report 2023',
        excerpt:
          'Comprehensive review of our initiatives, achievements, and financials for the year 2023.',
        date: 'January 15, 2024',
        author: 'Nyasa Research Team',
        category: 'annual',
        year: '2024',
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        pdfUrl: '#',
        pages: 42,
        downloads: 1250,
      },
      {
        id: 2,
        title: 'Education Program Evaluation 2023',
        excerpt:
          'Detailed analysis of our digital literacy program impact across 50 rural schools.',
        date: 'December 20, 2023',
        author: 'Dr. Anjali Sharma',
        category: 'education',
        year: '2023',
        image:
          'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        pdfUrl: '#',
        pages: 28,
        downloads: 890,
      },
      {
        id: 3,
        title: 'Healthcare Outreach Report 2023',
        excerpt:
          'Analysis of mobile medical units performance and patient outcomes in remote areas.',
        date: 'November 10, 2023',
        author: 'Medical Team',
        category: 'healthcare',
        year: '2023',
        image:
          'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        pdfUrl: '#',
        pages: 35,
        downloads: 760,
      },
      {
        id: 4,
        title: 'Environmental Impact Assessment 2023',
        excerpt:
          'Assessment of tree plantation drives and their ecological impact over 5 years.',
        date: 'October 5, 2023',
        author: 'Environment Team',
        category: 'environment',
        year: '2023',
        image:
          'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        pdfUrl: '#',
        pages: 31,
        downloads: 620,
      },
      {
        id: 5,
        title: 'Annual Financial Report 2023',
        excerpt:
          'Complete financial statements and audit report for the fiscal year 2023.',
        date: 'September 30, 2023',
        author: 'Finance Team',
        category: 'financial',
        year: '2023',
        image:
          'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        pdfUrl: '#',
        pages: 48,
        downloads: 540,
      },
      {
        id: 6,
        title: 'Annual Impact Report 2022',
        excerpt:
          'Comprehensive review of our initiatives, achievements, and financials for the year 2022.',
        date: 'January 15, 2023',
        author: 'Nyasa Research Team',
        category: 'annual',
        year: '2023',
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        pdfUrl: '#',
        pages: 38,
        downloads: 1100,
      },
      {
        id: 7,
        title: 'Community Development Report 2022',
        excerpt:
          'Analysis of community-led development projects and their sustainability.',
        date: 'November 20, 2022',
        author: 'Community Team',
        category: 'community',
        year: '2022',
        image:
          'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        pdfUrl: '#',
        pages: 27,
        downloads: 480,
      },
      {
        id: 8,
        title: 'Women Empowerment Program Review 2022',
        excerpt:
          'Evaluation of skill development programs for women in rural communities.',
        date: 'August 15, 2022',
        author: 'Livelihood Team',
        category: 'livelihood',
        year: '2022',
        image:
          'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        pdfUrl: '#',
        pages: 33,
        downloads: 590,
      },
    ]

    this.displayReports(this.allReports)
  }

  setupFilters() {
    // Year filter
    if (this.yearFilter) {
      this.yearFilter.addEventListener('change', () => {
        this.filterReports()
      })
    }

    // Category filter
    if (this.categoryFilter) {
      this.categoryFilter.addEventListener('change', () => {
        this.filterReports()
      })
    }
  }

  filterReports() {
    const year = this.yearFilter ? this.yearFilter.value : 'all'
    const category = this.categoryFilter ? this.categoryFilter.value : 'all'

    let filteredReports = this.allReports

    if (year !== 'all') {
      filteredReports = filteredReports.filter((report) => report.year === year)
    }

    if (category !== 'all') {
      filteredReports = filteredReports.filter(
        (report) => report.category === category,
      )
    }

    this.displayReports(filteredReports)
  }

  displayReports(reports) {
    if (!this.reportsContainer) return

    if (reports.length === 0) {
      this.reportsContainer.innerHTML = `
                <div class="no-results">
                    <h3>No reports found</h3>
                    <p>Try adjusting your filters to find what you're looking for.</p>
                </div>
            `
      return
    }

    this.reportsContainer.innerHTML = reports
      .map(
        (report) => `
            <div class="report-card">
                <div class="report-image" style="background-image: url('${report.image}')"></div>
                <div class="report-content">
                    <div class="report-header">
                        <h3 class="report-title">${report.title}</h3>
                        <div class="report-tags">
                            <span class="report-tag">${report.year}</span>
                            <span class="report-tag">${report.category.charAt(0).toUpperCase() + report.category.slice(1)}</span>
                        </div>
                    </div>
                    <p class="report-excerpt">${report.excerpt}</p>
                    <div class="report-meta">
                        <div class="meta-left">
                            <span class="report-date">${report.date}</span>
                            <span class="report-author">${report.author}</span>
                        </div>
                        <div class="meta-right">
                            <span class="report-downloads">${report.downloads.toLocaleString()} downloads</span>
                        </div>
                    </div>
                    <div class="report-actions">
                        <a href="${report.pdfUrl}" class="btn btn-primary btn-icon" download>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="7 10 12 15 17 10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                            Download PDF (${report.pages} pages)
                        </a>
                        <a href="#" class="btn btn-outline btn-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                            Preview
                        </a>
                    </div>
                </div>
            </div>
        `,
      )
      .join('')
  }
}

// Initialize reports page
document.addEventListener('DOMContentLoaded', () => {
  new ReportsPage()
})
