// gifts.js: DOM manipulation for <main>

const renderGifts = async () => {
  const response = await fetch('/gifts')
  const data = await response.json()
  const mainContent = document.getElementById('main-content')

  if (data) {
    data.map(gift => {
      const card = document.createElement('div')
      card.className = 'card'

      // Add image
      const img = document.createElement('img')
      img.src = gift.image
      img.alt = gift.name
      card.appendChild(img)

      // Add name
      const name = document.createElement('h3')
      name.textContent = gift.name
      card.appendChild(name)

      // Add price
      const price = document.createElement('p')
      price.textContent = gift.pricePoint
      card.appendChild(price)

      // Add audience
      const audience = document.createElement('p')
      audience.textContent = gift.audience
      card.appendChild(audience)

      // Add Read More link
      const readMore = document.createElement('a')
      readMore.textContent = 'Read More >'
      readMore.href = `/gifts/${gift.id}`
      readMore.setAttribute('role', 'button')
      card.appendChild(readMore)

      mainContent.appendChild(card)
    })
  } else {
    const noGifts = document.createElement('h2')
    noGifts.textContent = 'No Gifts Available 😞'
    mainContent.appendChild(noGifts)
  }
}

const requestedUrl = window.location.pathname.replace(/^\//, '')
if (requestedUrl && requestedUrl !== '' && requestedUrl !== 'index.html') {
  window.location.href = '../404.html'
} else {
  renderGifts()
}
