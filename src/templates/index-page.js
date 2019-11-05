import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import Features from '../components/Features'
import LandingPageHero from "../components/LandingPageHero";

export const IndexPageTemplate = ({
  features,
}) => (
  <div>
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
);

IndexPageTemplate.propTypes = {
  features: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout hero={<LandingPageHero/>}>
      <div className="section">
        <div className="content has-text-centered">
          <p>
            Avni is a highly flexible platform for most type of field work.
            You can translate complete design of your program/intervention/project
            into this platform. Once you define schedule of visit/encounter for each
            beneficiary, provider-beneficiary interaction steps for each encounter type,
            input data forms, and expected output from the system to support field workers,
            Avni would instantiate your own working field application based on this description.
          </p>
        </div>
      </div>
      <IndexPageTemplate
        features={frontmatter.features}
      />
    </Layout>
  )
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        features {
          blurbs {
            image
            title
            text
          }
        }
      }
    }
  }
`;
