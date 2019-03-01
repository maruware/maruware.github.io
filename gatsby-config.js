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
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'config',
        path: `${__dirname}/src/config`
      }
    }
  ]
}
