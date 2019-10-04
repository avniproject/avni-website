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
            <h1>Getting Started</h1>
            <section className="section">
              <div className="columns">
                <div className="column is-one-third full-centered building-blocks-left">
                  <div style={{ width: '10em' }}>
                    <span><b>avni</b> is composed of</span>
                    <span className="building-blocks-four">4</span>
                    <span>main building blocks</span>
                  </div>
                </div>
                <div className="column is-two-thirds">
                  <div className="tile is-ancestor">
                    <VerticalTileGroup>
                      <Tile title="Mobile app"/>
                      <Tile title="Backend server"/>
                    </VerticalTileGroup>
                    <VerticalTileGroup>
                      <Tile title="Browser app"/>
                      <Tile title="Reporting server"/>
                    </VerticalTileGroup>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="title">Steps to get setup</h2>
          <hr/>
          <div className="columns">
            <div className="column is-one-third vertically-centered">
              <div className="columns">
                <div className="column is-one-third content">
                  <h4 className="has-text-grey-light">Step 1</h4>
                </div>
                <div className="column content">
                  <h4>Setup the infrastructure</h4>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="columns">
                <div className="column">
                  <div className="box content">
                    <h5>Use Samanvay's cloud</h5>
                    <p>
                      Easiest way to get started. No need to
                      setup servers and manage uptime - all the heavy lifting
                      is taken care of for you.
                    </p>
                  </div>
                </div>
                <div className="column">
                  <div className="box content">
                    <h5>On your own server</h5>
                    <p>
                      \\\ explain \\\
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className="columns">
            <div className="column is-one-third vertically-centered">
              <div className="columns">
                <div className="column is-one-third content">
                  <h4 className="has-text-grey-light">Step 2</h4>
                </div>
                <div className="column content">
                  <h4>Configure data models</h4>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="columns">
                <div className="column">
                  <div className="box content">
                    <ul>
                      <li>Define the catchments (or locations you operate in)</li>
                      <li>Design the forms as required by your program</li>
                      <li>Define form / workflow and data validation rules</li>
                      <li>Define decision support rules (if you need any)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className="columns">
            <div className="column is-one-third vertically-centered">
              <div className="columns">
                <div className="column is-one-third content">
                  <h4 className="has-text-grey-light">Step 3</h4>
                </div>
                <div className="column content">
                  <h4>Setup user accounts</h4>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <p>
                  Create logins for your ground staff,
                  administrative staff and reporting dashboard users
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="title">Get in touch</h2>
          <hr/>
          <div className="content">
            <p>
              For any questions you may have, please feel free to
              contact the Samanvay team at&nbsp;
              <a href="mailto:hello@samanvayfoundation.org">
                hello@samanvayfoundation.org
              </a>&nbsp;
              and we'll be happy to help you get setup.
            </p>
          </div>
        </div>
      </section>
      <br/>
      <br/>
      <br/>
      <br/>
    </Layout>
  )
}
