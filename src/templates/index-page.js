import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from "gatsby";

import Layout from "../components/Layout"
import LandingPageHero from "../components/LandingPageHero";
import ContactUs from "../components/ContactUs";
import ValuePropositions from "../components/ValuePropositions";
import Authority from "../components/Authority";
import Plan from "../components/Plan";
import Explanation from "../components/Explanation";

export const IndexPageTemplate = ({
                                      features,
                                  }) => (
    <div>
        <section style={{borderBottom: '1px solid #CCCCCC', borderTop: '0px solid #CCCCCC'}}>
            <div className="container">
                <div className="section">
                    <div className="content">
                        <ValuePropositions gridItems={features.blurbs}/>
                        <Plan/>
                        <Authority/>
                        <Explanation/>
                    </div>
                </div>
            </div>
            <ContactUs/>
        </section>
    </div>
);

IndexPageTemplate.propTypes = {
    features: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
};

const IndexPage = ({data}) => {
    const {frontmatter} = data.markdownRemark;

    return (
        <Layout hero={<LandingPageHero/>}>
            <IndexPageTemplate features={frontmatter.features}/>
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
