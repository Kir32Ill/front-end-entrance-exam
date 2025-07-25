export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.textContent = `Скачать PDF (${counter})`
  }

  element.addEventListener('click', (e) => {
    const ripple = document.createElement('span')
    ripple.classList.add('ripple')

    const rect = element.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`

    element.appendChild(ripple)
    setTimeout(() => ripple.remove(), 600)
    setCounter(counter + 1)
  })

  setCounter(0)
}
