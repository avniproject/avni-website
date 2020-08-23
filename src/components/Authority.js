import ValueProposition from "./ValueProposition";
import React from "react";
import unicef_logo from "../img/unicef-logo.png";
import jss_logo from "../img/jss-logo.png";
import ihmp_logo from "../img/ihmp-logo.png";
import tt_logo from "../img/tata_trusts-logo.png";
import yenepoya_logo from "../img/yenepoya.png";

const Authority = ({}) => (
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
);

Authority.propTypes = {
};

export default Authority;