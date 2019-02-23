/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// import React from 'react'
// import Layout from 'components/layout/Default'

const GoogleAnalytics = require('react-ga')
const config = require('./config/meta')

/**
 * Initialize Google Analytics
 */
export const onClientEntry = () => {
  GoogleAnalytics.initialize(config.googleAnalyticsId)
}

export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log('on route update', location, prevLocation)
}

// export const wrapPageElement = ({ element, props }) => {
//   console.log('props are', props)
//   return (
//     // props provide same data to Layout as Page element will get
//     // including location, data, etc - you don't need to pass it
//     <Layout {...props}>{element}</Layout>
//   )
// }
