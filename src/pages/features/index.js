import React from "react";
import Layout from "../../components/Layout";
import FeatureTile, {VerticalTileGroup} from "../../components/Tile";
import imgCounselling1 from "../../img/counselling1.png";
import imgCounselling2 from "../../img/counselling2.png";
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
import imgIdentifierAssignment from "../../img/identifier-assignment.png";
import imgCustomisableSearch from "../../img/customisable-search.png";
import imgMyDashboardFilters from "../../img/my-dashboard-filters.png";
import accessControl from "../../img/access-control.png";
import myDashboard from "../../img/my-dashboard.gif";
import household from "../../img/household.png";
import longitudinalExport from "../../img/longitudinal-export.png";
import ExternalLink from "../../components/ExternalLink";

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
                            <ExternalLink href="https://github.com/orgs/avniproject/projects/2/views/7">Roadmap for
                                upcoming features</ExternalLink>
                        </div>
                        <div>
                            <a href="#intro-slide-deck">Avni introduction (slide deck)</a>
                        </div>
                        <div>
                            <a href="#use-cases">Avni use cases</a>
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
                                title="Customisable search and fieldworker dashboard"
                                description="Search beneficiaries in field by your chosen data property (e.g. Phone, Name, Ids, Student's class, Health status)"
                                images={[
                                    {src: imgCustomisableSearch, altText: "Setup customisable search"},
                                    {src: imgMyDashboardFilters, altText: "My dashboard filters"}
                                ]}
                            />
                            <FeatureTile
                                title="Counsel your beneficiaries"
                                description="Let the app guide your fieldwork."
                                images={[
                                    {src: imgCounselling1, altText: "Counselling example 1 screenshot"},
                                    {src: imgCounselling2, altText: "Counselling example 2 screenshot"}
                                ]}
                            />
                            <FeatureTile
                                title="Take attendance"
                                description="For any group capture its member's attendance easily."
                                images={[
                                    // {src: attendance, altText: "Attendance"}
                                ]}
                            />
                        </VerticalTileGroup>
                        <VerticalTileGroup>
                            <FeatureTile
                                title="Powerful forms"
                                description="Define cases, services and each visit's data format."
                                images={[
                                    {src: imgSkipLogic, altText: "Skip Logic"},
                                    {src: imgCalculatedField, altText: "Calculated Field"}
                                ]}
                            />
                            <FeatureTile
                                title="System generated identifiers."
                                description="Assign range to fieldworkers, and auto generate ids in the field"
                                images={[
                                    {src: imgIdentifierAssignment, altText: "Identifier Assignment"}
                                ]}
                            />
                            <FeatureTile
                                title="Work schedule management"
                                description="Automated visit scheduling with manual control. Dashboard to manage all your work."
                                images={[
                                    {src: encounterScheduling1, altText: "Scheduling encounter in future"},
                                    {src: encounterScheduling2, altText: "View scheduled encounters"},
                                    {src: myDashboard, altText: "My dashboard"}
                                ]}
                            />
                            <FeatureTile
                                title="Centralised database"
                                description="Monitor, analyse, generate reports and download data extracts"
                                images={[
                                    {src: longitudinalExport, altText: "Longitudinal export"}
                                ]}
                                htmlSnippets="<a href='https://www.youtube.com/watch?v=HsvQDG9dgyM' target='_blank' rel='noopener noreferrer'> longitudinal exports</a>"
                            />
                        </VerticalTileGroup>
                        <VerticalTileGroup>
                            <FeatureTile
                                title="Design your forms and data model via web browser"
                                images={[
                                    {src: selfDesign1, altText: "Form designer"},
                                    {src: selfDesign2, altText: "List of forms"},
                                    {src: selfDesign3, altText: "Different subject types"},
                                ]}
                            />
                            <FeatureTile
                                title="Data security and access control"
                                description="Detailed access control. OTP support."
                                images={[
                                    {src: accessControl, altText: "Access control setup"}
                                ]}
                            />
                            <FeatureTile
                                title="Algorithmic decision support"
                                description="Add your own algorithms to assist the field workers."
                            />
                            <FeatureTile
                                title="Offline"
                                description="All features available even without the Internet."
                            />
                            <FeatureTile
                                title="Multiple language support"
                                description="Multiple languages per implementation. Translations management system."
                            />
                            <FeatureTile
                                title="API to pull data out of Avni"
                                description="REST+JSON based "
                                images={[]}
                                htmlSnippets="<a href='https://avni.readme.io/docs/api-guide' target='_blank' rel='noopener noreferrer'>API.</a>"
                            />
                            <FeatureTile
                                title="Leverage other's programs"
                                description="Copy another implementation and then change."
                            />
                        </VerticalTileGroup>
                    </div>
                    <div
                        id="health-features"
                        className="container"
                        style={{marginTop: "2em"}}
                    >
                        <h5 className="has-text-weight-semibold">Health specific features</h5>
                        <p>
                            Avni has certain features, that can be turned on, for health
                            implementations.
                        </p>
                        <br/>
                        <div className="tile is-ancestor">
                            <VerticalTileGroup>
                                <FeatureTile
                                    title="Child growth charts as per WHO standard."
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

            <hr/>

            <section className="section">
                <div className="container">
                    <div className="content">
                        <h1>Avni empowers field work</h1>
                        <div id="intro-slide-deck"/>
                        <div>
                            <iframe style={{width: "100%"}}
                                    src="https://docs.google.com/presentation/d/e/2PACX-1vTQctaucDXTwUQRlIPK2-4f7UJThZ0JxsbvypOea15w827luizJ38vVzcSjyLptcJCqRCeRx2qXRfsy/embed?start=false&loop=false&delayms=60000"
                                    frameBorder="0" height="569" width="960" allowFullScreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"/>
                        </div>
                    </div>
                </div>
            </section>

            <hr/>

            <section className="section">
                <div id="use-cases"/>
                <div className="container">
                    <div className="content">
                        <h1>Use Cases</h1>
                        <p>Most social sector work, done by NGO and Governments ultimately rests on the field workers providing service to the communities. Avni aims to
                            support almost all field work.</p>
                    </div>
                </div>
                <div className="container" style={{marginTop: '2em'}}>
                    <div className="tile is-ancestor">
                        <VerticalTileGroup>
                            <FeatureTile
                                title="Service delivery"
                                description="Organisations provide direct services to the beneficiaries they serve (e.g. community health service)."
                            />
                        </VerticalTileGroup>
                        <VerticalTileGroup>
                            <FeatureTile
                                title="Service facilitation"
                                description="Helping beneficiaries in accessing the services provided by government or large institutions (e.g. ensuring institutional delivery, enrolling in government programmes)."
                            /></VerticalTileGroup>
                        <VerticalTileGroup>
                            <FeatureTile
                                title="Data collection"
                                description="Collect data on an individual/object (e.g. learning assessment of students, water body servicing details)."
                            />
                        </VerticalTileGroup>
                    </div>
                    <div id="health-modules" className="container" style={{marginTop: '2em'}}>
                        <h4 className="has-text-weight-semibold" style={{lineHeight: '4em'}}>
                            Following are some of the existing use cases of Avni. Also check out <a href="/case-studies">case studies</a> and <a href="/usage-statistics">usage
                            statistics</a>.
                        </h4>
                        <div className="tile is-ancestor">
                            <VerticalTileGroup>
                                <FeatureTile
                                    title="Maternal and Child Health"
                                    description="In health this has been the most common use-case. Avni for MCH has been used primarily at the ASHA/Village/Slum level for service delivery. For maternal program the usage spans from conception to PNC."
                                    detailsLabel="Case study"
                                    detailsLink="/case-studies/calcutta-kids-%E2%80%94-avni-implemented-for-maternal-and-child-health-program"
                                />
                                <FeatureTile
                                    title="Sickle Cell Screening and Treatment Initiation"
                                    description="Avni helped manage the process of screening population for sickle cell disease, conducting lab tests, track lab results and connect with treatment if required."
                                />
                            </VerticalTileGroup>
                            <VerticalTileGroup>
                                <FeatureTile title="Common Cancer Screening and Referral"
                                             description="Avni was used to screen people for common cancers (oral, breast and cervical) and refer them for hospital examination if found suspect."/>
                                <FeatureTile title="Adolescent care"
                                             description="Track health, personal development and risk indicators of male and female adolescents - in schools and villages. Provide counselling, health advice and iron supplements for those identified as vulnerable or at risk."/>
                            </VerticalTileGroup>
                            <VerticalTileGroup>
                                <FeatureTile title="Monitoring of dam de-silting work"
                                             description="Collect data to help in monitoring the progress of dam de-silting work happening in multiple districts."
                                             detailsLabel="Case study"
                                             detailsLink="/case-studies/dam-and-water-bodies-desilting-work-monitoring-1"
                                />
                            </VerticalTileGroup>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
