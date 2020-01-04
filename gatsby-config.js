const siteMetadata = {
  title: `🚴 Engrenagem Fixa`,
  author: `Fernando Moreira`,
  description: `🚴 Um blog para contar todo rolê de ter uma bike fixa (fixed gear)`,
  siteUrl: `https://engrenagemfixa.nandomoreira.dev/`,
  social: {
    twitter: `oseunando`,
  },
};

const plugins = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/blog`,
      name: `blog`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/assets`,
      name: `assets`,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1024,
            showCaptions: true,
            linkImagesToOriginal: false,
          },
        },
        `gatsby-remark-reading-time`,
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`,
          },
        },
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            aliases: { sh: `bash`, js: `javascript` },
            showLineNumbers: true,
          },
        },
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-smartypants`,
      ],
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.NODE_ENV === 'production' ? `UA-125092358-7` : '',
      head: false,
    },
  },
  `gatsby-plugin-feed`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: siteMetadata.title,
      short_name: siteMetadata.title,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `content/assets/icon.png`,
    },
  },
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography`,
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  `gatsby-plugin-offline`,
];

module.exports = {
  siteMetadata,
  plugins,
};
