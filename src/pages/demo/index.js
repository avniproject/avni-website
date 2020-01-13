import React from "react";
import Layout from "../../components/Layout";


let userDetails = function (user, implAdminUser) {
    return <p>
        User={user}
        <br/>
        Admin user (for web)={implAdminUser}
        <br/>
        Password (both)=password
    </p>;
};

export default function Index() {
    return (
        <Layout>
            <div className="container">
                <div className="columns is-mobile is-multiline">
                    <div className="column is-half-tablet is-10-mobile is-offset-1-mobile">
                        <div className="content">
                            <h1 className="title">Demo</h1>
                            <h3>Install the app from Android Play Store</h3>
                            <p>
                                On your Android device, go to <b>Play Store</b>&nbsp;
                                <a href="https://play.google.com/store/apps/details?id=com.openchsclient" target="_blank">[link]</a>,
                                &nbsp;search for OpenCHS or Avni, and <b>install</b> the field app.
                            </p>

                            <h3>System administration app</h3>
                            <p>
                                For administration app in your browser go to <a
                                href="https://server.openchs.org" target="_blank">https://server.openchs.org</a>.</p>

                            <h3>Reporting and dashboard capability</h3>
                            <p>
                                Avni uses metabase for reporting, analytics and dashboards. You can learn more about metabase <a
                                href="https://www.metabase.com/docs/latest/users-guide/start.html" target="_blank">here</a> or checkout <a href="/usage-statistics">Avni's
                                own dashboard</a> which has been created using metabase.</p>

                            {/*<h3>App designer (under development)</h3>*/}
                            {/*<p>*/}
                            {/*App designer is the new feature that will be released soon but is available for preview. This will allow most of the form designing and*/}
                            {/*data model setup from the browser interface. For this go to <a*/}
                            {/*href="https://staging.openchs.org">https://staging.openchs.org</a></p>*/}

                            <h3>About the demo and login details</h3>
                            <p>See below the logins that you can use in the app. These demos are inspired from real
                                implementations of Avni, created to demonstrate flexibility and most features of the platform.</p>

                            <small>
                                <i>
                                    <b>Note</b>: After trying one demo if you want to try a different demo login,
                                    then you would need to uninstall the app and install it again. We <a
                                    href="https://github.com/avniproject/avni-roadmap/projects/1?fullscreen=true&card_filter_query=label%3Acore-product"
                                    target="_blank">will be releasing</a> reporting platform logins for demo too.
                                </i>
                            </small>
                        </div>
                    </div>
                    <div className="column is-half-tablet is-10-mobile is-offset-1-mobile">
                        <br/>
                        <br/>
                        <br/>
                        <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                            <h2>Schedule a one-on-one demo</h2>
                            <p>
                                If you would like a personalised demo over Google Hangouts or Skype,
                                do not hesitate to drop us a mail at&nbsp;
                                <a href="mailto:avni-project@googlegroups.com">avni-project@googlegroups.com</a>&nbsp;
                                <br/>
                            </p>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="columns is-mobile is-multiline">
                    <div className="column is-half-tablet is-10-mobile is-offset-1-mobile">
                        <div className="content">
                            <h3>Demo login</h3>
                            <hr/>
                            <h5>Track and support adolescents under risk</h5>
                            {userDetails("adol-demo", "adol-demo-admin")}
                            <h5>Child growth monitoring</h5>
                            {userDetails("phulwari-demo", "admin@phulwari_demo")}
                            <h5>Data reporting of dam de-silting work</h5>
                            <p>
                                User=ddm-demo
                                <br/>
                                Password=password
                            </p>
                            <br/>
                        </div>
                    </div>
                    <div className="column is-half-tablet is-10-mobile is-offset-1-mobile">
                        <div className="content">
                            <h3>A few more login</h3>
                            <hr/>
                            <h4>Cancer Screening</h4>
                            <p>
                                User=canscr-demo
                                <br/>
                                password=password
                                <br/>
                                <small>
                                    <i>
                                        <b>Note</b>: this demo doesn't use smart forms (with skip logic etc) and decision support rules.
                                    </i>
                                </small>
                            </p>
                            <h4>Pregnancy, newborn and child growth</h4>
                            <p>
                                User=mch-demo
                                <br/>
                                Password=password
                                <br/>
                                <small>
                                    <i>
                                        <b>Note</b>: this demo doesn't have visit scheduling and hence you will not see anything interesting happening on My Dashboard
                                    </i>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            < br/>
        </Layout>
    )
}
