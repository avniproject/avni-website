import React from 'react'
import {Link} from 'gatsby'
import logo from '../img/avni-logo-color.png'
import {Location} from '@reach/router'
import Constants from "../Constants";


export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
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
    };

    render() {
        return (
            <nav
                className="navbar is-transparent"
                role="navigation"
                aria-label="main-navigation"
            >
                <div className="container">
                    <div className="navbar-brand">
                        <div style={{paddingTop: '16px', paddingLeft: '12px'}}>
                            <Link to="/" title="Logo">
                                <img
                                    src={logo}
                                    alt="avni"
                                    className="logo"
                                    style={{height: '50px'}}
                                />
                            </Link>
                        </div>
                        {/* Hamburger menu */}
                        <div
                            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                            data-target="navMenu"
                            onClick={() => this.toggleHamburger()}
                        >
                            <span/>
                            <span/>
                            <span/>
                        </div>
                    </div>
                    <Location>
                        {
                            ({location}) => {
                                return (
                                    <div
                                        id="navMenu"
                                        className={`navbar-menu ${this.state.navBarActiveClass}`}
                                        style={{marginLeft: '50px'}}
                                    >
                                        <div className="navbar-start has-text-centered">
                                            <Link to="/features"
                                                  activeClassName="active-nav-item"
                                                  className="navbar-item has-text-weight-bold is-uppercase">
                                                Features
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
                                            <Link to="/pricing"
                                                  activeClassName="active-nav-item"
                                                  className="navbar-item has-text-weight-bold is-uppercase">
                                                Pricing
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
                                                        <a href="https://app.avniproject.org" className="button" target="_blank">LOGIN</a>
                                                    </p>
                                                    <p className="control">
                                                        <a href={`/signup?${Constants.ContactSource}=${Constants.Trial}`} className="is-primary button">TRY FOR FREE</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            }
                        }
                    </Location>
                </div>
            </nav>
        )
    }
}
