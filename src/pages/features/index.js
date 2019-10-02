import React from "react";
import Layout from "../../components/Layout";
import FeatureTile, { VerticalTileGroup } from '../../components/Tile'


export default function Index() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Features</h1>
            <p>
              Designed initially as a tool for frontline health workers in rural communities,&nbsp;
              <b>Avni</b> has many features specific to healthcare. <a href="#healthcare-modules">See healthcare modules</a>.
              However this broad range of features also make it useful in a wider variety of scenarios
              and it can be used for data collection purposes in areas beyond healthcare too.
              For example, collecting long running information about dams, conducting surveys etc.
            </p>
          </div>
        </div>
        <div className="container" style={{ marginTop: '2em' }}>
          <div className="tile is-ancestor">
            <VerticalTileGroup>
              <FeatureTile title="Data entry via mobile and web"/>
              <FeatureTile
                title="Data Insights (Reporting)"
                detailsLink='/features/reporting' />
              <FeatureTile title="Data Features"/>
              <FeatureTile title="Multi lingual"/>
            </VerticalTileGroup>
            <VerticalTileGroup>
              <FeatureTile
                title="Smart, configurable forms"
                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Sed odio morbi quis commodo odio aenean sed adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Sed odio morbi quis commodo odio aenean sed adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Sed odio morbi quis commodo odio aenean sed adipiscing.`}
                detailsLink='/features/forms' />
              <FeatureTile title="On-field work management"/>
              <FeatureTile title="Device & Data Security"/>
            </VerticalTileGroup>
            <VerticalTileGroup>
              <FeatureTile title="Algorithmic Decision Support"/>
              <FeatureTile title="Flexible data model"/>
              <FeatureTile title="Works offline"/>
              <FeatureTile title="... more"/>
            </VerticalTileGroup>
          </div>
          <div id="healthcare-modules" className="container" style={{ marginTop: '2em' }}>
            <h3 className="has-text-weight-semibold title">
              Healthcare specific modules
            </h3>
            <p>
              These are readymade modules you can start using rightaway if your intervention
              is in any of these specific areas.
            </p>
            <br/>
            <div className="tile is-ancestor">
              <VerticalTileGroup>
                <FeatureTile title="Mother Child Health" />
                <FeatureTile title="Sickle Cell" />
              </VerticalTileGroup>
              <VerticalTileGroup>
                <FeatureTile title="Non-communicable diseases" />
                <FeatureTile title="Adolescent care" />
              </VerticalTileGroup>
              <VerticalTileGroup>
                <FeatureTile title="Child Nutrition & Growth" />
              </VerticalTileGroup>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
