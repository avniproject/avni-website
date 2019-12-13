import React from "react";
import Layout from "../../components/Layout";
import UseCaseTile, {VerticalTileGroup} from '../../components/Tile'


export default function Index() {
    return (
        <Layout>
            <section className="section">
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
                            <UseCaseTile
                                title="Service delivery"
                                description="Organisations provide direct services to the beneficiaries they serve (e.g. community health service)"
                            />
                        </VerticalTileGroup>
                        <VerticalTileGroup>
                            <UseCaseTile
                                title="Service facilitation"
                                description="Helping beneficiaries in accessing the services provided by government or large institutions (e.g. ensuring institutional delivery, enrolling in government programmes)"
                            /></VerticalTileGroup>
                        <VerticalTileGroup>
                            <UseCaseTile
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
                                <UseCaseTile
                                    title="Maternal and Child Health"
                                    description="In health this has been the most common use-case. Avni for MCH has been used primarily at the ASHA/Village/Slum level for service delivery. For maternal program the usage spans from conception to PNC."
                                    detailsLabel="Case study"
                                    detailsLink="/case-studies/calcutta-kids-%E2%80%94-avni-implemented-for-maternal-and-child-health-program"
                                />
                                <UseCaseTile
                                    title="Sickle Cell Screening and Treatment Initiation"
                                    description="Avni helped manage the process of screening population for sickle cell disease, conducting lab tests, track lab results and connect with treatment if required."
                                />
                            </VerticalTileGroup>
                            <VerticalTileGroup>
                                <UseCaseTile title="Common Cancer Screening and Referral"
                                             description="Avni was used to screen people for common cancers (oral, breast and cervical) and refer them for hospital examination if found suspect."/>
                                <UseCaseTile title="Adolescent care"
                                             description="Track health, personal development and risk indicators of male and female adolescents - in schools and villages. Provide counselling, health advice and iron supplements for those identified as vulnerable or at risk."/>
                            </VerticalTileGroup>
                            <VerticalTileGroup>
                                <UseCaseTile title="Monitoring of dam de-silting work"
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
    )
}
