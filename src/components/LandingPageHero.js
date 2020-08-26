import React from "react";
import Navbar from "./Navbar"
import banner from '../img/cover.png'
import {PopupText} from "react-calendly";
import Constants from "../Constants";
import SecondaryCTAButton from "./SecondaryCTAButton";

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
                         flexDirection: 'row',
                         minHeight: '60vh'
                     }}
                >
                    <div
                        className="container"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <p
                            className="is-size-6-mobile is-size-3-tablet is-size-2-desktop"
                            style={{

                                color: 'white',
                                lineHeight: '2.2',
                                fontWeight: '600',
                                textAlign: 'center'
                            }}>Community service and data collection platform for non-profits</p>
                        <p
                            className="is-size-6-mobile is-size-3-tablet is-size-2-desktop is-size-3-widescreen"
                            style={{
                                color: 'white',
                                lineHeight: '1',
                                padding: '0.35em',
                                fontWeight: '250',
                                textAlign: 'center'
                            }}><div>Open Source. Cloud Hosting.</div><div>Customisation, Training, and Support Services.</div><div><b>All sectors.</b></div></p>
                        <div className="field is-grouped is-grouped-multiline container" style={{paddingTop: '2rem'}}>
                            <p className="has-text-weight-bold control">
                                <a href={`/signup?${Constants.ContactSource}=${Constants.Trial}`} className="button is-medium">Try for free</a>
                            </p>
                            {/*<SecondaryCTAButton text="Try for free" link={`/signup?${Constants.ContactSource}=${Constants.Trial}`}/>*/}
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
            </section>
        </div>
    )
}
