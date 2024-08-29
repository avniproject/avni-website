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
                    free</ExternalLink>. The pricing plans here are not for the software, but to cover the human and computer costs of running Avni on the cloud, and to build your MIS on it. There are two components of this cost - one-time for "App Development" and a recurring cost for "Hosting".
                </p>
                <br/>
                <h1 className="is-size-5 has-text-weight-bold">App Development</h1>
                <br/>
                <p>When you want to use Avni for your organisation, you first need to configure it to suit your needs. You also need to define reports on the built-in analytics platform. We call this "App Development". There are a few ways you could go about it. </p>
                <ol>
                    <li>Simple projects are usually amenable to <em>self-service</em>. A typical simple project would have less than 10 forms that have relatively straightforward rules. For example, if you want to replicate something from Google Forms, you would be able to do it on your own. </li>
                    <li>If your project is simple, you might still want to go through an Avni training to get a good grasp of how to use it to your advantage. We've noticed new users of Avni have trouble using it directly without some hand-holding. Training is included in the <em>Self Service with Training</em> option</li>
                    <li>If your project is complex, or if you don't have someone who is either free or capable of building Avni, then it is best to go with a <em>Fully Serviced Implementation</em> </li>
                </ol>
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
                            <p className="control full-centered">
                                <a href={`/signup?${Constants.ContactSource}=${Constants.Trial}`} className="is-secondary button"><b>SIGNUP</b></a>
                            </p>
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
                            <p className="control full-centered">
                                <a href={`/signup?${Constants.ContactSource}=${Constants.TrainingPlan}`} className="is-secondary button"><b>SIGNUP</b></a>
                            </p>
                        </div>
                    </div>
                    <div className="column is-one-third-tablet is-10-mobile is-offset-1-mobile">
                        <div className="content has-background-grey-lighter" style={{padding: '1em'}}>
                            <p className="is-size-6 has-text-weight-bold">Fully Serviced Implementation</p>
                            <ol>
                                <li>We help you build Avni to your needs</li>
                                <li>We support you in migration from an existing system or integrating to other systems</li>
                                <li>Training of master trainers</li>
                            </ol>
                            <p className="has-text-weight-semibold">Pricing: Custom Quote</p>
                            <p className="control full-centered">
                                <a href={`/signup?${Constants.ContactSource}=${Constants.CustomPlan}`} className="is-secondary button"><b>POST ENQUIRY</b></a>
                            </p>
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
                <br/>
                <p className="is-size-6 has-text-weight-semibold">Pricing Tiers</p>
                <ol>
                    <li>Up to 20 users: ₹7,000/- per month (paid upfront annually)</li>
                    <li>Up to 100 users: ₹10,000/- per month (paid upfront annually)</li>
                    <li>More than 100 users: Custom quote</li>
                </ol>
                <br/>
                <p>PS: <em>All prices are exclusive of taxes</em></p>
            </div>
            <br/>
            <br/>
            <br/>
        </Layout>
    );
}
