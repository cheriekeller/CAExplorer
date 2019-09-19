import React from 'react'
import { theme } from 'util/style'

export const hasWindow = typeof window !== 'undefined' && window

export const scrollIntoView = (id, behavior = 'auto') => {
  if (!hasWindow) {
    return
  }

  const elem = window.document.getElementById(id) || null

  if (elem) {
    try {
      elem.scrollIntoView({ behavior, block: 'nearest' })
    } catch {
      elem.scrollIntoView()
    }
  }
}

export const splitLines = text =>
  text.split('\n').map((value, i) => (
    /* eslint-disable react/no-array-index-key */
    <React.Fragment key={i}>
      {value}
      <br />
    </React.Fragment>
  ))

export const isUnsupported =
  hasWindow &&
  navigator !== undefined &&
  (/MSIE 9/i.test(navigator.userAgent) ||
    /MSIE 10/i.test(navigator.userAgent) ||
    /Trident/i.test(navigator.userAgent))

export const rootPath = () =>
  hasWindow ? window.location.pathname.split('/')[1] : null

export const getViewportIndex = () => {
  if (!hasWindow) return 0
  const thresholds = theme.breakpoints.map(b =>
    parseInt(b.replace('px', ''), 10)
  )

  const viewportWidth = window.document.body.offsetWidth
  let i = 0
  for (; i < thresholds.length; i += 1) {
    if (viewportWidth < thresholds[i]) {
      break
    }
  }
  return i
}

export default { scrollIntoView, hasWindow, rootPath }
