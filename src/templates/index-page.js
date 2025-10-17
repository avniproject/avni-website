import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from "gatsby";
import loadable from '@loadable/component'

import Layout from "../components/Layout"
import LandingPageHero from "../components/LandingPageHero";
import ContactUs from "../components/ContactUs";
import ValuePropositions from "../components/ValuePropositions";
const Authority = loadable(() => import(/* webpackChunkName: "authority" */ "../components/Authority"), { ssr: false });
const Plan = loadable(() => import(/* webpackChunkName: "plan" */ "../components/Plan"), { ssr: false });
const Explanation = loadable(() => import(/* webpackChunkName: "explanation" */ "../components/Explanation"), { ssr: false });
import SEO from "../components/seo"
const Testimonials = loadable(() => import(/* webpackChunkName: "testimonials" */ '../Testimonials'), { ssr: false });

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
                        <Testimonials/>
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
            <SEO title="Avni Field Service and Data Collection Platform"/>
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
