import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout"
import Features from '../components/Features'
import LandingPageHero from "../components/LandingPageHero";
import { VerticalTileGroup } from "../components/Tile";
import social_alpha_logo from '../img/SocialAlphaLogo.png'

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
                  <span className="has-text-info">Who is using Avni? See usage statistics</span>
                </Link>
              </div>
              <div className="tile square-tile">
                <Link to="/use-cases">
                  <span className="has-text-info">What can it be used for?</span>
                </Link>
              </div>
            </VerticalTileGroup>
            <VerticalTileGroup>
              <div className="tile square-tile">
                <Link to="/case-studies">
                  <span className="has-text-info">Case Studies</span>
                </Link>
              </div>
              <div className="tile square-tile">
                <Link to="/getting-started">
                  <span className="has-text-info">How to get setup?</span>
                </Link>
              </div>
            </VerticalTileGroup>
          </div>
        </div>
      </div>
    </section>
    <div className="content has-text-centered">
      <h4 className="is-size-4 has-text-grey has-text-weight-bold">
        Backed by
      </h4>
      <img src={social_alpha_logo} alt="Social Alpha" width="192" />
    </div>
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
