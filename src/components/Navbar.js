import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import logo from '../img/avni-logo-green.png';
import { Location } from '@reach/router';
import Constants from "../Constants";
import { PopupText } from "react-calendly";
import "./styles/navbar.css"

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [navBarActiveClass, setNavBarActiveClass] = useState('');

    const toggleHamburger = () => {
        setActive(!active);
        setNavBarActiveClass(!active ? 'is-active' : '');
    };

    useEffect(() => {
        if (window.location.pathname === "/") {
            document.body.classList.add("homepage");
        } else {
            document.body.classList.remove("homepage");
        }
    }, [window.location.pathname]);

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
                        className={`navbar-burger burger ${navBarActiveClass}`}
                        data-target="navMenu"
                        onClick={toggleHamburger}
                    >
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
                <Location>
                    {({ location }) => {
                        if (location.pathname !== '/signup')
                            return (
                                <div
                                    id="navMenu"
                                    className={`navbar-menu ${navBarActiveClass}`}
                                    style={{borderRadius:'10px'}}>
                                    <div className="navbar-start has-text-centered">
                                        <Link to="/features"
                                              activeClassName="active-nav-item"
                                              className="navbar-item">
                                            Features
                                        </Link>
                                        <Link to="/demo"
                                              activeClassName="active-nav-item"
                                              className="navbar-item">
                                            Demo
                                        </Link>
                                        <Link to="/pricing"
                                              activeClassName="active-nav-item"
                                              className="navbar-item">
                                            Pricing
                                        </Link>
                                        <Link to="/about"
                                              activeClassName="active-nav-item"
                                              className="navbar-item">
                                            About
                                        </Link>
                                        <div className="navbar-item has-dropdown is-hoverable">
                                            <a className="navbar-link">
                                                Resources
                                            </a>
                                            <div className="navbar-dropdown">
                                                <Link to="/case-studies"
                                                      className="navbar-item">
                                                    Case Studies
                                                </Link>
                                                <Link to="/events"
                                                      className="navbar-item">
                                                    Events
                                                </Link>
                                                <Link to="/getting-started"
                                                      activeClassName="active-nav-item"
                                                      className="navbar-item">
                                                    Getting Started
                                                </Link>
                                                <Link to="/faq"
                                                      className="navbar-item">
                                                    FAQ
                                                </Link>
                                                <Link to="/blog"
                                                      className="navbar-item">
                                                    Blog
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="navbar-end">
                                        <div className="navbar-item full-centered">
                                            <div className="field is-grouped is-grouped-multiline">
                                                <p className="has-text-centered"><a className="navbar-item has-text-weight-bold" href="https://app.avniproject.org">Log in</a></p>
                                                {location.pathname !== '/pricing' && (
                                                    <p className="has-text-weight-bold control">
                                                        <a href={`/signup?${Constants.ContactSource}=${Constants.Trial}`} className="button">Try Avni</a>
                                                    </p>
                                                )}
                                                <p className="button is-primary" style={{ marginRight: 12 }}>
                                                    <PopupText
                                                        text="Schedule a Demo"
                                                        url="https://calendly.com/avnisupport-samanvayfoundation/product-demo-and-discussion"
                                                        styles={{ color: 'white', fontWeight: 'bold' }}
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                    }}
                </Location>
            </div>
        </nav>
    );
};

export default Navbar;