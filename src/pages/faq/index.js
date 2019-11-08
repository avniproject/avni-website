import React from "react";
import Layout from "../../components/Layout";

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
              <p>Currently Samanvay also does implementation of Avni. Avni team is in process of on boarding other service providers. But if you know some service
                provider that may be interested in learning Avni and doing the implementation please connect them to Avni team.
              </p>
            </div>

            <div className="content">
              <h3>How much would an implementation of Avni cost?</h3>
              <p>Avni is open source so there is no license cost for the software. But there are other costs for - implementation, hosting and ongoing user support.
                Implementation is usually one time activity of configuring application as per your needs on the platform. When you want to start using the application
                then you will need hosting and perhaps ongoing user support. In order to understand the details of these cost please contact us
                avni-project@googlegroups.com - as the cost depends on the complexity of the implementation, number of users and workloads.
              </p>
            </div>

            <div className="content">
              <h3>Glossary of terms</h3>
              <p>Avni allows for modelling and supporting usage for most type field work. Hence sometimes it needs to use terminology that is abstract - so that it
                applies for all sectors. We have detailed out few terms here. We welcome simpler and common term - suggestion from you.</p>
              <ul>
                <li><b>Encounter</b>: Most field data collection platform use the terminology form and form type. But this is insufficient for Avni. Avni allows for data
                  model which supports repeated data collection for the same subject - instead of collecting disconnected data (as in ODK/KoboCollect). The term "encounter" encapsulates the idea of data collected in one of the repeated instances. Encounter is also referred to as visit sometimes. The term encounter <a
                      href="https://www.hl7.org/fhir/encounter-definitions.html" target="_blank">is borrowed from health domain</a>.
                </li>
                <li><b>Subject</b>: Avni can be used to manage data about beneficiaries, but also for anything else of interest like water body, animal, school, hospital, so on. We need a term which is abstract and can describe individuals, beneficiaries, water body etc, hence subject.
                </li>
                <li><b>Rule</b>: Avni provides flexibility of defining any kind of skip logic, calculation fields, when to show counselling tips, how to generate
                  encounter/visit schedule and highlighting important information on the individual dashboard on mobile app. This is defined by writing program, which is
                  referred to as rule.
                </li>
              </ul>
            </div>

          </div>
        </section>
        <br/>
        <br/>
        <br/>
      </Layout>
  )
}
