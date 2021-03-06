import React from "react";
import Layout from "../../components/Layout";
import {VerticalTileGroup} from "../../components/Tile";
import ExternalLink from "../../components/ExternalLink";

function Tile({title}) {
    return (
        <div className="tile is-child">
            <article className="box building-block content">
                <h3>{title}</h3>
            </article>
        </div>
    )
}

export default function Index() {
    return (
        <Layout>
            <section className="section">
                <div className="container">
                    <div className="content">
                        <h1>Getting Started</h1>
                        <p>If you want Avni implemented for your organisation, Avni is available on the cloud. Please signup <a href="/pricing">here</a>. If you want to host Avni your self this page is for you.</p>
                        <section className="section">
                            <div className="columns">
                                <div className="column is-one-third full-centered building-blocks-left">
                                    <div style={{width: '10em'}}>
                                        <span><b>avni</b> is composed of</span>
                                        <span className="building-blocks-four">4</span>
                                        <span>user components</span>
                                    </div>
                                </div>
                                <div className="column is-two-thirds">
                                    <div className="tile is-ancestor">
                                        <VerticalTileGroup>
                                            <Tile title="Mobile app - for field providers"/>
                                            <Tile title="Browser app - for system administration"/>
                                        </VerticalTileGroup>
                                        <VerticalTileGroup>
                                            <Tile title="Browser app - for data entry user"/>
                                            <Tile title="Reporting and dashboard - for program management"/>
                                        </VerticalTileGroup>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h2 className="title">5 Steps to set up Avni</h2>
                    <hr/>
                    <div className="columns">
                        <div className="column is-one-third vertically-centered">
                            <div className="columns">
                                <div className="column is-one-third content">
                                    <h4 className="has-text-grey-light">Step 1</h4>
                                </div>
                                <div className="column content">
                                    <h4>Set up the infrastructure</h4>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="columns">
                                <div className="column">
                                    <div className="box content">
                                        <h5>Use Samanvay's cloud service</h5>
                                        <p>
                                            Easiest way to get started. No need to
                                            setup servers and manage uptime - all the heavy lifting
                                            is taken care of for you. Avni is available as self-serviceable service (i.e. setup everything yourself). Please signup from <a href="/pricing">here</a>. After provision you can do a most of implementation work on your own.
                                        </p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="box content">
                                        <h5>On your own server</h5>
                                        <p>You can deploy Avni yourself. The documentation is <ExternalLink href="https://avni.readme.io/docs/environment-setup-guides" text="here"/>. If you need help you can contact us via <a
                                            href="/about">Email, Gitter</a> or this website.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="columns">
                        <div className="column is-one-third vertically-centered">
                            <div className="columns">
                                <div className="column is-one-third content">
                                    <h4 className="has-text-grey-light">Step 2</h4>
                                </div>
                                <div className="column content">
                                    <h4>Configure your application</h4>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="columns">
                                <div className="column">
                                    <div className="box content">
                                        <ul>
                                            <li>Checkout <ExternalLink href="https://avni.readme.io/v2.0/docs/implementers-guide">Avni implementation
                                                guide</ExternalLink> and <ExternalLink href="https://avni.readme.io/v2.0/docs/environment-setup-guides">Environment setup
                                                guides</ExternalLink></li>
                                            <li>Define your application schema using subject types, programs and encounter types</li>
                                            <li>Configure the forms, for each one of above, with skip logic, validation and decision support rules</li>
                                            <li>Write visit/encounter schedule rules</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="columns">
                        <div className="column is-one-third vertically-centered">
                            <div className="columns">
                                <div className="column is-one-third content">
                                    <h4 className="has-text-grey-light">Step 3</h4>
                                </div>
                                <div className="column content">
                                    <h4>Set up users and translations for them</h4>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="columns">
                                <div className="column">
                                    <div className="box content">
                                        <ul>
                                            <li>Define the catchments and locations you operate in</li>
                                            <li>Create test users and assign their catchments</li>
                                            <li>Create translation for the users if you require</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="columns">
                        <div className="column is-one-third vertically-centered">
                            <div className="columns">
                                <div className="column is-one-third content">
                                    <h4 className="has-text-grey-light">Step 4</h4>
                                </div>
                                <div className="column content">
                                    <h4>Test your application</h4>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="columns">
                                <div className="column">
                                    <div className="box content">
                                        <ul>
                                            <li>Install the app from the play store. Login using the credentials created.</li>
                                            <li>Test the app. Makes changes to step 2 & 3. Re-sync and test again.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="columns">
                        <div className="column is-one-third vertically-centered">
                            <div className="columns">
                                <div className="column is-one-third content">
                                    <h4 className="has-text-grey-light">Step 5</h4>
                                </div>
                                <div className="column content">
                                    <h4>Deploy and use</h4>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="columns">
                                <div className="column">
                                    <div className="box content">
                                        <ul>
                                            <li>Deploy the app to production</li>
                                            <li>Create production users and start using</li>
                                            <li>Create reports, exports and dashboard</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h2 className="title">Get in touch</h2>
                    <hr/>
                    <div className="content">
                        <p>For any questions you may have, please feel free to <a href="/about">contact us</a> and we'll be happy to help you get setup.</p>
                    </div>
                </div>
            </section>
            <br/>
            <br/>
            <br/>
            <br/>
        </Layout>
    )
}
