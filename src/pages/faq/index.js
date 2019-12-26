import React from "react";
import Layout from "../../components/Layout";
import ContactUs from "../../components/ContactUs";

export default function Index() {
    return (
        <Layout>
            <section className="section">
                <div className="container">
                    <div className="content">
                        <h1>FAQ (frequently asked questions)</h1>
                    </div>
                    <br/>
                    <div className="content">
                        <h3>I do not know how to setup Avni myself, how to I find the service provider?</h3>
                        <p>Currently Samanvay also does implementation of Avni. Avni team is in process of on boarding other service providers. But if you know some
                            service
                            provider that may be interested in implementing Avni for you then Avni team can help them too.
                        </p>
                    </div>

                    <div className="content">
                        <h3>How much would an implementation of Avni cost?</h3>
                        <p>Avni is open source so there is no license cost for the software. But there are other costs for - implementation, hosting and ongoing user
                            support.
                            Implementation is usually one time activity of configuring application as per your needs on the platform. When you want to start using the
                            application
                            then you will need hosting and perhaps ongoing user support. In order to understand the details of these cost please contact us
                            avni-project@googlegroups.com - as the cost depends on the complexity of the implementation, number of users and workloads.
                        </p>
                    </div>

                    <div className="content">
                        <h3>I want to implement Avni, where should I start from</h3>
                        <p>The getting started page is for this purpose. You can start from there and go through the documentation. The documentation currently is to only get you started, after which you please contact us on <a href="https://gitter.im/OpenCHS/openchs" target="_blank">Gitter channel</a> or using the Contact us form below.</p>
                    </div>
                </div>
            </section>
            <br/>
            <br/>
            <ContactUs/>
        </Layout>
    )
}
