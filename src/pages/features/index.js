import React from "react";
import Layout from "../../components/Layout";
import FeatureTile, { VerticalTileGroup } from "../../components/Tile";
import imgCounselling1 from "../../img/counselling1.png";
import imgCounselling2 from "../../img/counselling2.png";
import dataModel1 from "../../img/data-model-1.png";
import dataModel2 from "../../img/data-model-2.png";
import encounterScheduling1 from "../../img/encounter-scheduling-1.png";
import encounterScheduling2 from "../../img/encounter-scheduling-2.png";
import imgSkipLogic from "../../img/SkipLogic.gif";
import imgCalculatedField from "../../img/CalculatedField.gif";

export default function Index() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Features</h1>
            <p>
              Designed initially as a tool for frontline health workers in rural and urban slum communities,&nbsp;
              Avni has many features specific to healthcare. <a href="#health-features">See health specific features</a>.
              However this broad range of features also make it useful in a wider variety of scenarios
              and it can be used for data collection and service delivery purposes in areas beyond health too.
              For example, collecting long running information about dams, conducting surveys, learning
              assessments etc.&nbsp;
              <a href="https://github.com/OpenCHS/avni-roadmap/projects/1?fullscreen=true&card_filter_query=label%3Acore-product"
                 target="_blank"
                 rel="noopener noreferrer"
              >
                See road map
              </a>&nbsp;to understand upcoming features.
            </p>
          </div>
        </div>
        <div className="container" style={{ marginTop: "2em" }}>
          <div className="tile is-ancestor">
            <VerticalTileGroup>
              <FeatureTile
                title="Complete program data modelling"
                description="Ability to define any program's schema into individual types, their one or more programs and one or more program encounter types (e.g. Beneficiary, Pregnancy program and ANC/PNC/Delivery encounter types). Ability to link individuals via relationships."
                images={[
                    { src: dataModel1, altText: "Data model 1 example screenshot" },
                    { src: dataModel2, altText: "Data model 2 example screenshot" }
                ]}
              />
              <FeatureTile
                title="Search and service individuals, or work based on schedule"
                description="A work dashboard with the schedule for the field provider in the app. Ability to search individuals using full text search."
              />
              <FeatureTile
                title="Counselling hints for field provider during encounter"
                description="Ability to embed context specific hints (based on your rules) to support field providers in appropriately counselling the beneficiary."
                images={[
                  { src: imgCounselling1, altText: "Counselling example 1 screenshot" },
                  { src: imgCounselling2, altText:"Counselling example 2 screenshot" }
                ]}
              />
              <FeatureTile
                title="Data secure on device"
                description="Data protected on the device by login. Change password and reset the password from the device (SMS, Email based OTP support)."
              />
            </VerticalTileGroup>
            <VerticalTileGroup>
              <FeatureTile
                title="Smart, configurable forms"
                description="Multiple pages per form, one or more questions per page; Skip logic; Calculated form fields - e.g. estimated date of delivery based on last menstrual period date; All commonly used data types with photo/video/geolocation capture support."
                images={[
                  { src: imgSkipLogic, altText: "Skip Logic" },
                  { src: imgCalculatedField, altText: "Calculated Field" }
                ]}
              />
              <FeatureTile
                title="Encounter (visit) schedule management"
                description="Ability to define rules that automatically schedule visits in the future to be done by the field provider based on program's protocol. e.g. Follow up visit for post natal care after delivery. Cancel scheduled encounters."
                images={[
                    { src: encounterScheduling1, altText: "Scheduling encounter in future" },
                    { src: encounterScheduling2, altText: "View scheduled encounters" }
                ]}
              />
              <FeatureTile
                title="Centralised database with reporting and analytics platform"
                description="Define & Generate reports. Create dashboards, exports, data dumps and alerts."
              />
            </VerticalTileGroup>
            <VerticalTileGroup>
              <FeatureTile
                title="Algorithmic Decision Support"
                description="Ability to define rules that compute, display and attach data to the individual's record. Example - child's growth faltering status based on weight+height+age data."
              />
              <FeatureTile
                title="Works offline"
                description="Define catchment (e.g. set of villages) for the field provider, and their entire catchment's beneficiaries data is always available on their device offline."
              />
              <FeatureTile
                title="Multi lingual"
                description="Field app can be used in any language of choice. Currently support Hindi, English, Marathi, Tamil and Gujarati (and growing). You can add any language and translations yourself."
              />
              <FeatureTile
                title="Copy other implementations"
                description="Copy another similar implementation and make changes on top. Most implementations are open source too."
              />
            </VerticalTileGroup>
          </div>
          <div
            id="health-features"
            className="container"
            style={{ marginTop: "2em" }}
          >
            <h3 className="has-text-weight-semibold title">
              Health specific features
            </h3>
            <p>
              Avni has certain features, that can be turned on, for health
              implementations.
            </p>
            <br />
            <div className="tile is-ancestor">
              <VerticalTileGroup>
                <FeatureTile
                  title="WHO Growth Charts"
                  description="Growth of a child can be visualised on a WHO growth chart for making quick inferences."
                />
              </VerticalTileGroup>
              <VerticalTileGroup>
                <FeatureTile
                  title="Child immunisation schedule"
                  description="Complete immunisation schedule data can be managed on timeline."
                />
              </VerticalTileGroup>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
