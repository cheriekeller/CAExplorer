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
