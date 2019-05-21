import React from 'react'

export const hasWindow = typeof window !== 'undefined' && window

export const scrollIntoView = (id, behavior = 'auto') => {
  if (!hasWindow) {
    return
  }

  const elem = window.document.getElementById(id) || null

  if (elem) {
    elem.scrollIntoView({ behavior, block: 'nearest' })
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

export default { scrollIntoView, hasWindow, rootPath }
