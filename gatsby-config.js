/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `CNB Blog`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-transformer-remark", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": `content`,
        "path": `${__dirname}/src/content`
      },
      __key: "pages"
    }
  ]
};