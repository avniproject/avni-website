import React from 'react';
import Layout from '../../components/Layout';
import Constants from '../../Constants';
import ExternalLink from '../../components/ExternalLink';

export default function Index() {
    return (
        <Layout>
            <div className="container" style={{paddingLeft: '1em', paddingRight: '1em'}}>
                <h1 className="title">Avni Pricing</h1>
                <p>Avni is fully open source, and can be <ExternalLink
                    href="https://avni.readme.io/docs/environment-setup-guides">setup and used for
                    free</ExternalLink>. The pricing plans here are not for the software, but to cover the human and
                    computer costs of running Avni on the cloud, and to build your MIS on it. There are two components
                    of this cost</p>
                <ol style={{paddingLeft: '1em', paddingRight: '1em'}}>
                    <li>A one-time "App Development" cost</li>
                    <li>A recurring "Avni Cloud Hosting" cost</li>
                </ol>
                <br/>
                <h1 className="is-size-5 has-text-weight-bold">Avni Plans</h1>
                <br/>
                <div className="columns is-mobile is-multiline">
                    <div className="column is-one-third-tablet is-10-mobile is-offset-1-mobile">
                        <div className="content has-background-grey-lighter" style={{padding: '1em', minHeight: '30em'}}>
                            <p className="is-size-5 has-text-weight-bold has-text-centered">Self-Service</p>
                            <ul>
                                <li>Develop your app and reports yourself</li>
                                <li>Use online community support channel for support</li>
                                <li>One month of free hosting</li>
                            </ul>
                            <p className="has-text-weight-semibold">Pricing: Free</p>
                            <br/>
                            <p className="is-size-6 has-text-weight-bold">Avni Cloud Hosting (After first month)</p>
                            <ol style={{paddingLeft: '1em', paddingRight: '1em'}}>
                                <li>Up to 20 users, 5k forms per month: <span className="has-text-weight-semibold">₹7,000/- per month</span> (paid upfront annually)</li>
                                <li>Up to 100 users:, 10k forms per month <span className="has-text-weight-semibold">₹10,000/- per month</span> (paid upfront annually)</li>
                                <li>More than 100 users: Custom quote</li>
                            </ol>
                            <p className="control full-centered">
                                <a href={`/signup?${Constants.ContactSource}=${Constants.Trial}`}
                                   className="is-primary button"><b>TRY FOR FREE</b></a>
                            </p>
                        </div>
                    </div>
                    <div className="column is-one-third-tablet is-10-mobile is-offset-1-mobile">
                        <div className="content has-background-grey-lighter" style={{padding: '1em', minHeight: '30em'}}>
                            <p className="is-size-5 has-text-weight-bold has-text-centered">Assisted Self-Service</p>
                            <ul>
                                <li>12 hours of Avni low-code platform live training</li>
                                <li>8 hours of consulting support over the next 1 month</li>
                                <li>One month of free hosting after training</li>
                            </ul>
                            <p className="has-text-weight-semibold">Pricing: ₹40,000/-</p>
                            <br/>
                            <p className="is-size-6 has-text-weight-bold">Avni Cloud Hosting (After first month)</p>
                            <ol style={{paddingLeft: '1em', paddingRight: '1em'}}>
                                <li>Up to 20 users, 5k forms per month: <span className="has-text-weight-semibold">₹7,000/- per month</span> (paid upfront annually)</li>
                                <li>Up to 100 users:, 10k forms per month <span className="has-text-weight-semibold">₹10,000/- per month</span> (paid upfront annually)</li>
                                <li>More than 100 users: Custom quote</li>
                            </ol>
                            <p className="control full-centered">
                                <a href={`/signup?${Constants.ContactSource}=${Constants.TrainingPlan}`}
                                   className="is-primary button"><b>SIGNUP</b></a>
                            </p>
                        </div>
                    </div>
                    <div className="column is-one-third-tablet is-10-mobile is-offset-1-mobile">
                        <div className="content has-background-grey-lighter" style={{padding: '1em', minHeight: '30em'}}>
                            <p className="is-size-5 has-text-weight-bold has-text-centered">Avni Managed</p>
                            <ul>
                                <li>We help you build Avni to your needs</li>
                                <li>We support you in migration from an existing system or integrating to other
                                    systems
                                </li>
                                <li>We train your master trainers</li>
                            </ul>
                            <p className="has-text-weight-semibold">Pricing: Custom Quote</p>
                            <br/>
                            <p className="is-size-6 has-text-weight-bold">Avni Cloud Hosting (After go-live)</p>
                            <ol style={{paddingLeft: '1em', paddingRight: '1em'}}>
                                <li>Up to 20 users, 5k forms per month: <span className="has-text-weight-semibold">₹7,000/- per month</span> (paid upfront annually)</li>
                                <li>Up to 100 users, 10k forms per month: <span className="has-text-weight-semibold">₹10,000/- per month</span> (paid upfront annually)</li>
                                <li>More than 100 users: Custom quote</li>
                            </ol>
                            <p className="control full-centered">
                                <a href={`/signup?${Constants.ContactSource}=${Constants.CustomPlan}`}
                                   className="is-primary button"><b>POST ENQUIRY</b></a>
                            </p>
                        </div>
                    </div>
                </div>
                <h1 className="is-size-5 has-text-weight-bold">App Development</h1>
                <br/>
                <p>When you want to use Avni for your organisation, you first need to configure it to suit your needs.
                    You also need to define reports on the built-in analytics platform. We call this "App Development".
                    There are a few ways you could go about it. </p>
                <ol style={{paddingLeft: '1em', paddingRight: '1em'}}>
                    <li>Simple projects are usually amenable to <span className="has-text-weight-semibold">self-service</span>. A typical simple project would
                        have less than 5 forms that have relatively straightforward rules. For example, if you want to
                        replicate something from Google Forms, you would be able to do it on your own.
                    </li>
                    <li>If your project is simple, you might still want to go through an Avni training to get a good
                        grasp of how to use it to your advantage. We've noticed new users of Avni have trouble using it
                        directly without some hand-holding. Training is included in the <span className="has-text-weight-semibold">Assisted self-service</span> option
                    </li>
                    <li>If your project is complex, or if you don't have someone who is either free or capable of
                        building Avni, then it is best to go with a <span className="has-text-weight-semibold">Fully Serviced Implementation</span></li>
                </ol>
                <br/>
                <h1 className="is-size-5 has-text-weight-bold">Avni Cloud Hosting</h1>
                <p>Once you develop your application, it can be hosted on the Avni cloud. See the plans below to get a
                    better understanding of your options.</p>
                <br/>
                <p className="is-size-6 has-text-weight-semibold">What's included</p>
                <ol style={{paddingLeft: '1em', paddingRight: '1em'}}>
                    <li>Hosting of your application on the Avni cloud</li>
                    <li>Regular upgrades of Avni and other components</li>
                    <li>Data backups</li>
                    <li>Maintenance of the Avni application on the PlayStore</li>
                    <li>Priority support on end-user applications</li>
                    <li>Pre-installed community version of Metabase or Superset (choose one)</li>
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
