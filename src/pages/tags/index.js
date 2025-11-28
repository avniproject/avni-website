import React from 'react';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/Layout';

// Constants
const EXCLUDED_TAGS = ['test'];
const MAX_FONT_SIZE = 40;  // Reduced max size for better spacing
const MIN_FONT_SIZE = 14;  // Slightly smaller min size
const SPACING_FACTOR = 1.5; // Multiplier for spacing

const TagsPage = ({ data }) => {
  const {
    allMarkdownRemark: { group: tags },
    site: { siteMetadata: { title } },
  } = data;

  // Filter and sort tags
  const filteredTags = tags
    .filter(tag => !EXCLUDED_TAGS.includes(tag.fieldValue.toLowerCase()))
    .sort((a, b) => a.fieldValue.localeCompare(b.fieldValue));

  // Calculate max count for scaling font sizes
  const maxCount = Math.max(...filteredTags.map(tag => tag.totalCount));
  const minCount = Math.min(...filteredTags.map(tag => tag.totalCount));

  return (
    <Layout>
      <section className="section tags-section">
        <Helmet title={`Tags | ${title}`} />
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1 tags-container">
              <h1 className="title is-size-2 tags-header">Tag Cloud</h1>
              <div className="word-cloud">
                {filteredTags.map(tag => {
                  // Calculate font size based on count
                  const sizeRange = MAX_FONT_SIZE - MIN_FONT_SIZE;
                  const countRange = maxCount - minCount || 1;
                  const scale = (tag.totalCount - minCount) / countRange;
                  const fontSize = MIN_FONT_SIZE + (scale * sizeRange);
                  const padding = fontSize * SPACING_FACTOR;

                  return (
                    <Link
                      key={tag.fieldValue}
                      to={`/tags/${kebabCase(tag.fieldValue)}/`}
                      className="word-cloud-item"
                      style={{
                        fontSize: `${fontSize}px`,
                        padding: `${padding / 4}px ${padding / 2}px`,
                        margin: `${padding / 4}px`
                      }}
                    >
                      {tag.fieldValue}
                      <span className="tag-count">({tag.totalCount})</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// CSS styles
const styles = `
  .tags-section {
    background: linear-gradient(to bottom right, #eef2f3 0%, #8e9eab 100%);
    min-height: 100vh;
    padding: 3rem 0;
  }

  .tags-container {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    margin-bottom: 6rem;
    backdrop-filter: blur(5px);
    position: relative;
    overflow: hidden;
  }

  .tags-header {
    color: #1a1a1a;
    position: relative;
    padding-bottom: 1.5rem;
    animation: slideIn 0.5s ease-out;
    text-align: center;
  }

  .tags-header:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #ff6b6b, #4ecdc4);
    border-radius: 2px;
  }

  .word-cloud {
    position: relative;
    height: auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    gap: 1rem; /* Minimum gap between items */
  }

  .word-cloud-item {
    position: relative;
    text-decoration: none;
    color: #2c3e50;
    font-weight: 600;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    white-space: nowrap; /* Prevent text wrapping */
  }

  .word-cloud-item:hover {
    transform: scale(1.05) rotate(1deg);
    background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%);
    color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }

  .tag-count {
    margin-left: 0.5rem;
    font-size: 0.8em;
    background: rgba(0, 0, 0, 0.1);
    padding: 0.2rem 0.6rem;
    border-radius: 10px;
    opacity: 0.8;
  }

  .word-cloud-item:hover .tag-count {
    background: rgba(255, 255, 255, 0.3);
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    .tags-container {
      padding: 1.5rem;
      margin: 1rem;
    }
    
    .word-cloud {
      padding: 1rem;
      gap: 0.5rem;
    }
  }
`;

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
