import React from 'react';
import Layout from '../../components/Layout';
import Constants from '../../Constants';
import ExternalLink from '../../components/ExternalLink';

export default function Index() {
    return (
        <Layout>
            <br/>
            <div className="container">
                <h1 className="title">Avni Plans</h1>
                <br/>
                <p>Avni is fully open source, and can be <ExternalLink
                    href="https://avni.readme.io/docs/environment-setup-guides">setup and used for
                    free</ExternalLink>. These plans are meant if you choose to host your application on the Avni
                    cloud, or if you would want to be trained on Avni.
                </p>
                <br/>
                <h1 className="is-size-5 has-text-weight-bold">Avni App and Data Analytics Development</h1>
                <br/>
                <div className="columns is-mobile is-multiline">
                    <div className="column is-one-third-tablet is-10-mobile is-offset-1-mobile">
                        <div className="content has-background-grey-lighter" style={{padding: '1em'}}>
                            <p className="is-size-6 has-text-weight-bold">Self Service</p>
                            <ol>
                                <li>Signup for an account</li>
                                <li>Develop your app and reports</li>
                                <li>Use online community support channel for support</li>
                                <li>One month of free hosting</li>
                            </ol>
                            <p className="has-text-weight-semibold">Pricing: Free</p>
                        </div>
                    </div>
                    <div className="column is-one-third-tablet is-10-mobile is-offset-1-mobile">
                        <div className="content has-background-grey-lighter" style={{padding: '1em'}}>
                            <p className="is-size-6 has-text-weight-bold">Self Service with Training</p>
                            <ol>
                                <li>12 hours of Avni low-code platform live training</li>
                                <li>8 hours of consulting support over the next 1 month</li>
                                <li>Develop your app and reports</li>
                            </ol>
                            <p className="has-text-weight-semibold">Pricing: ₹40,000/-</p>
                        </div>
                    </div>
                    <div className="column is-one-third-tablet is-10-mobile is-offset-1-mobile">
                        <div className="content has-background-grey-lighter" style={{padding: '1em'}}>
                            <p className="is-size-6 has-text-weight-bold">Samanvay Serviced Implementation</p>
                            <ol>
                                <li>We help you build Avni to your needs</li>
                                <li>We support you in migration from an existing system or integrating to other systems</li>
                                <li>Training of master trainers</li>
                            </ol>
                            <p className="has-text-weight-semibold">Pricing: Custom Quote</p>
                        </div>
                    </div>
                </div>
                <br/>
                <h1 className="is-size-5 has-text-weight-bold">Avni Cloud Hosting</h1>
                <p>Once you develop your application, it can be hosted on the Avni cloud. See the plans below to get a better understanding of your options.</p>
                <br/>
                <p className="is-size-6 has-text-weight-semibold">What's included</p>
                <ol>
                    <li>Hosting of your application on the Avni cloud</li>
                    <li>Regular upgrades of Avni and other components</li>
                    <li>Data backups</li>
                    <li>Maintenance of the Avni application on the PlayStore</li>
                    <li>Priority support on end-user applications</li>
                    <li>Pre-installed community version of Metabase or Superset (choose one)</li>
                </ol>
                <p className="is-size-6 has-text-weight-semibold">Pricing Tiers</p>
                <ol>
                    <li>Up to 20 users: ₹7,000 per month (paid upfront annually)</li>
                    <li>Up to 100 users: ₹10,000 per month (paid upfront annually)</li>
                    <li>More than 100 users: Custom quote</li>
                </ol>
                <br/><br/>
            </div>
            <br/>
            <br/>
            <br/>
        </Layout>
    );
}
