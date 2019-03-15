module.exports = {
  siteMetadata: {
    siteName: `maruware`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
        omitGoogleFont: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'articles',
        path: `${__dirname}/src/data/articles`
      }
    }
  ]
}
