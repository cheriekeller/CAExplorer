module.exports = {
  siteUrl: 'https://serene-euler-cd49c1.netlify.com',
  siteTitle: 'Climate Adaptation Explorer',
  siteSubtitle: 'for Florida',
  siteTitleShort: 'Adaptation Explorer',
  siteDescription:
    'A climate adaptation resource for Florida, including information on climate impacts, habitats, species, and adaptation strategies.',
  nav: [
    {
      label: 'Impacts',
      link: '/impacts',
    },
    {
      label: 'Species',
      link: '/species',
    },
    {
      label: 'Habitats',
      link: '/habitats',
    },
    {
      label: 'Adaptation Strategies',
      shortLabel: 'Adaptation',
      link: '/strategies',
    },
  ],
  manifest: {
    themeColor: '#2d4059',
    backgroundColor: '#2d4059',
  },
  googleAnalyticsId: 'UA-82274034-12',
  sentryDSN: 'https://65f47c1a71664f86b5b71c3a39a3ee56@sentry.io/1436368',
  schema: {
    author: 'Brendan Ward, Conservation Biology Institute',
  },
}
