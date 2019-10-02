import React from "react";
import Navbar from "./Navbar"
import banner from '../img/avni-main-banner.png'

export default function LandingPageHero() {
  return (
    <div>
      <section className="hero has-background-grey-lighter is-fullheight">
        <div className="hero-head">
          <Navbar/>
        </div>
        <div className="hero-body full-width-image"
             style={{
               backgroundImage: `url(${banner})`,
               backgroundPosition: 'right bottom',
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
            <div style={{ textAlign: 'right' }}>
              <a href="/demo" className="button is-dark is-outlined is-inverted">Try a Demo &raquo;</a>
            </div>
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
    </div>
  )
}