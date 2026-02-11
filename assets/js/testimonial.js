class YouTubeCarousel {
  constructor() {
    this.cards = document.querySelectorAll('.video-card')
    this.prev = document.getElementById('prevBtn')
    this.next = document.getElementById('nextBtn')
    this.dots = document.querySelectorAll('.dot')

    this.index = 1
    this.total = this.cards.length
    this.players = []

    this.init()
  }

  async init() {
    await this.loadYT()
    this.initPlayers()
    this.update()
    this.events()
  }

  loadYT() {
    return new Promise((res) => {
      if (window.YT) return res()
      let tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.body.appendChild(tag)
      window.onYouTubeIframeAPIReady = res
    })
  }

  initPlayers() {
    this.cards.forEach((card, i) => {
      let iframe = card.querySelector('iframe')
      let player = new YT.Player(iframe, {
        events: {
          onReady: (e) => {
            this.players[i] = e.target
            if (i !== this.index) e.target.pauseVideo()
          },
          onStateChange: (e) => {
            if (i !== this.index && e.data === 1) {
              e.target.pauseVideo()
            }
          },
        },
      })
    })
  }

  update() {
    this.cards.forEach((card, i) => {
      let pos = i - this.index
      if (pos < -2) pos += this.total
      if (pos > 2) pos -= this.total

      card.removeAttribute('data-position')

      if (pos === 0) {
        card.setAttribute('data-position', 'center')
      } else if (pos === -1) {
        card.setAttribute('data-position', 'left')
      } else if (pos === 1) {
        card.setAttribute('data-position', 'right')
      } else if (pos < -1) {
        card.setAttribute('data-position', 'hidden-left')
      } else {
        card.setAttribute('data-position', 'hidden-right')
      }
    })

    this.updateDots()
    this.pauseOthers()
  }

  pauseOthers() {
    this.players.forEach((p, i) => {
      if (p && i !== this.index) p.pauseVideo()
    })
  }

  updateDots() {
    this.dots.forEach((d, i) => {
      d.classList.toggle('active', i === this.index)
    })
  }

  nextSlide() {
    this.index = (this.index + 1) % this.total
    this.update()
  }

  prevSlide() {
    this.index = (this.index - 1 + this.total) % this.total
    this.update()
  }

  events() {
    this.next.onclick = () => this.nextSlide()
    this.prev.onclick = () => this.prevSlide()

    this.dots.forEach((d, i) => {
      d.onclick = () => {
        this.index = i
        this.update()
      }
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new YouTubeCarousel()
})
