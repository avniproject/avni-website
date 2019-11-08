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
                        <p>As we understand field work involves collecting data, using previously collected data, managing one's schedule of work/visit, making assessment
                            of the beneficiary's condition and counselling/guiding the beneficiaries. The management of field programs involve - monitoring, providing
                            supportive supervision and reporting to stake holders. Avni aims to support most field work use cases. We broadly can break it down into three
                            broad areas. <a href="#healthcare-modules">See healthcare use-cases</a>
                        </p>
                    </div>
                </div>
                <div className="container" style={{marginTop: '2em'}}>
                    <div className="tile is-ancestor">
                        <VerticalTileGroup>
                            <UseCaseTile
                                title="Service Delivery"
                                description="Programs where field based service is provided to the beneficiaries, over a period of time predicated on outcome. For example - pregnancy care, tuberculosis treatment monitoring."
                            />
                            <UseCaseTile
                                title="Survey"
                                description="Collect one time data for a cohort of individuals and/or objects. For example collect - health needs of population, screening a population for non-communicable diseases."
                            />
                        </VerticalTileGroup>
                        <VerticalTileGroup>
                            <UseCaseTile
                                title="Longitudinal Data Collection"
                                description="Collect data on an individual/object, multiple times, over a time period, by one or more users. For example collecting - learning assessment data of students, child growth indicators, water body servicing data over its lifetime."
                            />
                        </VerticalTileGroup>
                    </div>
                    <div id="healthcare-modules" className="container" style={{marginTop: '2em'}}>
                        <h4 className="has-text-weight-semibold" style={{lineHeight: '4em'}}>
                            Following are some of the existing use cases of Avni. Also check out <a href="/case-studies">case studies</a> and <a href="usage-statistics">usage statistics</a>.
                        </h4>
                        <div className="tile is-ancestor">
                            <VerticalTileGroup>
                                <UseCaseTile
                                    title="Maternal and Child Health"
                                    description="In health this has been the most common use-case. Avni for MCH has been used primarily at the ASHA/Village/Slum level for service delivery or for longitudinal data collection. For maternal program the usage spans from conception to PNC."
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
                                <UseCaseTile title="Dam de-silting work monitoring"
                                             description="Collect data to help in monitoring the progress of dam de-silting work happening in multiple districts."/>
                            </VerticalTileGroup>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
