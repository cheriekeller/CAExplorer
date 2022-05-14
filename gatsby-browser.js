/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const GoogleAnalytics = require('react-ga')
const Sentry = require('@sentry/browser')
const config = require('./config/meta')

/**
 * Initialize Google Analytics and Sentry
 */
export const onClientEntry = () => {
  if (process.env.NODE_ENV === 'production') {
    GoogleAnalytics.initialize(config.googleAnalyticsId)

    Sentry.init({
      dsn: config.sentryDSN,
      beforeSend(event, { originalException: error }) {
        if (error && error.message) {
          // extension errors
          if (error.message.match(/extension context/i)) {
            return null
          }
        }
        return event
      },
      denyUrls: [
        // Chrome extensions
        /extensions\//i,
        /^chrome:\/\//i,
        /^chrome-extension:\/\//i,
      ],
    })
    window.Sentry = Sentry
  }
}
