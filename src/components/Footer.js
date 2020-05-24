import React from 'react'
import social_alpha_logo from "../img/SocialAlphaLogo.png";

const Footer = class extends React.Component {
    render() {
        return (
            <footer className="footer has-text-black" style={{paddingTop: 0}}>
                <div className="has-text-right">
                    <a href="https://www.socialalpha.org/">
                        <img src={social_alpha_logo} style={{height: 50, width: 100, marginRight: 24}}
                             alt="Social Alpha"/>
                    </a>
                    <a href="https://www.netlify.com">
                        <img alt="Netlify" src="https://www.netlify.com/img/global/badges/netlify-dark.svg"/>
                    </a>
                </div>
            </footer>
        )
    }
};

export default Footer;
