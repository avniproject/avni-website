import React from "react";
import unicef_logo from "../img/unicef-logo.png";
import jss_logo from "../img/jss-logo.png";
import ihmp_logo from "../img/ihmp-logo.png";
import tt_logo from "../img/tata_trusts-logo.png";
import yenepoya_logo from "../img/yenepoya.png";
import SecondaryCTAButton from "./SecondaryCTAButton";

const Authority = ({}) => (
    <div className="container" style={{alignItems: 'center', flexDirection: 'column', display: 'flex'}}>
        <div className="has-text-centered">
            <h2 className="is-size-2-mobile is-size-2-tablet is-size-3-widescreen has-text-weight-bold">
                Avni is trusted by
            </h2>
            <br/>
            <div id="avni-customers" className="columns is-mobile is-multiline" style={{alignItems: 'center', flexDirection: 'row', display: 'flex', justifyContent: 'space-around'}}>
                <div className="column is-4-tablet is-one-third-mobile" style={{marginTop: '-0.4em'}}>
                    <img src={unicef_logo} alt="UNICEF"/>
                </div>
                <div className="column is-4-tablet is-one-third-mobile">
                    <img src={jss_logo} alt="Jan Swasthya Sahyog, Bilaspur"/>
                </div>
                <div className="column is-4-tablet is-one-third-mobile">
                    <img src={ihmp_logo} alt="Institute of Health Management, Pachod"/>
                </div>
                <div className="column is-4-tablet is-one-third-mobile">
                    <img src={yenepoya_logo} alt="Yenepoya University"/>
                </div>
                <div className="column is-4-tablet is-one-third-mobile" style={{paddingBottom: '2em'}}>
                    <h4 className="has-text-grey has-text-weight-bold">Sewa Rural</h4>
                </div>
            </div>
        </div>
        <SecondaryCTAButton text="View all projects" link="/case-studies#avni-implementations"/>
        <SecondaryCTAButton text="View case studies" link="/case-studies"/>
    </div>
);

Authority.propTypes = {};

export default Authority;