import React from 'react'
import PropTypes from 'prop-types'
import {kebabCase} from 'lodash'
import Helmet from 'react-helmet'
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'
import Share from '../components/Share';

export const BlogPostTemplate = ({
                                     content,
                                     contentComponent,
                                     description,
                                     tags,
                                     title,
                                     author = 'The Avni Team',
                                     date,
                                     helmet,
                                     twitterHandle,
                                     siteUrl,
                                     slug
                                 }) => {
    const PostContent = contentComponent || Content;

    return (
        <section className="section">
            {helmet || ''}
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                            {title}
                        </h1>
                        <p className="subtitle is-6">
                            {date} by {author}
                        </p>
                        <p>{description}</p>
                        <PostContent content={content}/>
                        {tags && tags.length ? (
                            <div className="field is-grouped is-grouped-multiline" style={{marginTop: `4rem`}}>
                                <div className="pt-4 control is-4"><p>Tags</p></div>
                                {tags.map(tag => (
                                    <div className="control">
                                        <Link className="tag" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                                    </div>
                                ))}
                            </div>
                        ) : null}
                        <div className="field is-grouped is-grouped-multiline post-social-block">
                            <p style={{marginRight: 8}}>Share</p>
                                <Share
                                    socialConfig={{
                                        twitterHandle,
                                        config: {
                                            url: `${siteUrl}${slug}`,
                                            title,
                                        },
                                    }}
                                    tags={tags} className="control"
                                />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

BlogPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    helmet: PropTypes.object,
    twitterHandle: PropTypes.string,
    siteUrl: PropTypes.string,
    slug: PropTypes.string
};

const BlogPost = ({data}) => {
    const {
        post: {
            html,
            frontmatter: {title, tags, author, date, description},
            fields: {slug},
        },
        site: {
            siteMetadata: {siteUrl, twitterHandle},
        },
    } = data;

    return (
        <Layout>
            <BlogPostTemplate
                content={html}
                contentComponent={HTMLContent}
                description={description}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                        <title>{`${title}`}</title>
                        <meta
                            name="description"
                            content={`${description}`}
                        />
                    </Helmet>
                }
                tags={tags}
                title={title}
                author={author}
                date={date}
                twitterHandle={twitterHandle}
                siteUrl={siteUrl}
                slug={slug}
            />
        </Layout>
    )
};

BlogPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
};

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
  site {
		siteMetadata {
			siteUrl
			twitterHandle
		}
	}
    post: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        description
        tags
      }
      fields {
			slug
	    }
    }
  }
`;
