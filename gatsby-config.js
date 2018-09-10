
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: 'Gatsby + Netlify CMS Starter',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        // {
        //     resolve: 'gatsby-source-filesystem',
        //     options: {
        //         path: `${__dirname}/cms-data/pages`,
        //         name: 'pages',
        //     },
        // },
        // {
        //     resolve: 'gatsby-source-filesystem',
        //     options: {
        //         path: `${__dirname}/cms-data/img`,
        //         name: 'images',
        //     },
        // },
        {
            resolve: `@mosch/gatsby-source-github`,
            options: {
                repository: "gatsby-starter-netlify-cms-hack26-data",
                tree: true,
                releases: false,
                user: "hanchennz",
                secrets: {
                    token: process.env.GITHUB_TOKEN,
                }
            }
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [],
            },
        },
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        },
        'gatsby-plugin-netlify', // make sure to keep it last in the array
    ],
};
