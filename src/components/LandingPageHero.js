import React from "react";
import Navbar from "./Navbar"
import banner from '../img/avni-main-banner.png'
import unicef_logo from '../img/unicef-logo.png'
import moha_logo from '../img/moha-logo.png'
import jss_logo from '../img/jss-logo.png'
import ihmp_logo from '../img/ihmp-logo.png'
import sewa_rural_logo from '../img/sewa-rural.png'
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
                         backgroundPosition: 'right bottom',
                         display: 'flex',
                         justifyContent: 'flex-start',
                         alignItems: 'flex-end',
                         flexDirection: 'row',
                     }}
                >
                    <div
                        className="container"
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
                            Open Source platform for field based service delivery and data collection
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
                            Designed for the development sector, <b>avni</b> strengthens field capacity for non-profits
                            and governments across sectors - like health, water, education and social welfare
                        </h5>
                        <div style={{textAlign: 'center', paddingTop: '1em'}}>
                            <a href="/demo" className="button is-dark is-inverted"><b>Try the Demo &raquo;</b></a>
                        </div>
                    </div>
                </div>
                <div className="hero-foot section">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="content has-text-centered">
                                <h3 className="is-size-3-mobile is-size-3-tablet is-size-4-widescreen">Trusted by</h3>
                                <div id="avni-customers" className="columns">
                                      <span className="column is-2">
                                        <img src={unicef_logo} alt="UNICEF"/>
                                      </span>
                                    <span className="column is-2">
                                        <img src={moha_logo} alt="Government of Assam"/>
                                      </span>
                                    <span className="column is-2">
                                        <img src={jss_logo} alt="Jan Swasthya Sahyog, Bilaspur"/>
                                      </span>
                                    <span className="column is-2">
                                        <img src={sewa_rural_logo} alt="Sewa Rural"/>
                                      </span>
                                    <span className="column is-2">
                                        <img src={ihmp_logo} alt="Institute of Health Management, Pachod"/>
                                      </span>
                                    <span className="column is-2">
                                        <img src={tt_logo} alt="Tata Trusts"/>
                                      </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-foot section">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="content has-text-centered">
                                <p>Avni is a highly flexible platform for most type of field work. You can translate complete design of your program/intervention/project into avni platform. You can define schedule of visit/encounter for each beneficiary, provider-beneficiary interaction steps for each encounter type, input data forms, and expected output from the system to support field workers. Avni would instantiate your own working field application based on this description.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
)
}