import React from "react";
import Navbar from "./Navbar"
import banner from '../img/cover.png'
// import DiwaliBanner from '../img/diwali-banner.jpg'
import {PopupText} from "react-calendly";
import Constants from "../Constants";
import SecondaryCTAButton from "./SecondaryCTAButton";

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
    return (
        <div>
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
                     minHeight: '80vh'
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
                        <SecondaryCTAButton text="Try Avni" link={`/pricing`}/>
                        <p className="button is-primary is-medium" style={{marginTop: 10}}>
                            <PopupText
                                text="Schedule a Demo"
                                url="https://calendly.com/avnisupport-samanvayfoundation/product-demo-and-discussion"
                                styles={{color: 'white', fontWeight: 'bold'}}
                            />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
