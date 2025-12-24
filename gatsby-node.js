const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const fs = require('fs-extra')
const RSS = require('rss')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  try {
    const result = await graphql(`
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                tags
                templateKey
                unlisted
              }
            }
          }
        }
        blogPosts: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { fileAbsolutePath: { regex: "/blog/" } }
        ) {
          edges {
            node {
              excerpt
              html
              fields {
                slug
              }
              frontmatter {
                title
                date
              }
            }
          }
        }
        caseStudies: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { fileAbsolutePath: { regex: "/case-studies/" } }
        ) {
          edges {
            node {
              excerpt
              html
              fields {
                slug
              }
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    `)

    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })

    const publicDir = path.join(process.cwd(), 'public')
    await fs.ensureDir(publicDir)

    if (result.data.blogPosts.edges.length > 0) {
      const blogFeed = new RSS({
        title: 'Avni Blog',
        description: 'Latest blog posts from Avni',
        site_url: 'https://avniproject.org',
        feed_url: 'https://avniproject.org/rss-blog.xml',
        language: 'en',
      })

      result.data.blogPosts.edges.forEach(({ node }) => {
        if (node.fields && node.fields.slug) {
          blogFeed.item({
            title: node.frontmatter.title || 'No title',
            description: node.excerpt || '',
            url: `https://avniproject.org${node.fields.slug}`,
            date: node.frontmatter.date || new Date().toISOString(),
            custom_elements: [{ 'content:encoded': node.html || '' }],
          })
        }
      })

      await fs.writeFile(
          path.join(publicDir, 'rss-blog.xml'),
          blogFeed.xml({ indent: true })
      )
      console.log('Blog RSS feed generated at:', path.join(publicDir, 'rss-blog.xml'))
    }

    if (result.data.caseStudies.edges.length > 0) {
      const caseStudiesFeed = new RSS({
        title: 'Avni Case Studies',
        description: 'Latest case studies from Avni',
        site_url: 'https://avniproject.org',
        feed_url: 'https://avniproject.org/rss-case-studies.xml',
        language: 'en',
      })

      result.data.caseStudies.edges.forEach(({ node }) => {
        if (node.fields && node.fields.slug) {
          caseStudiesFeed.item({
            title: node.frontmatter.title || 'No title',
            description: node.excerpt || '',
            url: `https://avniproject.org${node.fields.slug}`,
            date: node.frontmatter.date || new Date().toISOString(),
            custom_elements: [{ 'content:encoded': node.html || '' }],
          })
        }
      })

      await fs.writeFile(
          path.join(publicDir, 'rss-case-studies.xml'),
          caseStudiesFeed.xml({ indent: true })
      )
      console.log('Case Studies RSS feed generated at:', path.join(publicDir, 'rss-case-studies.xml'))
    }

  } catch (error) {
    console.error('Error generating RSS feeds:', error)
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
