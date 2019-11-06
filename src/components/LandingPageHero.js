import React from "react";
import Navbar from "./Navbar"
import banner from '../img/avni-main-banner.png'
import unicef_logo from '../img/unicef-logo.png'
import maha_logo from '../img/gov-mah-logo.png'
import jss_logo from '../img/jss-logo.png'
import ihmp_logo from '../img/ihmp-logo.png'
import tt_logo from '../img/tata_trusts-logo.png'

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
               backgroundPosition: 'center center',
               display: 'flex',
               justifyContent: 'flex-start',
               alignItems: 'flex-end',
               flexDirection: 'row',
               minHeight: '60vh'
             }}
        >
          <div
            className="container"
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h5
              className="is-size-4-mobile is-size-3-tablet is-size-3-desktop is-size-3-widescreen"
              style={{
                backgroundColor: 'rgb(48, 48, 48, 0.8)',
                color: 'white',
                lineHeight: '1.2',
                padding: '0.35em',
                fontWeight: '200',
                  textAlign: 'center'
              }}
            >
              Open Source <b>field service delivery</b> and <b>data collection</b> platform for non-profits and
              governments in all sectors &#x2014; health, water, education, social service
            </h5>
            <div style={{ textAlign: 'center', paddingTop: '1em' }}>
              <a href="/demo" className="button is-dark is-inverted"><b>Try the Demo &raquo;</b></a>
            </div>
          </div>
        </div>
        <div className="hero-foot container">
          <div className="has-text-centered" style={{ paddingTop: '2rem' }}>
            <h4 className="is-size-2-mobile is-size-2-tablet is-size-3-widescreen has-text-grey has-text-weight-bold">
              Trusted by
            </h4>
            <br/>
            <div id="avni-customers" className="columns is-mobile is-multiline">
              <div className="column is-2-tablet is-one-third-mobile"  style={{ marginTop: '-0.4em' }}>
                  <img src={unicef_logo} alt="UNICEF" width="128" height="128" />
              </div>
              <div className="column is-2-tablet is-one-third-mobile">
                <img src={maha_logo} alt="UNICEF" width="128" height="128" />
              </div>
              <div className="column is-2-tablet is-one-third-mobile">
                  <img src={jss_logo} alt="Jan Swasthya Sahyog, Bilaspur" width="128" height="128" />
              </div>
              <div className="column is-2-tablet is-one-third-mobile">
                  <img src={ihmp_logo} alt="Institute of Health Management, Pachod" width="128" height="128" />
              </div>
              <div className="column is-2-tablet is-one-third-mobile">
                  <img src={tt_logo} alt="Tata Trusts" width="128" height="128" />
              </div>
              <div className="column is-2-tablet is-one-third-mobile" style={{ paddingTop: '1.4em' }}>
                <h5 className="has-text-grey has-text-weight-bold">SEWA Rural</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}