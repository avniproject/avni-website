import React from 'react';
import GitHubLogo from '../img/social/GitHub.png';
import TwitterLogo from '../img/social/twitter.svg';
import YouTubeLogo from '../img/social/youtube.png';
import PlayStoreLogo from '../img/social/playstore-icon.png';
import ExternalLink from "./ExternalLink";

const Footer = class extends React.Component {
    render() {
        return (
            <footer className="footer has-text-black" style={{paddingTop: 0, backgroundColor: 'lightgrey'}}>
                <br/>
                <div className="has-text-centered has-text-weight-bold">Avni is fully open source project run by a <ExternalLink href="https://samanvayfoundation.org/"
                                                                                                                                 text="small technology non-profit"/>
                </div>
                <br/>

                <div className="has-text-centered">
                    <ExternalLink href="https://github.com/avniproject">
                        <img alt="GitHub" src={GitHubLogo} style={{height: 48, width: 48}}/>
                    </ExternalLink>
                    <ExternalLink href="https://twitter.com/avniproject">
                        <img alt="Twitter" src={TwitterLogo} style={{marginLeft: 10, height: 48, width: 48}}/>
                    </ExternalLink>
                    <ExternalLink href="https://www.youtube.com/channel/UCShsfKJlw0B3B6Pg2DmQkSQ">
                        <img alt="YouTube" src={YouTubeLogo} style={{height: 48, width: 67, marginLeft: 10}}/>
                    </ExternalLink>
                    <ExternalLink href="https://play.google.com/store/apps/details?id=com.openchsclient">
                        <img alt="Play Store" src={PlayStoreLogo} style={{height: 48, width: 48, marginLeft: 10}}/>
                    </ExternalLink>
                </div>
                <div className="has-text-left">
                    <ExternalLink href="https://www.netlify.com">
                        <img alt="Netlify" src="https://www.netlify.com/img/global/badges/netlify-dark.svg" style={{height: 25, width: 50, marginLeft: 10}}/>
                    </ExternalLink>
                </div>
            </footer>
        )
    }
};

export default Footer;