import React from "react";
import Layout from "../../components/Layout";
import ContactUs from "../../components/ContactUs";
import ExternalLink from "../../components/ExternalLink";

export default function Index() {
    return (
        <Layout>
            <section className="section">
                <div className="container">
                    <div className="content">
                        <h1>FAQ (frequently asked questions)</h1>
                    </div>

                    <br/><br/>
                    <div className="content">
                        <h2>Implementation</h2>
                    </div>
                    <div className="content">
                        <h4>I do not know how to setup Avni myself, how to I find the service provider?</h4>
                        <p>Avni is quite easy to set up. We are happy to help you in finding an implementation provider of Avni for you at your site. We also offer a
                            hosted option that runs on
                            the Cloud and can configure a system for you within a week. Please use the Contact Us form at the bottom of this page to reach out to us. If
                            you
                            know of a service provider that you would like to work with, we can help them learn about Avni.</p>
                    </div>
                    <div className="content">
                        <h4>How much would an implementation of Avni cost?</h4>
                        <p>Avni is open source so there is no license cost for the software. But there are other costs for - implementation, hosting and ongoing user
                            support.
                            Implementation is usually one time activity of configuring application as per your needs on the platform. When you want to start using the
                            application
                            then you will need hosting and perhaps ongoing user support. In order to understand the details of these cost please contact us
                            avni-project@googlegroups.com - as the cost depends on the complexity of the implementation, number of users and workloads.
                        </p>
                    </div>
                    <div className="content">
                        <h4>I want to implement Avni, where should I start from</h4>
                        <p>The getting started page is for this purpose. You can start from there and go through the documentation. The documentation currently is to only
                            get you started, after which you please contact us on <ExternalLink href="https://gitter.im/OpenCHS/openchs">Gitter channel</ExternalLink> or using
                            the Contact us form below.</p>
                    </div>
                    <div className="content">
                        <h4>What is the typical running cost of Avni on a monthly basis?</h4>
                        <p>Please check all the technical components of Avni <ExternalLink href="https://avni.readme.io/docs/environment-setup-guides">here</ExternalLink>.
                            Quite likely you will need to run all three components - server, database and reporting platform. AWS Cognito is used from the AWS cloud. If
                            you plan to run of the servers on a single machine you would need a server with at least 8 GB RAM and 4 core CPU (or vCPU) for production
                            environment. If you plan to run them separately then you will need to set up a server of 2 core and 4 GB RAM each (reporting platform could do
                            with a slightly lower configuration). This excludes backups and replication, which you can setup according to your needs. Typical running cost
                            for you on AWS infrastructure with reserved instances could be around - 12,000 rupees a month (excluding the cost of people involved in
                            managing the system).</p>
                    </div>


                    <br/><br/>
                    <div className="content">
                        <h2>Open source and license</h2>
                    </div>
                    <div className="content">
                        <h4>If Avni is open-source, then why do I have to pay for it?</h4>
                        <p>You do not have to pay anything for the software. It is freely available. Please see more details on the <a href="/about">about
                            page</a>. The pricing is for the cloud hosted service.</p></div>
                    <div className="content">
                        <h4>Can I make modifications to Avni?</h4>
                        <p>Yes you can, under the provisions of AGPL 3 license.</p>
                    </div>
                </div>
            </section>
            <br/>
            <br/>
            <ContactUs/>
        </Layout>
    )
}
