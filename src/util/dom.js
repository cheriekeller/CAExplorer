export const hasWindow = typeof window !== 'undefined' && window

export const scrollIntoView = (id, containerId = null, behavior = 'auto') => {
  if (!hasWindow) {
    return
  }

  const elem = window.document.getElementById(id) || null
  // const container = containerId
  //   ? window.document.getElementById(containerId)
  //   : null || null

  // // if we have a container, only scroll into view if not already visible to avoid jitter
  // if (container && elem) {
  //   const {
  //     bottom: containerBottom,
  //     top: containerTop,
  //   } = container.getBoundingClientRect()
  //   const { bottom: elemBottom } = elem.getBoundingClientRect()
  //   console.log('bottoms', elemBottom, containerBottom)
  //   if (elemBottom > containerBottom - containerTop) {
  //     console.log('scroll by', elemBottom - containerBottom + containerTop)
  //     container.scrollTop = elemBottom - containerBottom + containerTop
  //     // elem.scrollIntoView({ behavior, block: 'center' })
  //   }
  //   return
  // }

  if (elem) {
    elem.scrollIntoView({ behavior, block: 'nearest' })
  }
}

export default { scrollIntoView, hasWindow }
