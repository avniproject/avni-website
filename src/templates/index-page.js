import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Features from '../components/Features'
import Navbar from "../components/Navbar";

export const IndexPageTemplate = ({
  image,
  features,
}) => (
  <div>
    <section className="hero is-fullheight">
      <div className="hero-head">
        <header>
          <Navbar/>
        </header>
      </div>
      <div
        className="hero-body full-width-image"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          flexDirection: 'row',
          paddingLeft: '1em',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '98%'
          }}
        >
          <h1
            className="has-text-weight-bold is-size-4-mobile is-size-3-tablet is-size-2-widescreen"
            style={{
              boxShadow:
                'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
              backgroundColor: 'rgb(16, 16, 16)',
              color: 'white',
              lineHeight: '1.1',
              padding: '0.35em 0.5em',
            }}
          >
            Intelligent <u>mobile data collection</u> and <u>reporting</u> platform to empower your
            on-ground team with <u>real-time decisions</u>
          </h1>
          <h5
            className="is-size-7-mobile is-size-7-tablet is-size-4-widescreen"
            style={{
              boxShadow:
                'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
              backgroundColor: 'rgb(48, 48, 48)',
              color: 'white',
              lineHeight: '1.2',
              padding: '0.35em',
              fontWeight: '200',
            }}
          >
            Designed for the development sector, <b>avni</b> is used by non-profits
            and governments to collect intervention-related data across sectors like
            healthcare, environment, education and social welfare and to gain insights
            into their programs
          </h5>
        </div>
      </div>
      <div className="hero-foot">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content has-text-centered">
              <h2 className="is-size-3-mobile is-size-3-tablet is-size-2-widescreen">Trusted by</h2>
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
  features: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
      <IndexPageTemplate
        image={frontmatter.image}
        features={frontmatter.features}
      />
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        features {
          blurbs {
            image {
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
