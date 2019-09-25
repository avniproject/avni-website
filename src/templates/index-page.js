import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  features,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingLeft: '1em',
        height: '60vh'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '70%'
        }}
      >
        <h1
          className="has-text-weight-bold is-size-4-mobile is-size-3-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(16, 16, 16)',
            color: 'white',
            lineHeight: '1.1',
            padding: '0.35em 0.5em',
          }}
        >
          {title}
        </h1>
        <h3
          className="is-size-7-mobile is-size-6-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(48, 48, 48)',
            color: 'white',
            lineHeight: '1.2',
            padding: '0.35em',
            fontWeight: '200'
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content has-text-centered">
                <h2>Trusted by</h2>
                <div id="avni-customers" className="columns">
                  <span className="column is-2">UNICEF</span>
                  <span className="column is-2">Ministry of Health, Assam</span>
                  <span className="column is-2">Jan Swasthya Sahyog</span>
                  <span className="column is-2">SEWA</span>
                  <span className="column is-2">IHMP</span>
                  <span className="column is-2">TATA Trusts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <Features gridItems={features.blurbs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  features: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        features={frontmatter.features}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subheading
        features {
          blurbs {
            icon {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
          }
        }
      }
    }
  }
`
