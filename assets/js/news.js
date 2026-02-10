// All news data from blog-landing.js (copied here for completeness in news.html)
const allNewsData = [
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
      "‘Anand mela' held at IIT Gandhinagar – Children's creativity got wings through fun with learning.",
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

// Function to create all news articles
function createAllNewsArticles() {
  const newsContainer = document.getElementById('newsContainer')
  if (!newsContainer) return

  allNewsData.forEach((news) => {
    const article = document.createElement('article')
    article.className = 'news-article'
    article.setAttribute('data-category', 'all')

    article.innerHTML = `
      <div class="article-image">
        <img src="${news.image}" alt="${news.title}" loading="lazy">
      </div>
      <div class="article-content">
        <div class="article-header">
          <div class="article-date">
            <i class="far fa-calendar"></i>
            <span>${news.date}</span>
          </div>
          <div class="article-category">${news.category}</div>
        </div>
        <h3 class="article-title">${news.title}</h3>
        <p class="article-description">${news.description}</p>
        <a href="${news.link}" ${news.link.startsWith('http') ? 'target="_blank"' : ''} class="article-link">
          <span>${news.link.startsWith('http') ? 'Read Article' : 'Read More'}</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `

    newsContainer.appendChild(article)
  })
}

// Filter functionality
function initNewsFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn')
  const newsArticles = document.querySelectorAll('.news-article')

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove('active'))

      // Add active class to clicked button
      button.classList.add('active')

      const category = button.getAttribute('data-category')

      // Filter articles
      newsArticles.forEach((article) => {
        if (category === 'all') {
          article.style.display = 'flex'
        } else {
          if (article.getAttribute('data-category') === category) {
            article.style.display = 'flex'
          } else {
            article.style.display = 'none'
          }
        }
      })
    })
  })
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  createAllNewsArticles()
  initNewsFilter()
})
