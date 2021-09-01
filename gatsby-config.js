module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Range Quest",
    titleTemplate: "%s · The Range Quest",
    description:
      "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
    url: "https://range.quest", // No trailing slash allowed!
    image: "/images/range-quest.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@RangeQuest",
  },
  plugins: [
    "gatsby-plugin-material-ui",
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
