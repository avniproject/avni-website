import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { withPrefix } from "gatsby"

import useSiteMetadata from '../components/SiteMetadata'
import Features from '../components/Features'
import Navbar from "../components/Navbar"
import banner from '../img/avni-main-banner.png'

console.log(banner)
export const IndexPageTemplate = ({
  features,
}) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
      </Helmet>
      <section className="hero has-background-grey-lighter is-fullheight">
        <div className="hero-head">
          <Navbar/>
        </div>
        <div className="hero-body full-width-image"
             style={{
               backgroundImage: `url(${banner})`,
               display: 'flex',
               justifyContent: 'flex-start',
               alignItems: 'flex-end',
               flexDirection: 'row',
             }}
        >
          <div className="container"
               style={{
                 display: 'flex',
                 flexDirection: 'column',
               }}
          >
            <h1
              className="has-text-weight-bold is-size-4-mobile is-size-3-tablet is-size-2-widescreen"
              style={{
                backgroundColor: 'rgb(16, 16, 16, 0.8)',
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
                backgroundColor: 'rgb(48, 48, 48, 0.7)',
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
        <div className="hero-foot section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content has-text-centered">
                <h3 className="is-size-3-mobile is-size-3-tablet is-size-4-widescreen">Trusted by</h3>
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
}

IndexPageTemplate.propTypes = {
  features: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
      <IndexPageTemplate
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
