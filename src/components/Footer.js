import React from 'react'

const Footer = class extends React.Component {
    render() {
        return (
            <footer className="footer has-text-black" style={{paddingTop: 0, backgroundColor: 'lightgrey'}}>
                <br/>
                <div className="has-text-centered has-text-weight-bold">Avni is fully open source project run by small a <a href="https://samanvayfoundation.org/"
                                                                                                                            target="_blank">small
                    technology non-profit</a>
                </div>
                <br/>
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
