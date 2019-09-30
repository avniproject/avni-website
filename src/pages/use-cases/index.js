import React from "react";
import Layout from "../../components/Layout";
import UseCaseTile, { VerticalTileGroup } from '../../components/Tile'


export default function Index() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Use Cases</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. <a href="#healthcare-modules">See healthcare use-cases</a>
            </p>
          </div>
        </div>
        <div className="container" style={{ marginTop: '2em' }}>
          <div className="tile is-ancestor">
            <VerticalTileGroup>
              <UseCaseTile
                title="Case Management"
                description='Or "Longintudinal Data management" Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                detailsLink='/features/reporting'
              />
              <UseCaseTile title="Counselling"/>
            </VerticalTileGroup>
            <VerticalTileGroup>
              <UseCaseTile title="Surveys"/>
            </VerticalTileGroup>
          </div>
          <div id="healthcare-modules" className="container" style={{ marginTop: '2em' }}>
            <h5 className="has-text-weight-semibold" style={{ lineHeight: '4em' }}>
              Healthcare specific use-cases
            </h5>
            <div className="tile is-ancestor">
              <VerticalTileGroup>
                <UseCaseTile title="Mother Child Health" />
                <UseCaseTile title="Sickle Cell" />
              </VerticalTileGroup>
              <VerticalTileGroup>
                <UseCaseTile title="Non-communicable diseases" />
                <UseCaseTile title="Adolescent care" />
              </VerticalTileGroup>
              <VerticalTileGroup>
                <UseCaseTile title="Child Nutrition & Growth" />
              </VerticalTileGroup>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
