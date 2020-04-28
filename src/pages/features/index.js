import React from "react";
import Layout from "../../components/Layout";
import FeatureTile, {VerticalTileGroup} from "../../components/Tile";
import imgCounselling1 from "../../img/counselling1.png";
import imgCounselling2 from "../../img/counselling2.png";
import attendance from "../../img/attendance.png";
import dataModel1 from "../../img/data-model-1.png";
import dataModel2 from "../../img/data-model-2.png";
import dataModel3 from "../../img/data-model-3.png";
import encounterScheduling1 from "../../img/encounter-scheduling-1.png";
import encounterScheduling2 from "../../img/encounter-scheduling-2.png";
import selfDesign1 from "../../img/self-design-1.png";
import selfDesign2 from "../../img/self-design-2.png";
import selfDesign3 from "../../img/self-design-3.png";
import imgSkipLogic from "../../img/SkipLogic.gif";
import imgCalculatedField from "../../img/CalculatedField.gif";
import imgChildImmunisation from "../../img/child-immunisation.png";
import imgChildGrowthChart from "../../img/child-growth-chart.png";
import myDashboard from "../../img/my-dashboard.gif";
import household from "../../img/household.png";
import longitudinalExport from "../../img/longitudinal-export.png";

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
                            >Roadmap for upcoming features</a>
                        </div>
                    </div>
                </div>
                <div className="container" style={{marginTop: "2em"}}>
                    <div className="tile is-ancestor">
                        <VerticalTileGroup>
                            <FeatureTile
                                title="Create app exactly like your program"
                                description="Design your program data, processes and protocols. Define person, household, groups, programs and interactions. Much more than forms and case management."
                                images={[
                                    {src: dataModel1, altText: "Data model 1 example screenshot"},
                                    {src: dataModel2, altText: "Data model 2 example screenshot"},
                                    {src: dataModel3, altText: "Data model 3 example screenshot"},
                                    {src: household, altText: "Data model 4 example screenshot"}
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
                                title="Take attendance"
                                description="Define any type of group and capture member's attendance easily"
                                images={[
                                    {src: attendance, altText: "Attendance"}
                                ]}
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
                                title="Customisable search. System generated identifiers."
                                description=""
                            />
                            <FeatureTile
                                title="Work schedule management"
                                description="Automated visit scheduling with manual control. Dashboard to manage all your work"
                                images={[
                                    {src: encounterScheduling1, altText: "Scheduling encounter in future"},
                                    {src: encounterScheduling2, altText: "View scheduled encounters"},
                                    {src: myDashboard, altText: "My dashboard"}
                                ]}
                            />
                            <FeatureTile
                                title="Centralised database"
                                description="Monitor, analyse, generate reports, download data extracts, "
                                images={[
                                    {src: longitudinalExport, altText: "Longitudinal export"}
                                ]}
                                htmlSnippets="<a href='https://www.youtube.com/watch?v=HsvQDG9dgyM' target='_blank'>longitudinal exports</a>"
                            />
                        </VerticalTileGroup>
                        <VerticalTileGroup>
                            <FeatureTile
                                title="Design everything yourself"
                                description="Design forms, data model via browser"
                                images={[
                                    {src: selfDesign1, altText: "Form designer"},
                                    {src: selfDesign2, altText: "List of forms"},
                                    {src: selfDesign3, altText: "Different subject types"},
                                ]}
                            />
                            <FeatureTile
                                title="Algorithmic decision support"
                                description="Add your own algorithms to assist the field workers"
                            />
                            <FeatureTile
                                title="Offline"
                                description="All features available even without the Internet"
                            />
                            <FeatureTile
                                title="Multiple language support"
                                description="Multiple languages per implementation. Translations management system."
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
                                    title="Child growth charts as per WHO standard"
                                    description=""
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
