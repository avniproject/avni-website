import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link} from "gatsby";

import Layout from "../components/Layout"
import Features from '../components/Features'
import LandingPageHero from "../components/LandingPageHero";
import {VerticalTileGroup} from "../components/Tile";
import social_alpha_logo from '../img/SocialAlphaLogo.png'

export const IndexPageTemplate = ({
                                      features,
                                  }) => (
    <div>
        <section style={{borderBottom: '1px solid #CCCCCC', borderTop: '1px solid #CCCCCC'}}>
            <div className="container">
                <div className="section">
                    <div className="content">
                        <Features gridItems={features.blurbs}/>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="section">
                    <h2 className="has-text-centered is-size-3-mobile is-size-2-desktop has-text-weight-bold">
                        Explore more...
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

                    <h1 className="has-text-centered is-size-3-mobile is-size-2-desktop has-text-weight-bold">Contact Us</h1>
                    <p className="has-text-centered has-text-weight-bold">Feedback, Query, Suggestion, Anything? Please send your message. We will get back to you asap!</p>
                    <br/>
                    <div style={{width: "50%", margin: "auto"}}>
                        <form method="post" action="https://formspree.io/mrgbyoqr">
                            <div>
                                <label className="has-text-weight-bold">Message:</label>
                                <div style={{margin: "auto"}}>
                                    <textarea id="message" name="message" maxLength="6000" rows="7" style={{width: "100%"}}/>
                                </div>
                            </div>
                            <div className="has-text-left has-text-weight-bold" style={{width: "100%", display: "table"}}>
                                <div style={{width: "50%", float: "left"}}>
                                    <label>Your Name:</label>
                                    <div>
                                        <input type="text" className="form-control" id="name" name="name" required style={{width: "95%"}}/>
                                    </div>
                                </div>
                                <div style={{width: "50%", float: "left"}}>
                                    <label>Email:</label>
                                    <div>
                                        <input type="email" className="form-control" id="email" name="_replyto" required style={{width: "100%"}}/>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="has-text-centered">
                                <div className="">
                                    <button type="submit" className="btn">Send &rarr;</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <hr/>
        <div className="content has-text-centered">
            <h4 className="is-size-4 has-text-grey has-text-weight-bold">
                Empowered by
            </h4>
            <img src={social_alpha_logo} alt="Social Alpha" width="192"/>
        </div>
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
