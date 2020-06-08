import React from "react";
import Layout from "../../components/Layout";
import Constants from "../../Constants";
import ExternalLink from "../../components/ExternalLink";

export default function Index() {
    return (
        <Layout>
            <br/>
            <div className="container">
                <h1 className="title">Avni Plans</h1>
                <div className="columns is-mobile is-multiline">
                    <div className="column is-half-tablet is-10-mobile is-offset-1-mobile">
                        <p>Avni is fully open source, and can be <ExternalLink href="https://avni.readme.io/docs/environment-setup-guides">setup and used for
                            free</ExternalLink>.
                            But if you want to use our hosted version so that you don't have to manage / maintain it, then you can look at the plans. We are offering a
                            one time special plan for the first 50 organisations that sign up. If you have a higher number of users, or expected forms submissions, or
                            additional needs - please use the custom plan to contact us. Our hosted option has the following benefits:
                        </p>
                        <div style={{paddingLeft: '1em', paddingTop: '1em'}}>
                            <li>No infrastructure and server management required</li>
                            <li>All upgrades and bug-fixes automatically applied</li>
                            <li>Security and data backup/recovery are all taken care of</li>
                        </div>
                    </div>
                    <div className="column is-half-tablet is-10-mobile is-offset-1-mobile">
                        <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                            <h1>3 Months Free Trial</h1>
                            <br/>
                            <li><b>All features</b></li>
                            <li><b>Up to 100 users or 10,000 form submissions per month</b></li>
                            <li><b>No Credit Card Required</b></li>
                            <li><b>Community support</b></li>
                            <br/>

                            <p className="control full-centered">
                                <a href={`/signup?${Constants.ContactSource}=${Constants.Trial}`} className="is-secondary button"><b>SIGN UP</b></a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="columns is-mobile is-multiline">
                    <div className="column is-half-tablet is-10-mobile is-offset-1-mobile">
                        <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                            <h1>First 50</h1>
                            <p><i><ExternalLink href="https://reporting.avniproject.org/public/dashboard/3b77176c-b304-4e1e-a07c-936080c0e325">22 signed up so
                                far</ExternalLink></i></p>
                            <br/>
                            <li><b>All features</b></li>
                            <li><b>Flat Rs. 30,000 annually, including tax</b></li>
                            <li><b>Up to 100 users or 10,000 form submissions per month</b></li>
                            <li><b>Billed one time</b></li>
                            <li><b>Free 3 months trial (no credit card)</b></li>
                            <li><b>Community support</b></li>
                            <br/>

                            <p className="control full-centered">
                                <a href={`/signup?${Constants.ContactSource}=${Constants.First50}`} className="is-secondary button"><b>SIGN UP</b></a>
                            </p>
                        </div>
                    </div>

                    <div className="column is-half-tablet is-10-mobile is-offset-1-mobile">
                        <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                            <h1>Customised plan</h1>
                            <br/>
                            <p><i>&nbsp;</i></p>
                            <li><b>All features</b></li>
                            <li><b>Annual charges based on your requirements</b></li>
                            <li><b>Billed one or multiple times in a year</b></li>
                            <li><b>Free 3 months trial (no credit card)</b></li>
                            <li><b>Community support</b></li>
                            <li><b>Services - implementation, support, training, product enhancements</b></li>
                            <br/>
                            <p className="control full-centered">
                                <a href={`/signup?${Constants.ContactSource}=${Constants.CustomPlan}`} className="is-secondary button"><b>POST ENQUIRY</b></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
        </Layout>
    )
}
