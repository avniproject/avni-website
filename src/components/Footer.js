import React from 'react';
import GitHubLogo from '../img/social/GitHub.png';
import TwitterLogo from '../img/social/twitter.svg';
import YouTubeLogo from '../img/social/youtube.png';
import PlayStoreLogo from '../img/social/playstore-icon.png';

const Footer = class extends React.Component {
    render() {
        return (
            <footer className="footer has-text-black" style={{paddingTop: 0, backgroundColor: 'lightgrey'}}>
                <br/>
                <div className="has-text-centered has-text-weight-bold">Avni is fully open source project run by a <a href="https://samanvayfoundation.org/"
                                                                                                                            target="_blank">small
                    technology non-profit</a>
                </div>
                <br/>

                <div className="has-text-centered">
                    <a href="https://github.com/avniproject" target="_blank">
                        <img alt="GitHub" src={GitHubLogo} style={{height: 25, width: 25}}/>
                    </a>
                    <a href="https://twitter.com/avniproject" target="_blank">
                        <img alt="Twitter" src={TwitterLogo} style={{marginLeft: 10, height: 25, width: 25}}/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCShsfKJlw0B3B6Pg2DmQkSQ" target="_blank">
                        <img alt="YouTube" src={YouTubeLogo} style={{height: 25, width: 35, marginLeft: 10}}/>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.openchsclient" target="_blank">
                        <img alt="Play Store" src={PlayStoreLogo} style={{height: 25, width: 25, marginLeft: 10}}/>
                    </a>
                </div>
                <div className="has-text-left">
                    <a href="https://www.netlify.com" target="_blank">
                        <img alt="Netlify" src="https://www.netlify.com/img/global/badges/netlify-dark.svg" style={{height: 25, width: 50, marginLeft: 10}}/>
                    </a>
                </div>
            </footer>
        )
    }
};

export default Footer;
