/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Henny Penny`,
          },
          {
            family: `Jacques Francois Shadow`,
          },
          {
            family: `Parisienne`,
          },
          {
            family: `Xanh Mono`,
          },
        ],
      },
    },
  ],
}
