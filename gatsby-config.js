module.exports = {
  siteMetadata: {
    title: "Erick Escriba",
    description:
      "Erick Escriba is a front-end developer who is specializing in building websites, applications, and everything in between.",
    siteUrl: "https://erickescribaa.netlify.app/", // No trailing slash allowed!
    image: "/Logo.png", // Path to your image you placed in the 'static' folder
  },

  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@static": "static",
          "@components": "src/components",
          "@images": "src/images",
          "@pages": "src/pages",
        },
        extensions: ["js, jsx, ts, tsx"],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Calibre"],
          urls: ["/fonts/fonts.scss"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "ErickEscriba",
        short_name: "ErickEscriba",
        start_url: "/",
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
