import '../styles/about.css'; // External CSS for styling
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import SEO from '../components/seo';

// Template for rendering markdown-based pages like /about
export const BlankPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <main role="main" aria-label="About Page Content">
      <section className="about-section">
        <div className="about-container">
          <article className="about-content">
            <h1 className="about-heading">{title}</h1>
            <PageContent className="content" content={content} />
          </article>
        </div>
      </section>
    </main>
  );
};

BlankPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

// Page-level component fetching the markdown content
const BlankPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <BlankPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

BlankPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlankPage;

// GraphQL query to get the markdown data
export const aboutPageQuery = graphql`
  query BlankPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
