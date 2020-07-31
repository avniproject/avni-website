import React from 'react'
import {Link} from 'gatsby'
import logo from '../img/avni-logo-color.png'
import {Location} from '@reach/router'
import Constants from "../Constants";
import {PopupText, PopupWidget} from "react-calendly";


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
                                if (location.pathname !== '/signup')
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
                                                <Link to="/demo"
                                                      activeClassName="active-nav-item"
                                                      className="navbar-item has-text-weight-bold is-uppercase">
                                                    Demo
                                                </Link>
                                                <Link to="/case-studies"
                                                      activeClassName="active-nav-item"
                                                      className="navbar-item has-text-weight-bold is-uppercase">
                                                    Case Studies
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
                                                <Link to="/pricing"
                                                      activeClassName="active-nav-item"
                                                      className="navbar-item has-text-weight-bold is-uppercase">
                                                    Pricing
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
                                            <div className="navbar-end">
                                                <div className="navbar-item full-centered">
                                                    <div className="field is-grouped is-grouped-multiline">
                                                        {/*https://tcampb.github.io/react-calendly/?path=/story/components--popuptext*/}
                                                        <p className="button" style={{marginRight: 12, borderColor: 'black', borderStyle: 'solid', borderWidth: 2}}>
                                                            <b><PopupText
                                                                text="SCHEDULE DEMO"
                                                                url="https://calendly.com/avniproject/discuss-demo"
                                                            /></b>
                                                        </p>
                                                        <p className="control">
                                                            <a href={`/signup?${Constants.ContactSource}=${Constants.Trial}`} className="button">FREE TRIAL</a>
                                                        </p>
                                                        <p className="control">
                                                            <a href="https://app.avniproject.org" className="button">LOGIN</a>
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
