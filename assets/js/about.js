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
      

      {
        name: 'Ganesh Kamble',
        image: 'assets/images/team/Ganesh_Kamble.jpg',
        role: 'Coordinator, Social Media and Design Team'
      },
      {
        name: 'Priyanshi Shah',
        image: 'assets/images/team/Priyanshi Shah.jpg',
        role: 'Coordinator, Website and Editorial team'
      },
      {
        name: 'Saheel Ganvir',
        image: 'assets/images/team/SaheelGanvir.25110280.jpg',
        role: 'Coordinator, Events team'
      },
       {
        name: 'Shubham Ruparel',
        image: 'assets/images/team/Shubham_25110278.jpg',
        role: 'Coordinator, Outreach team'
      },
       {
        name: 'Tanvi Chalakh',
        image: 'assets/images/team/Tanvi_Chalakh_24110367.jpg',
        role: 'Coordinator, School team'
      },

      { name: 'Prabhat Kumar', image: 'assets/images/team/Prabhat.jpg' },
      { name: 'Pravalli Matta', image: 'assets/images/team/Pravalli Matta.jpeg' },
      { name: 'Prasad Pawar', image: 'assets/images/team/Prasad Pawar.jpg' },
       

      { name: 'Shweta Roshia', image: 'assets/images/team/Shweta_Roshia_24110304.jpeg' },
      { name: 'Darpana Desai', image: 'assets/images/team/Darpana Desai.jpg' },
            {
        name: 'Divyanshu Chandani',
        image: 'assets/images/team/Divyanshu Chandani.jpeg',
      },
      {
        name: 'Ganivada Lalith',
        image: 'assets/images/team/Ganivada Lalith.jpeg',
      },

      {
        name: 'Nupoor Assudani',
        image: 'assets/images/team/Nupoor Assudani.jpg',
      },
      

      {
        name: 'Meshvakumari Chaudhari',
        image: 'assets/images/team/Meshva_Chaudhari.jpg',
      },
    
      {
        name: 'Modalavalasa Anusha',
        image: 'assets/images/team/Modalavalasa_Anusha_%2024110206.jpg',
      },
      
      {
        name: 'Abhishek S',
        image: 'assets/images/team/Abhishek_S_23110008.png',
      },
      {
        name: 'Akanksha Rani',
        image: 'assets/images/team/Akanksha_Rani_25510012.jpg',
      },
      {
        name: 'Ambuj Pandey',
        image: 'assets/images/team/Ambuj pandey_25510015.png',
      },
      {
        name: 'Anmol',
        image: 'assets/images/team/Anmol_updated.png',
      },
      {
        name: 'Devanshu Dangar',
        image: 'assets/images/team/Devanshu_Dangar_25110092.jpg',
      },
       {
        name: 'Dipali Singh',
        image: 'assets/images/team/Dipali singh 25510037.jpg',
      },
      
       

      {
        name: 'Goral Mashru',
        image: 'assets/images/team/Goral_Mashru_23110119.jpg',
      },
      {
        name: 'Hemani Tekwani',
        image: 'assets/images/team/Hemani Tekwani.png',
      },
      {
        name: 'Jahnavi Patel',
        image: 'assets/images/team/Jahnavi Patel.jpg',
      },
      {
        name: 'Madhu Kumari',
        image: 'assets/images/team/Madhu_Kumari_25110182.jpg',
      },
      {
        name: 'Madhup Sankhla',
        image: 'assets/images/team/Madhup Sankhla.jpg',
      },
      {
        name: 'S Sanchana',
        image: 'assets/images/team/S Sanchana _25510104.jpg',
      },
       
       {
        name: 'Sejal Kadgi',
        image: 'assets/images/team/Sejal_Kadgi_24110323.jpg',
      },
      
       {
        name: 'Siri Durugapu',
        image: 'assets/images/team/Siri_Durugapu_24110343.png',
      },
       {
        name: 'Sparsh Mishra',
        image: 'assets/images/team/Sparsh_Mishra_25510125.jpg',
      },
       {
        name: 'Tannu Gupta',
        image: 'assets/images/team/Tannu Gupta_25510138.jpg',
      },
       {
        name: 'Tanushree Deshmukh',
        image: 'assets/images/team/Tanushree_Deshmukh_24110366.jpeg',
      },
      {
        name: 'Tanvi Soni',
        image: 'assets/images/team/Tanvi Soni.png',
      },
      
       {
        name: 'Ujas Shah',
        image: 'assets/images/team/Ujas_Shah_24110376.jpg',
      },

    
      

     

    ]

    if (this.organizingGrid) {
    this.organizingGrid.innerHTML = organizingTeam
      .map(
        (member) => `
              <div class="member-card animate-on-scroll">
                  <div class="member-image" style="background-image: url('${member.image}')"></div>
                  <div class="member-info">
                      <h4>${member.name}</h4>
                      <p class="member-role">${member.role || 'Organizing Team Member'}</p>
                  </div>
              </div>
          `,
      )
      .join('')
    }
    // if (this.organizingGrid) {
    //   this.organizingGrid.innerHTML = organizingTeam
    //     .map(
    //       (member) => `
    //             <div class="member-card animate-on-scroll">
    //                 <div class="member-image" style="background-image: url('${member.image}')"></div>
    //                 <div class="member-info">
    //                     <h4>${member.name}</h4>
    //                     <p class="member-role">Organizing Team Member</p>
    //                 </div>
    //             </div>
    //         `,
    //     )
    //     .join('')
    // }
  }

  loadPreviousTeams() {
    const previousTeams = [
      {
        year: '2026',
        type: 'core',
        members: [
          {
            name: 'Pravalli Matta',
            class: '2023',
            department: 'Electrical Engineering',
          },
          {
            name: 'Prabhat Kumar',
            class: '2022',
            department: 'Physics',
          },
        ],
      },
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
                                <li><strong>${member.name}</strong> - ${member.department}</li>
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
                                <p><strong>${member.name}</strong> - ${member.department})</p>
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
      { name: 'Prabhat Kumar', class: '2022', department: 'Physics' },
      { name: 'Pravalli Matta', class: '2023', department: 'Electrical' },
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
        name: 'Ravi Kumawat',
        class: '2022',
        department: 'Civil Engineering',
      },

      
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
