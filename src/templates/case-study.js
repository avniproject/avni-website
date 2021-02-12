import React from 'react'
import PropTypes from 'prop-types'
import {kebabCase} from 'lodash'
import Helmet from 'react-helmet'
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'
import SEO from "../components/seo"

export const CaseStudyTemplate = ({
                                      content,
                                      contentComponent,
                                      description,
                                      tags,
                                      title,
                                      author,
                                      date,
                                      helmet,
                                  }) => {
    const PostContent = contentComponent || Content;

    return (
        <section className="section">
            {helmet || ''}
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h1>
                            {title}
                        </h1>
                        <p className="has-text-grey">Last updated on: <b>{date}</b> by {author}</p>
                        <PostContent content={content}/>
                        <br/>
                        <h4>Read more : <a href="/case-studies">Case Studies</a> | <a href="/blog">Blogs</a></h4>
                        {tags && tags.length ? (
                            <div style={{marginTop: `4rem`}}>
                                <h4>Tags</h4>
                                <ul className="taglist">
                                    {tags.map(tag => (
                                        <li key={tag + `tag`}>
                                            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    )
};

CaseStudyTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    helmet: PropTypes.object,
};

const CaseStudy = ({data}) => {
    const {markdownRemark: post} = data

    return (
        <Layout>
            <SEO title={post.frontmatter.title}/>
            <CaseStudyTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={
                    <Helmet titleTemplate="%s | Case Study">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${post.frontmatter.description}`}
                        />
                    </Helmet>
                }
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
                author={post.frontmatter.author}
                date={post.frontmatter.date}
            />
        </Layout>
    )
};

CaseStudy.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
};

export default CaseStudy;

export const pageQuery = graphql`
  query CaseStudyByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        description
        tags
      }
    }
  }
`;
