module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Range Quest",
    titleTemplate: "%s · The Range Quest",
    description:
      "Gatsby site using Material UI Hosted at Firebase by Range Quest",
  },
  plugins: [
    //"gatsby-plugin-material-ui",
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        // webFontsConfig: {
        //   fonts: {
        //     google: [
        //       {
        //         family: `Montserrat`,
        //         variants: [`300`, `400`, `500`],
        //       },
        //     ],
        //   },
        // },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};
