import React from "react";
import Layout from "../../components/Layout";
import FeatureTile, {VerticalTileGroup} from "../../components/Tile";
import imgCounselling1 from "../../img/counselling1.png";
import imgCounselling2 from "../../img/counselling2.png";
import dataModel1 from "../../img/data-model-1.png";
import dataModel2 from "../../img/data-model-2.png";
import encounterScheduling1 from "../../img/encounter-scheduling-1.png";
import encounterScheduling2 from "../../img/encounter-scheduling-2.png";
import imgSkipLogic from "../../img/SkipLogic.gif";
import imgCalculatedField from "../../img/CalculatedField.gif";
import imgChildImmunisation from "../../img/child-immunisation.png";
import imgChildGrowthChart from "../../img/child-growth-chart.png";

export default function Index() {
    return (
        <Layout>
            <section className="section">
                <div className="container">
                    <div className="content">
                        <h1>Features</h1>
                        <div>
                            <a href="#health-features">Health specific features</a>
                        </div>
                        <div>
                            <a href="https://github.com/avniproject/avni-roadmap/projects/1?fullscreen=true&card_filter_query=label%3Acore-product"
                               target="_blank"
                               rel="noopener noreferrer"
                            >Road map (for upcoming features)</a>
                        </div>
                    </div>
                </div>
                <div className="container" style={{marginTop: "2em"}}>
                    <div className="tile is-ancestor">
                        <VerticalTileGroup>
                            <FeatureTile
                                title="Create app exactly like your program"
                                description="Design your program data, processes and protocols"
                                images={[
                                    {src: dataModel1, altText: "Data model 1 example screenshot"},
                                    {src: dataModel2, altText: "Data model 2 example screenshot"}
                                ]}
                            />
                            <FeatureTile
                                title="Counsel your beneficiaries"
                                description="Let the app guide your fieldwork"
                                images={[
                                    {src: imgCounselling1, altText: "Counselling example 1 screenshot"},
                                    {src: imgCounselling2, altText: "Counselling example 2 screenshot"}
                                ]}
                            />
                            <FeatureTile
                                title="Centralised database"
                                description="Monitor, analyse, generate reports, download data extracts"
                            />
                        </VerticalTileGroup>
                        <VerticalTileGroup>
                            <FeatureTile
                                title="Powerful forms"
                                description="Define cases, services and each visit's data format"
                                images={[
                                    {src: imgSkipLogic, altText: "Skip Logic"},
                                    {src: imgCalculatedField, altText: "Calculated Field"}
                                ]}
                            />
                            <FeatureTile
                                title="Flexible Search"
                                description="Search by in-built or your own parameters"
                            />
                            <FeatureTile
                                title="Work schedule management"
                                description="Automated visit scheduling, with manual control. Dashboard to manage all your work"
                                images={[
                                    {src: encounterScheduling1, altText: "Scheduling encounter in future"},
                                    {src: encounterScheduling2, altText: "View scheduled encounters"}
                                ]}
                            />
                        </VerticalTileGroup>
                        <VerticalTileGroup>
                            <FeatureTile
                                title="Algorithmic decision support"
                                description="Add your own algorithms to assist the field workers"
                            />
                            <FeatureTile
                                title="Offline"
                                description="All features available even without Internet"
                            />
                            <FeatureTile
                                title="Multi lingual"
                                description="In the language of user's preference"
                            />
                            <FeatureTile
                                title="Secure data"
                                description="Field app with login, password and OTP. Hosted in secured cloud environment."
                            />
                            <FeatureTile
                                title="Leverage other's programs"
                                description="Copy another implementation and then change"
                            />
                        </VerticalTileGroup>
                    </div>
                    <div
                        id="health-features"
                        className="container"
                        style={{marginTop: "2em"}}
                    >
                        <h3 className="has-text-weight-semibold title">
                            Health specific features
                        </h3>
                        <p>
                            Avni has certain features, that can be turned on, for health
                            implementations.
                        </p>
                        <br/>
                        <div className="tile is-ancestor">
                            <VerticalTileGroup>
                                <FeatureTile
                                    title="WHO Growth Charts"
                                    description="Child growth charts as per WHO standard"
                                    images={[
                                        {src: imgChildGrowthChart, altText: "Child growth charts"}
                                    ]}
                                />
                            </VerticalTileGroup>
                            <VerticalTileGroup>
                                <FeatureTile
                                    title="Child immunisation schedule"
                                    description="Manage standard vaccinations. Add your own vaccinations."
                                    images={[
                                        {src: imgChildImmunisation, altText: "Child immunisation management"}
                                    ]}
                                />
                            </VerticalTileGroup>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
