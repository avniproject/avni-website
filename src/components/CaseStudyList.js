import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql, StaticQuery} from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import _ from 'lodash';

class CaseStudyList extends React.Component {
    render() {
        const {data} = this.props;
        const {edges: posts} = data.allMarkdownRemark;

        return (
            <div className="columns is-multiline">
                {posts &&
                posts.map(({node: post}) => {
                    let to = _.trimEnd(post.fields.slug, '/');
                    return (
                        <div className="is-parent column is-6" key={post.id}>
                            <article
                                className={`blog-list-item tile is-child box notification ${
                                    post.frontmatter.featuredstudy ? 'is-featured' : ''
                                    }`}
                            >
                                <header>
                                    {post.frontmatter.featuredimage ? (
                                        <div className="featured-thumbnail">
                                            <PreviewCompatibleImage
                                                imageInfo={{
                                                    image: post.frontmatter.featuredimage,
                                                    alt: `featured image thumbnail for post ${
                                                        post.title
                                                        }`,
                                                }}
                                            />
                                        </div>
                                    ) : null}
                                    <p className="post-meta">
                                        <Link
                                            className="title has-text-primary is-size-4"
                                            to={to}
                                        >
                                            {post.frontmatter.title}
                                        </Link>
                                        <br/>
                                        <span className="subtitle is-size-5">
                      {post.frontmatter.date}
                    </span>
                                    </p>
                                </header>
                                <p>
                                    {post.excerpt}
                                    <br/>
                                    <br/>
                                    <Link className="button" to={to}>
                                        Keep Reading →
                                    </Link>
                                </p>
                            </article>
                        </div>
                    )
                })}
            </div>
        )
    }
}

CaseStudyList.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
};

export default () => (
    <StaticQuery
        query={graphql`
      query CaseStudyQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "case-study" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredstudy
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
        render={(data, count) => <CaseStudyList data={data} count={count}/>}
    />
)
