// Complete News Data
const newsData = [
  {
    id: 1,
    date: '24-06-2023',
    title: 'Rajasthan Patrika',
    description:
      'Summer Camp at IIT: Children learnt skills to make soft toys and clay vessels',
    image: 'assets/images/news/rajsthan_patrika.png',
    link: 'https://epaper.patrika.com/Ahmedabad?eid=55&edate=24/06/2023&pgid=1011152&device=desktop&view=2',
    category: 'Newspaper',
    type: 'news',
  },
  {
    id: 2,
    date: '11-06-2023',
    title: 'Gujarat Samachar',
    description:
      'Two social outreach programmes of IITGN help disadvantaged children, women, and youth find their hidden potential',
    image: 'assets/images/news/gujratsmash3.png',
    link: '#',
    category: 'Newspaper',
    type: 'news',
  },
  {
    id: 3,
    date: '11-06-2023',
    title: 'Gujarat Samachar – Gandhinagar',
    description: 'Camp for children, women, and youth at IIT',
    image: 'assets/images/news/gujratsmash2.png',
    link: '#',
    category: 'Newspaper',
    type: 'news',
  },
  {
    id: 4,
    date: '11-06-2023',
    title: 'Sandesh Gandhinagar',
    description:
      'Unique initiative by IIT Gandhinagar: Campaign to find hidden potential of disadvantaged children through Summer Camp',
    image: 'assets/images/news/sandeshgn.png',
    link: '#',
    category: 'Newspaper',
    type: 'news',
  },
  {
    id: 5,
    date: '13-06-2023',
    title: 'Sandesh City Life',
    description:
      "‘Anand mela’ held at IIT Gandhinagar – Children's creativity got wings through fun with learning.",
    image: 'assets/images/news/city_life.png',
    link: 'https://sandesh.com/epaper/sub?name=City%20Life&path=epaper/2023/06/13/c-923841686602933.jpeg&date=2023-06-13',
    category: 'Newspaper',
    type: 'news',
  },
  {
    id: 6,
    date: '13-06-2023',
    title: 'Ahmedabad Mirror',
    description: "IITGN's successful outreach programmes",
    image: 'assets/images/news/Ahmdamirror.png',
    link: '#',
    category: 'Newspaper',
    type: 'news',
  },
  {
    id: 7,
    date: '28-04-2023',
    title: 'Gujarat Samachar Plus',
    description: 'Nyasa – Imparting education to needy children',
    image: 'assets/images/news/gujarati_smachar.png',
    link: 'https://epaper.gujaratsamachar.com/view_article/gujarat-samachar-plus/28-04-2023/1/102689',
    category: 'Newspaper',
    type: 'news',
  },
  {
    id: 8,
    date: '2022',
    title: 'UNN',
    description:
      'Hillary Clinton during visit to IIT Gandhinagar, She also visit the Sanjeevani Health Camp organized by Nyasa at Palaj village...',
    image: 'assets/images/news/unn.png',
    link: 'https://theunn.com/hillary-clinton-during-visit-to-iit-gandhinagar-urges-students-to-shut-off-social-media-to-have-time-for-self-reflection/',
    category: 'Online News',
    type: 'news',
  },
  {
    id: 9,
    date: '2022',
    title: 'India News England News',
    description:
      'Hillary Clinton during visit to IIT Gandhinagar, She also visit the Sanjeevani Health Camp organized by Nyasa at Palaj village...',
    image: 'assets/images/news/INEN.png',
    link: 'https://indianewengland.com/hillary-clinton-visits-iit-gandhinagar-urges-students-to-shut-off-social-media-to-have-time-for-self-reflection/',
    category: 'Online News',
    type: 'news',
  },
  {
    id: 10,
    date: '2022',
    title: 'The Telegraph',
    description:
      'IIT Gandhinagar summer camp for children from villages, construction ...',
    image: 'assets/images/news/telegraph.png',
    link: 'https://www.telegraphindia.com/edugraph/news/nyasa-iitgn-holds-summer-camp-for-children-from-villages-construction-workers-colonies/cid/1869262',
    category: 'Online News',
    type: 'news',
  },
  {
    id: 11,
    date: '2022',
    title: 'Vibes of India',
    description:
      'Nyasa-IITGN Organised Summer Camp For Under Privileged Children',
    image: 'assets/images/news/vibes_of_india.png',
    link: 'https://www.vibesofindia.com/nyasa-iitgn-organised-summer-camp-for-under-privileged-children/',
    category: 'Online News',
    type: 'news',
  },
  {
    id: 12,
    date: '2022',
    title: 'India Education',
    description:
      'Nyasa-IIT Gandhinagar Organised A 10-Day Summer Camp For Children From ...',
    image: 'assets/images/news/india_education.png',
    link: 'https://indiaeducationdiary.in/nyasa-iit-gandhinagar-organised-a-10-day-summer-camp-for-children-from-neighbouring-villages-and-iitgn-construction-workers-colonies/',
    category: 'Online News',
    type: 'news',
  },
]

// Volunteer Stories Data
const storiesData = [
  {
    id: 101,
    date: '15-03-2024',
    title: 'My 4-Year Journey with Nyasa',
    description:
      'From a nervous first-year volunteer to the Communication Team Coordinator in fourth year - this heartfelt account captures the transformation...',
    image: 'assets/images/team/Ravi Kumawat.jpg',
    link: 'blog-post.html',
    category: 'Volunteer Story',
    type: 'story',
  },
  {
    id: 102,
    date: '10-02-2024',
    title: 'Teaching at Akanksha',
    description:
      'How teaching children from nearby villages changed my perspective on education and community service.',
    image: 'assets/images/blog/teaching.jpg',
    link: 'story-education.html',
    category: 'Volunteer Story',
    type: 'story',
  },
  {
    id: 103,
    date: '05-01-2024',
    title: 'Summer Camp Experience',
    description:
      'Organizing and participating in the annual summer camp - a journey of learning and growth.',
    image: 'assets/images/blog/summer-camp.jpg',
    link: 'story-summer-camp.html',
    category: 'Volunteer Story',
    type: 'story',
  },
]

// Blog Posts Data
const blogPostsData = [
  {
    id: 201,
    date: '20-03-2024',
    title: 'The Impact of Community Service',
    description:
      'How small acts of service can create lasting change in communities.',
    image: 'assets/images/blog/impact.jpg',
    link: 'blog-impact.html',
    category: 'Insights',
    type: 'blog',
  },
  {
    id: 202,
    date: '15-02-2024',
    title: 'Education for All',
    description: 'Breaking barriers through inclusive education initiatives.',
    image: 'assets/images/blog/education.jpg',
    link: 'blog-education.html',
    category: 'Insights',
    type: 'blog',
  },
]

// Reports data (PDF reports)
const reportsData = [
  {
    id: 301,
    title: 'Annual Impact Report 2023',
    description:
      "Complete overview of Nyasa's activities and community impact for the year 2023",
    year: '2023',
    pages: '45',
    download: 'reports/annual-report-2023.pdf',
    date: '31-12-2023',
  },
  {
    id: 302,
    title: 'Summer Camp Analysis',
    description:
      'Detailed analysis and outcomes from the 2023 Summer Camp initiative',
    year: '2023',
    pages: '28',
    download: 'reports/summer-camp-2023.pdf',
    date: '30-06-2023',
  },
  {
    id: 303,
    title: 'Health Camp Report',
    description:
      'Report on Sanjeevani Health Camp medical services and beneficiaries',
    year: '2023',
    pages: '32',
    download: 'reports/health-camp-2023.pdf',
    date: '15-05-2023',
  },
  {
    id: 304,
    title: 'Education Program Review',
    description:
      "Assessment of Akanksha education program's impact on children",
    year: '2023',
    pages: '38',
    download: 'reports/education-program-2023.pdf',
    date: '20-04-2023',
  },
]

// Function to create news cards for blog landing page
function createNewsCards() {
  const newsGrid = document.querySelector('.news-grid')
  if (!newsGrid) return

  // Show only first 4 news items on landing page
  const displayNews = newsData.slice(0, 4)

  displayNews.forEach((news) => {
    const newsCard = document.createElement('article')
    newsCard.className = 'news-card'

    newsCard.innerHTML = `
      <div class="news-image">
        <img src="${news.image}" alt="${news.title}" loading="lazy">
      </div>
      <div class="news-content">
        <div class="news-date">
          <i class="far fa-calendar"></i>
          <span>${news.date}</span>
        </div>
        <h3 class="news-title">${news.title}</h3>
        <p class="news-description">${news.description}</p>
        <div class="news-category">${news.category}</div>
        <a href="${news.link}" target="_blank" class="news-link">
          <span>Read Article</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `

    newsGrid.appendChild(newsCard)
  })
}

// Function to create report cards
function createReportCards() {
  const reportsGrid = document.querySelector('.reports-grid')
  if (!reportsGrid) return

  reportsData.forEach((report) => {
    const reportCard = document.createElement('div')
    reportCard.className = 'report-card'

    reportCard.innerHTML = `
      <div class="report-icon">
        <i class="fas fa-file-pdf"></i>
      </div>
      <h3 class="report-title">${report.title}</h3>
      <p class="report-details">${report.description}</p>
      <div class="report-meta">
        <span>Year: ${report.year}</span>
        <span>•</span>
        <span>${report.pages} Pages</span>
      </div>
      <a href="${report.download}" target="_blank" class="report-download">
        <span>Download PDF</span>
        <i class="fas fa-download"></i>
      </a>
    `

    reportsGrid.appendChild(reportCard)
  })
}

// Smooth scroll for navigation
function initSmoothScroll() {
  const scrollLinks = document.querySelectorAll('a[href^="#"]')

  scrollLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href')

      if (href === '#') return

      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })

        // Update URL without scrolling
        history.pushState(null, null, href)
      }
    })
  })
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  createNewsCards()
  createReportCards()
  initSmoothScroll()

  // Add some CSS for report meta
  const style = document.createElement('style')
  style.textContent = `
    .news-category {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background-color: var(--primary-light);
      color: var(--primary-color);
      border-radius: var(--radius-full);
      font-size: 0.8rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
    }
    
    .report-meta {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      color: var(--gray-dark);
      font-size: 0.9rem;
      margin-bottom: var(--space-lg);
      font-weight: 500;
    }
    
    .report-meta span:nth-child(2) {
      opacity: 0.5;
    }
  `
  document.head.appendChild(style)
})
