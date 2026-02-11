document.addEventListener('DOMContentLoaded', function () {
  const counters = document.querySelectorAll('.counter')
  const statCards = document.querySelectorAll('.stat-card')

  function animateCounter(counter) {
    if (counter.dataset.started === 'true') return
    counter.dataset.started = 'true'

    const target = Number(counter.dataset.target)
    const duration = 2000
    const startTime = performance.now()

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 4)
      const value = Math.floor(ease * target)

      counter.textContent = value.toLocaleString()

      if (progress < 1) {
        requestAnimationFrame(update)
      } else {
        counter.textContent = target.toLocaleString()
      }
    }

    requestAnimationFrame(update)
  }

  function animateCard(card) {
    card.classList.add('animate-fade-in-up')

    const counter = card.querySelector('.counter')
    if (counter) animateCounter(counter)

    const plus = card.querySelector('.plus-sign')
    if (plus) plus.classList.add('visible')
  }

  // Intersection Observer
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number(entry.target.dataset.animationDelay || 0)

            setTimeout(() => {
              animateCard(entry.target)
            }, delay)

            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )

    statCards.forEach((card) => observer.observe(card))
  } else {
    // Fallback
    statCards.forEach((card, i) => {
      setTimeout(() => animateCard(card), i * 300)
    })
  }
})
