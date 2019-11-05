import React from 'react'
//import { Link } from 'gatsby'


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-grey-lighter has-text-black">
        {/*
        <div className="content has-text-centered has-background-grey-lighter has-text-black">
          <div className="container has-background-grey-lighter has-text-black">
            <div className="columns">
              <div className="column is-one-third">
                <section className="menu">
                  <ul className="menu-list has-text-centered-mobile">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/features">
                        Product Features
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/use-cases">
                        Use Cases
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/usage-statistics">
                        Usage Statistics
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-one-third">
                <section>
                  <ul className="menu-list has-text-centered-mobile">
                    <li>
                      <Link className="navbar-item" to="/getting-started">
                        Get Started
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/demo">
                        Demo
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/FAQ">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-one-third">
                <section>
                  <ul className="menu-list has-text-centered-mobile">
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/credits">
                        Credits
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
        */}
        <div className="has-text-right">
          <a href="https://www.netlify.com">
            <img alt="Netlify" src="https://www.netlify.com/img/global/badges/netlify-dark.svg"/>
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
