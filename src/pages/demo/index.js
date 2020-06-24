import React from "react";
import Layout from "../../components/Layout";
import ExternalLink from "../../components/ExternalLink";

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
                                On your Android device, go to <b>Play Store</b>&nbsp;,&nbsp;search for Avni, and <b>install</b> the field app. You can use <ExternalLink
                                href="https://play.google.com/store/apps/details?id=com.openchsclient">this link</ExternalLink> from your mobile too.
                            </p>

                            <h3>System administration app</h3>
                            <p>For administration app in your browser go to <ExternalLink href="https://app.avniproject.org">https://app.avniproject.org</ExternalLink> and use login details for maternal and child health demo given below.
                            </p>

                            <h3>Reporting and dashboard capability</h3>
                            <p>
                                Avni uses metabase for reporting, analytics and dashboards. You can learn more about metabase <ExternalLink
                                href="https://www.metabase.com/docs/latest/users-guide/start.html">here</ExternalLink> or checkout <a href="/usage-statistics">Avni's
                                own dashboard</a> which has been created using metabase.</p>

                            {/*<h3>App designer (under development)</h3>*/}
                            {/*<p>*/}
                            {/*App designer is the new feature that will be released soon but is available for preview. This will allow most of the form designing and*/}
                            {/*data model setup from the browser interface. For this go to <a*/}
                            {/*href="https://staging.openchs.org">https://staging.openchs.org</a></p>*/}

                            <h3>About the demo and login details</h3>
                            <p>See below the logins that you can use in the app. These demos are inspired from real
                                implementations of Avni, created to demonstrate flexibility and most features of the platform.</p>

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
                            {demoDetails("Track and support adolescents under risk", "adol-demo")}
                            {demoDetails("Child growth monitoring", "phulwari-demo")}
                            {demoDetails("Data reporting of dam de-silting work", "ddm-demo")}
                        </div>
                    </div>
                    <div className="column is-half-tablet is-10-mobile is-offset-1-mobile">
                        <div className="content">
                            <h3>A few more login</h3>
                            <hr/>
                            {demoDetails("Cancer Screening", "canscr-demo", undefined, "this demo doesn't use smart forms (with skip logic etc) and decision support rules.")}
                            <br/>
                            {demoDetails("Maternal and child health", "mili@mch-demo", "admin@mch-demo-jnpct", "since the admin is open to public, someone may have made breaking changes causing the app to not work as expected in some places. Please contact us if you need help.")}
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        </Layout>
    )
}

function demoDetails(title, fieldUser, adminUser, note) {
    return <>
        <h5>{title}</h5>
        <div><b>Field app</b></div>
        <div>
            User={fieldUser}
            <br/>
            Password=password
        </div>
        {adminUser && <>
            <div><b>System administration app</b></div>
            <div>
                User={adminUser}
                <br/>
                Password=password
            </div>
        </>}
        {note && <small>
            <i><b>Note</b>: {note}</i>
        </small>}
        <br/>
    </>;
}