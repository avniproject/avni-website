import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug} className="post-item">
        <Link to={post.node.fields.slug} className="post-link">
          <p className="is-size-5 post-title">{post.node.frontmatter.title}</p>
        </Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with “${tag}”`;

    return (
      <Layout>
        <section className="section tag-section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div className="column is-10 is-offset-1 tag-container">
                <h2 className="title is-size-4 tag-header">{tagHeader}</h2>
                <div className="posts-wrapper">
                  <ul className="taglist">{postLinks}</ul>
                </div>
                <p className="browse-link">
                  <Link to="/tags/" className="all-tags-link">
                    Browse all tags →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

// Add this CSS in your stylesheet (e.g., tagroute.css)
const styles = `
  .tag-section {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 100vh;
    padding: 2rem 0;
  }

  .tag-container {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1);
    margin-bottom: 6rem;
    backdrop-filter: blur(4px);
  }

  .tag-header {
    color: #2c3e50;
    position: relative;
    padding-bottom: 1rem;
    animation: fadeInDown 0.5s ease-out;
  }

  .tag-header:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(to right, #3498db, #2ecc71);
    border-radius: 2px;
  }

  .posts-wrapper {
    margin: 2rem 0;
  }

  .taglist {
    list-style: none;
    padding: 0;
  }

  .post-item {
    margin: 1rem 0;
    transition: transform 0.3s ease;
  }

  .post-item:hover {
    transform: translateX(10px);
  }

  .post-link {
    text-decoration: none;
    display: block;
    padding: 1rem;
    background: linear-gradient(90deg, #ffffff 0%, #f8f9fa 100%);
    border-radius: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .post-link:hover {
    background: linear-gradient(90deg, #3498db 0%, #2ecc71 100%);
    color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  .post-title {
    margin: 0;
    transition: color 0.3s ease;
  }

  .browse-link {
    margin-top: 2rem;
  }

  .all-tags-link {
    text-decoration: none;
    color: #3498db;
    font-weight: 600;
    position: relative;
    padding-bottom: 5px;
    transition: all 0.3s ease;
  }

  .all-tags-link:hover {
    color: #2ecc71;
  }

  .all-tags-link:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #2ecc71;
    transition: width 0.3s ease;
  }

  .all-tags-link:hover:after {
    width: 100%;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .tag-container {
      margin: 1rem;
    }
    
    .post-link {
      padding: 0.8rem;
    }
  }
`;

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
