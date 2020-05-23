import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/avni-logo.png'
import { Location } from '@reach/router'


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <div style={{ paddingTop: '16px', paddingLeft: '12px' }}>
              <Link to="/" title="Logo">
                <img
                  src={logo}
                  alt="avni"
                  className="logo"
                  style={{ height: '50px' }}
                />
              </Link>
            </div>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Location>
                {
                  ({ location }) => {
                    if (location.pathname !== '/')
                    return (
                      <Link to="/" className="navbar-item has-text-weight-bold is-uppercase">
                        Home
                      </Link>
                    )
                  }
                }
              </Location>
              <Link to="/features"
                    activeClassName="active-nav-item"
                    className="navbar-item has-text-weight-bold is-uppercase">
                Features
              </Link>
              <Link to="/use-cases"
                    activeClassName="active-nav-item"
                    className="navbar-item has-text-weight-bold is-uppercase">
                Use Cases
              </Link>
              <Link to="/case-studies"
                    activeClassName="active-nav-item"
                    className="navbar-item has-text-weight-bold is-uppercase">
                Case Studies
              </Link>
              <Link to="/demo"
                    activeClassName="active-nav-item"
                    className="navbar-item has-text-weight-bold is-uppercase">
                Demo
              </Link>
              <Link to="/getting-started"
                    activeClassName="active-nav-item"
                    className="navbar-item has-text-weight-bold is-uppercase">
                Get Started
              </Link>
              <Link to="/faq"
                    activeClassName="active-nav-item"
                    className="navbar-item has-text-weight-bold is-uppercase">
                FAQ
              </Link>
              <Link to="/about"
                    activeClassName="active-nav-item"
                    className="navbar-item has-text-weight-bold is-uppercase">
                About
              </Link>
              <Link to="/blog"
                    activeClassName="active-nav-item"
                    className="navbar-item has-text-weight-bold is-uppercase">
                Blog
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <div className="navbar-item">
              <div className="field is-grouped is-grouped-multiline">
                <p className="control">
                  <a href="https://app.avniproject.org" className="button">Login</a>
                </p>
                <p className="control">
                  <button className="is-primary button">Try for free</button>
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
