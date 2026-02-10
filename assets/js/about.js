// assets/js/about.js
class AboutPage {
  constructor() {
    this.organizingGrid = document.querySelector('.organizing-grid')
    this.prevCoreTable = document.getElementById('prev-core-table')
    this.prevOrgTable = document.getElementById('prev-org-table')
    this.timeline = document.querySelector('.timeline')
    this.accordion = document.querySelector('.accordion')
    this.timelineBtns = document.querySelectorAll('.timeline-btn')

    this.init()
  }

  init() {
    this.loadOrganizingTeam()
    this.loadPreviousTeams()
    this.loadPreviousCoreTable()
    this.loadPreviousOrgTable()
    this.setupTimelineNavigation()
    this.setupAccordion()
  }

  loadOrganizingTeam() {
    const organizingTeam = [
      { name: 'Prasad Pawar', image: 'assets/images/team/Prasad Pawar.jpg' },
      { name: 'Jagruti Patil', image: 'assets/images/team/Jagruti Patil.jpg' },
      { name: 'Ravi Kumawat', image: 'assets/images/team/Ravi Kumawat.jpg' },
      { name: 'Shweta Roshia', image: 'assets/images/team/Shweta Roshia.jpg' },
      { name: 'Darpana Desai', image: 'assets/images/team/Darpana Desai.jpg' },
      {
        name: 'Abhishek Shekhar Shinde',
        image: 'assets/images/team/Abhishek Shekhar Shinde.jpg',
      },
      { name: 'Aditya Gupta', image: 'assets/images/team/Aditya Gupta.jpg' },
      { name: 'Devesh Kumar', image: 'assets/images/team/Devesh Kumar.jpg' },
      {
        name: 'Divyanshu Chandani',
        image: 'assets/images/team/Divyanshu Chandani.jpeg',
      },
      {
        name: 'Ganivada Lalith',
        image: 'assets/images/team/Ganivada Lalith.jpg',
      },
      { name: 'Kovid Parmar', image: 'assets/images/team/Kovid Parmar.jpg' },
      {
        name: 'Nupoor Assudani',
        image: 'assets/images/team/Nupoor Assudani.jpg',
      },
      {
        name: 'Priyanshi Shah',
        image: 'assets/images/team/Priyanshi Shah.jpg',
      },
      {
        name: 'Ruchika Dhawan',
        image: 'assets/images/team/Ruchika Dhawan 2.jpg',
      },
      { name: 'Sejal Paliwal', image: 'assets/images/team/Sejal Paliwal.jpeg' },

      {
        name: 'Lakshya Kesarwani',
        image: 'assets/images/team/Lakshya Kesarwani.webp',
      },
      {
        name: 'Manas Gharpure',
        image: 'assets/images/team/Manas Gharpure.jpg',
      },
      { name: 'Manavi', image: 'assets/images/team/Manavi.jpg' },
      {
        name: 'Meshvakumari Chaudhari',
        image: 'assets/images/team/Meshvakumari Chaudhari.jpg',
      },
      {
        name: 'Modalavalasa Anusha',
        image: 'assets/images/team/Modalavalasa Anusha.jpg',
      },
      { name: 'Niteesha Rao P', image: 'assets/images/team/Niteesha Rao.jpeg' },
      { name: 'Parth Raut', image: 'assets/images/team/Parth Raut.jpg' },
      { name: 'Rahul Ahirwar', image: 'assets/images/team/Rahul Ahirwar.jpg' },
      { name: 'Rashid Pathan', image: 'assets/images/team/Rashid Pathan.jpg' },
      { name: 'Sachin Kumar', image: 'assets/images/team/Sachin Kumar.jpg' },
      { name: 'Sai Krishna', image: 'assets/images/team/Sai Krishna.jpg' },
      {
        name: 'Sambhav Dessai',
        image: 'assets/images/team/Sambhav Dessai.jpg',
      },

      { name: 'Sravya Shree', image: 'assets/images/team/Sravya.jpg' },
      {
        name: 'Swami Aryanathan Gantedi',
        image: 'assets/images/team/Swami Aryanathan Gantedi.jpg',
      },

      {
        name: 'Vaibhav Agrawal',
        image: 'assets/images/team/Vaibhav Agrawal.jpg',
      },
      { name: 'Yash Sonone', image: 'assets/images/team/Yash Sudhakar.jpg' },
    ]

    if (this.organizingGrid) {
      this.organizingGrid.innerHTML = organizingTeam
        .map(
          (member) => `
                <div class="member-card animate-on-scroll">
                    <div class="member-image" style="background-image: url('${member.image}')"></div>
                    <div class="member-info">
                        <h4>${member.name}</h4>
                        <p class="member-role">Organizing Team Member</p>
                    </div>
                </div>
            `,
        )
        .join('')
    }
  }

  loadPreviousTeams() {
    const previousTeams = [
      {
        year: '2025',
        type: 'core',
        members: [
          {
            name: 'Trushika Parmar',
            class: '2021',
            department: 'Mechanical Engineering',
          },
          {
            name: 'Prasad Pawar',
            class: '2022',
            department: 'Physics',
          },
        ],
      },
      {
        year: '2024',
        type: 'core',
        members: [
          {
            name: 'Vishal Ghoniya',
            class: '2024',
            department: 'Computer Science Engineering',
          },
          { name: 'Aman Raj', class: '2024', department: 'Civil Engineering' },
        ],
      },
      {
        year: '2023',
        type: 'core',
        members: [
          { name: 'Ankita Yadav', class: '2023', department: 'Mathematics' },
          {
            name: 'Prasanth P Nair',
            class: '2023',
            department: 'Mechanical Engineering',
          },
        ],
      },
      {
        year: '2022',
        type: 'core',
        members: [
          { name: 'Anukesh K A', class: '2022', department: 'Earth Science' },

          { name: 'Krishna', class: '2022', department: 'Bioengineering' },
        ],
      },
      {
        year: '2021',
        type: 'core',
        members: [
          { name: 'Aishwarya Malve', class: '2022', department: 'Civil' },
          { name: 'Vaibhav Saini', class: '2021', department: 'Mechanical' },
          { name: 'Viraj Shah', class: '2021', department: 'Mechanical' },
        ],
      },
      {
        year: '2020',
        type: 'core',
        members: [
          { name: 'Shubham Baheti', class: '2021', department: 'Civil' },
          { name: 'Ajay Meena', class: '2021', department: 'Electrical' },
          {
            name: 'Surabhi Torne',
            class: '2021',
            department: '	Material Science',
          },
          { name: 'Utsav Racca', class: '2021', department: 'Civil' },
        ],
      },
    ]

    // Load timeline
    if (this.timeline) {
      this.timeline.innerHTML = previousTeams
        .map(
          (team, index) => `
                <div class="timeline-item" data-year="${team.year}">
                    <div class="timeline-content">
                        <span class="timeline-year">${team.year}</span>
                        <h3>Core Team Members</h3>
                        <ul class="team-list">
                            ${team.members
                              .map(
                                (member) => `
                                <li><strong>${member.name}</strong> - ${member.department} (Class of ${member.class})</li>
                            `,
                              )
                              .join('')}
                        </ul>
                    </div>
                </div>
            `,
        )
        .join('')
    }

    // Load accordion
    if (this.accordion) {
      this.accordion.innerHTML = previousTeams
        .map(
          (team) => `
                <div class="accordion-item">
                    <div class="accordion-header">
                        <span>${team.year} Core Team</span>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="accordion-content">
                        <div class="team-list">
                            ${team.members
                              .map(
                                (member) => `
                                <p><strong>${member.name}</strong> - ${member.department} (Class of ${member.class})</p>
                            `,
                              )
                              .join('')}
                        </div>
                    </div>
                </div>
            `,
        )
        .join('')
    }
  }

  loadPreviousCoreTable() {
    const previousCore = [
      { name: 'Trushika Parmar', class: '2021', department: 'Mechanical' },
      { name: 'Prasad Pawar', class: '2022', department: 'Physics' },
      { name: 'Aishwarya Malve', class: '2022', department: 'Civil' },
      { name: 'Ajay Meena', class: '2021', department: 'Electrical' },
      { name: 'Akash Keshav Singh', class: '2015', department: 'Mechanical' },
      { name: 'Ankita Yadav', class: '2023', department: 'Mathematics' },
      { name: 'Anukesh K A', class: '2022', department: 'Earth Science' },
      { name: 'Anusha Gupta', class: '2018', department: 'Civil' },
      { name: 'C R Greeshma', class: '2020', department: 'Material Science' },
      { name: 'Dewanshi', class: '2022', department: 'Physics' },
      { name: 'Krishna', class: '2022', department: 'Bioengineering' },
      { name: 'Kushal Salecha', class: '2016', department: 'Electrical' },
      { name: 'Mandelem Manikanta', class: '2019', department: 'Electrical' },
      { name: 'Mayank Kumar', class: '2020', department: 'Civil' },
      { name: 'Prasanth P Nair', class: '2024', department: 'Mechanical' },
      { name: 'Prerna Singh', class: '2017', department: 'Civil' },
      { name: 'Rahul Rajeev', class: '2020', department: 'Material Science' },
      { name: 'Saksham Singal', class: '2019', department: 'Mechanical' },
      { name: 'Shubham Baheti', class: '2021', department: 'Civil' },
      { name: 'Siddhant Gulecha', class: '2019', department: 'Civil' },
      { name: 'Snehal Gohad', class: '2023', department: 'Civil' },
      { name: 'Surabhi Torne', class: '2021', department: 'Material Science' },
      {
        name: 'Tanisha Aggrawal',
        class: '2020',
        department: 'Material Science',
      },
      { name: 'Utsav Racca', class: '2021', department: 'Civil' },
      { name: 'Vaibhav Saini', class: '2022', department: 'Mechanical' },
      { name: 'Varun Aggarwal', class: '2018', department: 'Electrical' },
      { name: 'Vasudev Gohil', class: '2018', department: 'Electrical' },
      { name: 'Viraj Shah', class: '2022', department: 'Mechanical' },
      { name: 'Zainab Patel', class: '2018', department: 'Material Science' },
      { name: 'Vishal Ghoniya', class: '2024', department: 'Computer Science' },
      { name: 'Aman Raj', class: '2024', department: 'Civil' },
    ]

    if (this.prevCoreTable) {
      this.prevCoreTable.innerHTML = previousCore
        .map(
          (member) => `
                <tr>
                    <td>${member.name}</td>
                    <td>${member.class}</td>
                    <td>${member.department}</td>
                </tr>
            `,
        )
        .join('')
    }
  }

  loadPreviousOrgTable() {
    const previousOrg = [
      {
        name: 'Akash Unnikrishnan',
        class: '2024',
        department: 'Mechanical Engineering',
      },
      {
        name: 'Aditi Satish',
        class: '2023',
        department: 'Biological Engineering',
      },
      { name: 'Ankita Yadav', class: '2023', department: 'Mathematics' },
      { name: 'Aman Raj', class: '2024', department: 'Civil Engineering' },
      {
        name: 'Harshit Singh Chauhan',
        class: '2023',
        department: 'Mathematics',
      },
      {
        name: 'Insha Mansuri',
        class: '2023',
        department: 'Mechanical Engineering',
      },
      {
        name: 'Narsiram Gurjar',
        class: '2023',
        department: 'Civil Engineering',
      },
      {
        name: 'Prasanth P Nair',
        class: '2024',
        department: 'Mechanical Engineering',
      },
      { name: 'Prerna Chandak', class: '2023', department: 'Mathematics' },
      { name: 'Priyanshi Jain', class: '2025', department: 'HSS' },
      {
        name: 'Rahul Kumar',
        class: '2024',
        department: 'Chemical Engineering',
      },
      {
        name: 'Rajdeep Singh',
        class: '2024',
        department: 'Mechanical Engineering',
      },
      {
        name: 'Shashwat Srivastava',
        class: '2023',
        department: 'Chemical Engineering',
      },
      { name: 'Snehal Gohad', class: '2023', department: 'Civil Engineering' },
      {
        name: 'Sonu Meena',
        class: '2024',
        department: 'Electrical Engineering',
      },
      {
        name: 'Trushika Parmar',
        class: '2025',
        department: 'Mechanical Engineering',
      },
      {
        name: 'Vaishnavi Khanapurkar',
        class: '2025',
        department: 'Material Engineering',
      },
      {
        name: 'Vishal Ghoniya',
        class: '2024',
        department: 'Computer Science Engineering',
      },
      {
        name: 'Harsh Jaitwal',
        class: '2025',
        department: 'Chemical Engineering',
      },
      {
        name: 'Chahat Beniwal',
        class: '2026',
        department: 'Civil Engineering',
      },
      {
        name: 'Mamta Bhambhani',
        class: '2026',
        department: 'Electrical Engineering',
      },
      {
        name: 'Nidhi Kumari',
        class: '2025',
        department: 'Chemical Engineering',
      },
      { name: 'Prasad Pawar', class: '2028', department: 'Physics' },
      { name: 'Rajdeep Vraj', class: '2026', department: 'Civil Engineering' },
      {
        name: 'Ranjeet Kumar',
        class: '2024',
        department: 'Chemical Engineering',
      },
      {
        name: 'Chirag Sarda',
        class: '2024',
        department: 'Computer Science Engineering',
      },
    ]

    if (this.prevOrgTable) {
      this.prevOrgTable.innerHTML = previousOrg
        .map(
          (member) => `
                <tr>
                    <td>${member.name}</td>
                    <td>${member.class}</td>
                    <td>${member.department}</td>
                </tr>
            `,
        )
        .join('')
    }
  }

  setupTimelineNavigation() {
    this.timelineBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Update active button
        this.timelineBtns.forEach((b) => b.classList.remove('active'))
        btn.classList.add('active')

        // Filter timeline items
        const year = btn.dataset.year
        this.filterTimelineItems(year)
      })
    })
  }

  filterTimelineItems(year) {
    const timelineItems = document.querySelectorAll('.timeline-item')

    timelineItems.forEach((item) => {
      if (year === 'all' || item.dataset.year === year) {
        item.style.display = 'block'
        // Add animation
        item.style.animation = 'fadeInUp 0.6s ease'
      } else {
        item.style.display = 'none'
      }
    })
  }

  setupAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header')

    accordionHeaders.forEach((header) => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling
        const isActive = header.classList.contains('active')

        // Close all other accordion items
        accordionHeaders.forEach((h) => {
          h.classList.remove('active')
          h.nextElementSibling.classList.remove('active')
          h.nextElementSibling.style.maxHeight = '0'
        })

        // Toggle current item
        if (!isActive) {
          header.classList.add('active')
          content.classList.add('active')
          content.style.maxHeight = content.scrollHeight + 'px'
        }
      })
    })

    // Open first accordion by default
    if (accordionHeaders.length > 0) {
      accordionHeaders[0].click()
    }
  }

  setupAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated')
        }
      })
    }, observerOptions)

    // Observe elements for animation
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })
  }
}

// Initialize about page
document.addEventListener('DOMContentLoaded', () => {
  const aboutPage = new AboutPage()
  aboutPage.setupAnimations()
})
