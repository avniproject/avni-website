import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout"
import Features from '../components/Features'
import LandingPageHero from "../components/LandingPageHero";
import { VerticalTileGroup } from "../components/Tile";

export const IndexPageTemplate = ({
  features,
}) => (
  <div>
    <section style={{ borderBottom: '1px solid #CCCCCC', borderTop: '1px solid #CCCCCC' }}>
      <div className="container">
        <div className="section">
          <div className="content">
            <Features gridItems={features.blurbs} />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="section">
          <h2 className="has-text-centered is-size-3-mobile is-size-2-desktop has-text-weight-bold">
            Next...
          </h2>
          <br/>
          <br/>
          <div className="tile is-ancestor content">
            <VerticalTileGroup>
              <div className="tile square-tile">
                <Link to="/usage-statistics">
                  <h5 className="has-text-info">Who is using Avni? See usage statistics</h5>
                </Link>
              </div>
              <div className="tile square-tile">
                <Link to="/use-cases">
                  <h5 className="has-text-info">What can it be used for?</h5>
                </Link>
              </div>
            </VerticalTileGroup>
            <VerticalTileGroup>
              <div className="tile square-tile">
                <Link to="/case-studies">
                  <h5 className="has-text-info">Case Studies</h5>
                </Link>
              </div>
              <div className="tile square-tile">
                <Link to="/getting-started">
                  <h5 className="has-text-info">How to get setup?</h5>
                </Link>
              </div>
            </VerticalTileGroup>
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
