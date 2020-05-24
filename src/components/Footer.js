import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-black">
        <div className="has-text-right">
          <a href="https://www.netlify.com">
            <img alt="Netlify" src="https://www.netlify.com/img/global/badges/netlify-dark.svg"/>
          </a>
        </div>
      </footer>
    )
  }
};

export default Footer;
