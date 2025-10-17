const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = {
    siteMetadata: {
        siteUrl: 'https://avniproject.org',
        title: 'Avni Field Service and Data Collection Platform',
        description:
            'Open-source Mobile Data Collection and Reporting platform with algorithmic decision support',
        twitterHandle: '@avniproject',
        author: 'Avni'
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    'G-Y3E7H5MDX8',
                    'AW-17511540130'
                ],
                gtagConfig: {
                    anonymize_ip: true,
                    send_page_view: false,
                    transport_type: 'beacon',
                },
                pluginConfig: {
                    head: false,
                    respectDNT: true,
                    delayOnRouteUpdate: 0,
                    exclude: ['/preview/**', '/do-not-track/**'],
                },
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-sass',
        {
            // keep as first gatsby-source-filesystem plugin for gatsby image support
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/img`,
                name: 'uploads',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/img`,
                name: 'uploads',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-relative-images',
                        options: {
                            name: 'uploads',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 2048,
                            showCaptions: true
                        },
                    },
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'static',
                        },
                    },
                    'gatsby-remark-embed-video',
                    'gatsby-remark-responsive-iframe'
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
                omitGoogleFont: true
            },
        },
        {
            resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
            options: {
                analyzerMode: 'static',
                reportFilename: 'bundle-report.html',
                openAnalyzer: false,
                disable: !process.env.ANALYZE_BUNDLE,
            },
        },
        {
            resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
            options: {
                develop: true, // Activates purging in npm run develop
                purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
                printRejected: true,
            },
        }, // must be after other CSS plugins
        'gatsby-plugin-netlify', // make sure to keep it last in the array
    ],
    // for avoiding CORS while developing Netlify Functions locally
    // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
    developMiddleware: app => {
        app.use(
            '/.netlify/functions/',
            createProxyMiddleware({
                target: 'http://localhost:9000',
                pathRewrite: {
                    '/.netlify/functions/': '',
                },
            })
        )
    },
};
