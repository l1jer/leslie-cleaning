import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Leslie Cleaning Services`,
    description: `Professional cleaning services in Australia. We provide house, apartment, townhouse, kitchen, windows, office, and end-of-lease cleaning services.`,
    siteUrl: `https://lesliecleaning.com.au`,
    author: `Leslie Cleaning`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-postcss',
  ],
}

export default config