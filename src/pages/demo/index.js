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
                            <p>For administration app in your browser go to <ExternalLink
                                href="https://app.avniproject.org">https://app.avniproject.org</ExternalLink> and use login details for maternal and child health demo
                                given below.
                            </p>

                            <h3>Reporting and dashboard capability</h3>
                            <p>
                                Avni uses metabase for reporting, analytics and dashboards. You can learn more about metabase <ExternalLink
                                href="https://www.metabase.com/docs/latest/">here</ExternalLink> or checkout <a href="/usage-statistics">Avni's
                                own dashboard</a> which has been created using metabase.</p>

                            <h3>About the demo and login details</h3>
                            <p>See below the logins that you can use in the app. These demos are inspired from real
                                implementations of Avni, created to demonstrate flexibility and most features of the platform.</p>

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
                            {demoDetails("Track the progress of silt excavaction from water bodies", "demo@wbd")}
                            {demoDetails("Social security facilitation", "demo@ssdemo")}
                            {demoDetails("Teacher development program", "demo@teachdemo")}
                            {demoDetails("Community program-Phulwari", "phulwari-user@cpdemo")}
                            {demoDetails("Non Communicable Disease control program", "ncd-user@cpdemo")}
                            {demoDetails("Pregnancy & child nutrition program", "preg-child@cpdemo")}
                            {demoDetails("Waste management program", "demo@wmdemo")}
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
        {fieldUser && <>
            <div><b>Field app</b></div>
            <div>
                User={fieldUser}
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
