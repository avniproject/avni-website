import React from "react";
import Navbar from "./Navbar"
import banner from '../img/cover.png'
import unicef_logo from '../img/unicef-logo.png'
import jss_logo from '../img/jss-logo.png'
import ihmp_logo from '../img/ihmp-logo.png'
import tt_logo from '../img/tata_trusts-logo.png'
import yenepoya_logo from '../img/yenepoya.png'
import {PopupText} from "react-calendly";
import Constants from "../Constants";

export default function LandingPageHero() {
    return (
        <div>
            <section className="hero is-fullheight">
                <div className="hero-head">
                    <Navbar/>
                </div>
                <div className="hero-body full-width-image"
                     style={{
                         backgroundImage: `url(${banner})`,
                         backgroundPosition: 'center',
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
                        <p
                            className="is-size-6-mobile is-size-3-tablet is-size-3-desktop is-size-3-widescreen"
                            style={{
                                backgroundColor: 'rgb(48, 48, 48, 0.8)',
                                color: 'white',
                                lineHeight: '1.2',
                                padding: '0.35em',
                                fontWeight: '200',
                                textAlign: 'center'
                            }}
                        >
                            Open Source <b>field work</b> and <b>data collection</b> platform for non-profits and
                            governments in all sectors &#x2014; health, water, education, social service...
                        </p>
                        <div className="field is-grouped is-grouped-multiline container" style={{paddingTop: '2rem'}}>
                            <p className="has-text-weight-bold control">
                                <a href={`/signup?${Constants.ContactSource}=${Constants.Trial}`} className="button is-medium">Try for free</a>
                            </p>
                            <p className="button is-primary is-medium" style={{marginRight: 12}}>
                                <PopupText
                                    text="Schedule a Demo"
                                    url="https://calendly.com/avniproject/discuss-demo"
                                    styles={{color:'white', fontWeight:'bold'}}
                                />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hero-foot container">
                    <div className="has-text-centered" style={{paddingTop: '2rem'}}>
                        <h4 className="is-size-2-mobile is-size-2-tablet is-size-3-widescreen has-text-grey has-text-weight-bold">
                            Trusted by
                        </h4>
                        <br/>
                        <div id="avni-customers" className="columns is-mobile is-multiline">
                            <div className="column is-2-tablet is-one-third-mobile" style={{marginTop: '-0.4em'}}>
                                <img src={unicef_logo} alt="UNICEF" width="100"/>
                            </div>

                            <div className="column is-2-tablet is-one-third-mobile">
                                <img src={jss_logo} alt="Jan Swasthya Sahyog, Bilaspur" width="128"/>
                            </div>
                            <div className="column is-2-tablet is-one-third-mobile">
                                <img src={ihmp_logo} alt="Institute of Health Management, Pachod" width="128" height="128"/>
                            </div>
                            <div className="column is-2-tablet is-one-third-mobile">
                                <img src={tt_logo} alt="Tata Trusts" width="128" height="128"/>
                            </div>
                            <div className="column is-2-tablet is-one-third-mobile" style={{marginTop: '1em'}}>
                                <img src={yenepoya_logo} alt="Yenepoya University" width="300"/>
                            </div>
                            <div className="column is-2-tablet is-one-third-mobile" style={{paddingTop: '1.4em'}}>
                                <h5 className="has-text-grey has-text-weight-bold">Sewa Rural</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
