import React from "react";
import unicef_logo from "../img/unicef-logo.png";
import jss_logo from "../img/jss-logo.png";
import ihmp_logo from "../img/ihmp-logo.png";
import yenepoya_logo from "../img/yenepoya.png";
import sewa_rural_logo from "../img/authority/sewa-rural.jpeg";
import SecondaryCTAButton from "./SecondaryCTAButton";
import NoahImage from '../img/testimonials/noah.jpg';
import ShobhabenImage from '../img/testimonials/shobhaben.png';
import MaitriImage from '../img/testimonials/maitri.png';
import ExternalLink from "./ExternalLink";

const Authority = ({}) => (
    <div className="container" style={{alignItems: 'center', flexDirection: 'column', display: 'flex'}}>
        <br/>
        <br/>
        <div className="has-text-centered">
            <h2 className="is-size-2-mobile is-size-2-tablet is-size-3-widescreen has-text-weight-bold"><u>Avni testimonials</u></h2>
        </div>
        <br/>
        <div style={{alignItems: 'center', flexDirection: 'row', display: 'flex', justifyContent: "center", flexWrap: "wrap"}}>
            <div><img src={NoahImage} width="230px"/></div>
            <div style={{maxWidth: "650px", padding: 15}}>
                <div><h4><i>Earlier our health workers used to bring their paper records to the MIS data entry person. Now with Avni - our health workers manage the data in the
                    field, make monthly data presentation themselves, and have gained even more respect in the community. We have seen transformational empowerment. Our health workers
                    love Avni.</i></h4></div>
                <div><b>Noah Levinson, Co-founder, <ExternalLink text="Calcutta Kids" href="https://calcuttakids.org/"/></b></div>
            </div>
        </div>
        <br/>
        <div className="has-text-centered">
            <h1 className="is-size-2-mobile is-size-2-tablet is-size-3-widescreen has-text-weight-bold">...</h1>
        </div>
        <br/>
        <div style={{alignItems: 'center', flexDirection: 'row', display: 'flex', justifyContent: "center", flexWrap: "wrap"}}>
            <div><img src={ShobhabenImage} width="275px"/></div>
            <div style={{maxWidth: "600px", padding: 25}}>
                <div><h4><i>Our adolescent program data used to sit in registers and excel. Because of Avni analytics, we uncovered vulnerable adolescents having different problems. Somewhere high-risk behaviour, while others with high levels of anaemia, much poorer menstrual hygiene practices, sickle cell disease, skin diseases, and so on. Avni has helped us address the most pressing problems of our clients. Our supervisors are now able to schedule their fieldwork more effectively.</i></h4></div>
                <div><b>Dr Shobha Shah and Maitri Vayeda, <ExternalLink text="Sewa Rural" href="https://sewarural.org/"/></b></div>
            </div>
            <div><img src={MaitriImage} width="275px"/></div>
        </div>
        <br/>
        <br/>
        <br/>

        <div className="has-text-centered">
            <h2 className="is-size-2-mobile is-size-2-tablet is-size-3-widescreen has-text-weight-bold">
                <u>Avni is trusted by</u>
            </h2>
            <br/>
            <div id="avni-customers" className="columns is-mobile is-multiline"
                 style={{alignItems: 'center', flexDirection: 'row', display: 'flex', justifyContent: 'center'}}>
                <div className="column is-4-tablet is-one-third-mobile" style={{marginTop: '-0.4em'}}>
                    <img src={unicef_logo} alt="UNICEF"/>
                </div>
                <div className="column is-4-tablet is-one-third-mobile">
                    <img src={sewa_rural_logo} alt="Sewa Rural"/>
                    <h5 className="has-text-grey has-text-weight-bold">Sewa Rural</h5>
                </div>
                <div className="column is-4-tablet is-one-third-mobile">
                    <img src={ihmp_logo} alt="Institute of Health Management, Pachod"/>
                </div>
                <div className="column is-4-tablet is-one-third-mobile">
                    <img src={yenepoya_logo} alt="Yenepoya University"/>
                </div>
                <div className="column is-4-tablet is-one-third-mobile">
                    <img src={jss_logo} alt="Jan Swasthya Sahyog, Bilaspur"/>
                </div>
            </div>
        </div>
        <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-around'}}>
            <SecondaryCTAButton text="All projects" link="/case-studies#avni-implementations"/>
            <span style={{marginLeft: 5}}/>
            <SecondaryCTAButton text="Case studies" link="/case-studies"/>
        </div>
        <br/>
    </div>
);

Authority.propTypes = {};

export default Authority;