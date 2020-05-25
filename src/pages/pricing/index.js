import React from "react";
import Layout from "../../components/Layout";
import Constants from "../../Constants";

export default function Index() {
    return (
        <Layout>
            <br/>
            <div className="container">
                <h1 className="title">Avni Plans</h1>
                <p>We are offering one time special plan for the first 50 organisations. If you have a higher number of users, or expected forms submissions, or you need any services like support/implementation/training, or any other reason - please use the custom plan to contact us.</p>
                <div className="columns is-mobile is-multiline">
                    <div className="column is-half-tablet is-10-mobile is-offset-1-mobile">
                        <br/>
                        <br/>
                        <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                            <h1>First 50</h1>
                            <p><i>22 signed up so far</i></p>
                            <br/>
                            <p><b>Flat Rs. 30000 annually, including tax</b></p>
                            <p><b>Up to 100 users or 10,000 form submissions per month</b></p>
                            <p><b>Billed one time</b></p>
                            <p><b>Subscription starts after, 3 months of free trial</b></p>
                            <p><b>Community support</b></p>
                            <br/>

                            <p className="control full-centered">
                                <a href={`/signup?${Constants.ContactSource}=${Constants.First50}`} className="is-secondary button"><b>SIGN UP</b></a>
                            </p>
                        </div>
                    </div>

                    <div className="column is-half-tablet is-10-mobile is-offset-1-mobile">
                        <br/>
                        <br/>
                        <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                            <h1>Customised plan</h1>
                            <br/>
                            <p><i>&nbsp;</i></p>
                            <p><b>Annual charges based on your requirements</b></p>
                            <p><b>Billed one or multiple times in a year</b></p>
                            <p><b>Free 3 months trial</b></p>
                            <p><b>Community support</b></p>
                            <p><b>Services - implementation, support, training, product enhancements</b></p>
                            <br/>
                            <p className="control full-centered">
                                <a href={`/signup?${Constants.ContactSource}=${Constants.CustomPlan}`} className="is-secondary button"><b>CONTACT SALES</b></a>
                            </p>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
            <br/>
            <br/>
        </Layout>
    )
}
