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
          resolve: 'gatsby-remark-external-links',
          options: {
            target: '_blank',
            rel: 'noopener noreferrer nofollow',
          },
        },
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
          resolve: 'gatsby-remark-embed-youtube',
          options: {
            width: 800,
            height: 400,
          },
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.2rem`,
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
        {
          resolve: `gatsby-remark-autolink-headers`,
          options: {
            offsetY: `60`,
            icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
            maintainCase: true,
            removeAccents: true,
          },
        },
        `gatsby-remark-smartypants`,
        {
          resolve: 'gatsby-remark-emojis',
          options: {
            active: true,
            class: 'emoji-icon',
            escapeCharacter: '',
            size: 64,
            styles: {},
          },
        },
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
      pathToConfigModule: `src/styles/typography`,
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
