import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'
import ContactUs from "../components/ContactUs";
import SEO from "../components/seo"

export const AboutPageTemplate = ({title, content, contentComponent}) => {
    const PageContent = contentComponent || Content;

    return (
        <section className="section section--gradient">
            <div className="container">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="section">
                            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                {title}
                            </h2>
                            <PageContent className="content" content={content}/>
                            <br/>
                            <hr/>
                            <ContactUs/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

AboutPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
};

const DefaultPage = ({data}) => {
    const {markdownRemark: post} = data;

    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <AboutPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
            />
        </Layout>
    )
};

DefaultPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default DefaultPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
