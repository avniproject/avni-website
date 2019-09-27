import React from "react";
import Layout from "../../components/Layout";


function FeatureTile({ title, description }) {
  return (
    <div className="tile is-child">
      <article className="box has-background-grey-lighter">
        <h4 className="title">{title}</h4>
        <p>
          {description ||
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Sed odio morbi quis commodo odio aenean sed adipiscing.`
          }
        </p>
        <div style={{ textAlign: 'right' }}>
          <a href='#'>... more</a>
        </div>
      </article>
    </div>
  );
}

function VerticalTileGroup({ children, extraClasses }) {
  let classes = "tile is-parent is-vertical"
  return (
    <div className={ extraClasses ? `${classes} ${extraClasses}` : classes }>
      {children}
    </div>
  );
}

export default function Index() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Features</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. <a href="#healthcare-modules">See healthcare modules</a>
            </p>
          </div>
        </div>
        <div className="container" style={{ marginTop: '2em' }}>
          <div className="tile is-ancestor">
            <VerticalTileGroup>
              <FeatureTile title="Data entry via mobile and web"/>
              <FeatureTile title="Data Insights (Reporting)"/>
              <FeatureTile title="Data Features"/>
              <FeatureTile title="Multi lingual"/>
            </VerticalTileGroup>
            <VerticalTileGroup>
              <FeatureTile title="Smart, configurable forms" description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Sed odio morbi quis commodo odio aenean sed adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Sed odio morbi quis commodo odio aenean sed adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Sed odio morbi quis commodo odio aenean sed adipiscing.`}/>
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
            <h5 className="has-text-weight-semibold" style={{ lineHeight: '4em' }}>
              Healthcare specific modules
            </h5>
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
