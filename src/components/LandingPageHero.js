import React from "react";
import Navbar from "./Navbar"
// import banner from '../img/cover.png'
// import DiwaliBanner from '../img/diwali-banner.jpg'
import Constants from "../Constants";
import SecondaryCTAButton from "./SecondaryCTAButton";
import Img from "gatsby-image";
import {graphql, useStaticQuery} from 'gatsby';
import { Helmet } from "react-helmet";

let subtitle = function (text) {
  return <p
    className="is-size-4-mobile is-size-3-tablet is-size-2-desktop is-size-3-widescreen"
    style={{
      color: 'white',
      lineHeight: '1',
      fontWeight: '500',
      textAlign: 'center'
    }}>{text}</p>;
};

export default function LandingPageHero() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cover.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 70, toFormat: JPG) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div>
      <Helmet>
        <link
          rel="preload"
          as="image"
          href={data.file.childImageSharp.fluid.src}
          imagesrcset={data.file.childImageSharp.fluid.srcSet}
        />
      </Helmet>
      <div className="hero-head">
        <Navbar/>
      </div>
      <div className="hero-body full-width-image"
           style={{
             backgroundPosition: 'center',
             display: 'flex',
             justifyContent: 'flex-start',
             flexDirection: 'row',
             minHeight: '80vh'
           }}
      >
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt=""
          fadeIn={false}
          loading="eager"
          style={{
            position: "absolute",
            top: "60px",
            left: 0,
            width: "100vw",
            height: "82vh",
            minWidth: "100vw",
            minHeight: "500px",
            zIndex: -1
          }}
        />
        <div
          className="container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <p
            className="is-size-3-mobile is-size-3-tablet is-size-2-desktop is-size-1-widescreen"
            style={{
              color: 'white',
              lineHeight: '1',
              fontWeight: '600',
              textAlign: 'center'
            }}>Community service and data collection platform for non-profits</p>
          <br/>
          {subtitle("Designed to work for all sectors")}
          {subtitle("Health, Education, Sanitation, Water, Waste, Agriculture, Social Security.")}
          <div style={{paddingTop: '1rem', flexDirection: 'column', display: 'flex', alignItems: 'center'}}>
            <SecondaryCTAButton text="Try for free" link={`/signup?${Constants.ContactSource}=${Constants.Trial}`}/>
            <p className="button is-primary is-medium" style={{marginTop: 10}}>
              <a
                href="https://calendly.com/avnisupport-samanvayfoundation/product-demo-and-discussion"
                style={{color: 'white', fontWeight: 'bold'}}
              >
                Schedule a Demo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
