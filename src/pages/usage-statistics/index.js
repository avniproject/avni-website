import React from "react";
import Layout from "../../components/Layout";


export default function Index() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h2
            id="usage-dashboard"
            className="title"
          >Live usage report</h2>
          <iframe
            src="https://reporting.openchs.org/public/dashboard/de69d6d5-347f-41af-b84a-0967625bee24"
            frameBorder="0"
            title="Usage statistics"
            width="100%"
            allowTransparency
            style={{ minHeight: '3000px' }}
          />
        </div>
      </section>
    </Layout>
  )
}