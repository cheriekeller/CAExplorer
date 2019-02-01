export const scrollIntoView = (id, behavior = 'auto') => {
  const hasWindow = typeof window !== 'undefined' && window
  const elem = hasWindow ? window.document.getElementById(id) : null
  if (elem) {
    elem.scrollIntoView({ behavior, block: 'nearest' })
  }
}

export const hasWindow = typeof window !== 'undefined' && window

export default { scrollIntoView, hasWindow }
