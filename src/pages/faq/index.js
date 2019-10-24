import React from "react";
import Layout from "../../components/Layout";
import { VerticalTileGroup } from "../../components/Tile";

function Tile({ title }) {
  return (
    <div className="tile is-child">
      <article className="box building-block content">
        <h3>{title}</h3>
      </article>
    </div>
  )
}

export default function Index() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>FAQ</h1>
          </div>
        </div>
      </section>
      <section className="section">
          <div className="container">
              <div className="content">
                  <h1>I do not know how to setup Avni myself, how to I find the service provider?</h1>
                  <p>Currently Samanvay also does implementation of Avni. Avni team is in process of on boarding other service providers. But if you know some service provider that may be interested in learning Avni and doing the implementation please connect them to Avni team.
                  </p>
              </div>

              <div className="content">
                  <h1>How much would an implementation of Avni cost?</h1>
                  <p>Avni is open source so there is no license cost for the software. But there are other costs for - implementation, hosting and ongoing user support. Implementation is usually one time activity of configuring application as per your needs on the platform. When you want to start using the application then you will need hosting and perhaps ongoing user support. In order to understand the details of these cost please contact us avni@samanvayfoundation.org - as the cost depends on the complexity of the implementation, number of users and workloads.
                  </p>
              </div>
          </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="title"></h2>
          <hr/>
        </div>
      </section>
      <br/>
      <br/>
      <br/>
      <br/>
    </Layout>
  )
}
