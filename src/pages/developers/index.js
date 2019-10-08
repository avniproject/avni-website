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
            <h1>Developers</h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="title"></h2>
          <hr/>
          <div className="columns">
            <div className="column is-one-third vertically-centered">
            </div>
            <div className="column">
            </div>
          </div>
          <hr/>
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
