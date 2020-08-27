import React from 'react';
import CaseManagementIcon from '../img/value-prop/case-management.png';
import FormDesignerIcon from '../img/value-prop/form-designer.png';
import ReportDashboardIcon from '../img/value-prop/report-dashboard.png';
import WorkDiaryIcon from '../img/value-prop/work-diary.png';
import CloudIcon from '../img/value-prop/cloud.png';
import CustomisationIcon from '../img/value-prop/customisation.png';
import TrainingIcon from '../img/value-prop/training.png';
import TechnicalSupportIcon from '../img/value-prop/technical-support.png';
import Constants from "../Constants";
import SecondaryCTAButton from "./SecondaryCTAButton";

//https://www.salesforce.com/in/?ir=1

let valueProposition = function (icon, text, description, additionalLine) {
    return <div className="column is-one-quarter-desktop is-10-mobile is-offset-1-mobile">
        <div className="content" style={{padding: '2em', backgroundColor: "#f2f2f2"}}>
            <img src={icon} alt={text} width="80px"/>
            <h4>{text}</h4>{description}<br/>
            {additionalLine && <br/>}
        </div>
    </div>;
};
const ValuePropositions = ({}) => (
    <div className="container" style={{alignItems: 'center', flexDirection: 'column', display: 'flex'}}>
        <h1 className="full-centered">Comprehensive platform</h1>
        <div className="columns is-mobile is-multiline has-text-centered">
            {valueProposition(CaseManagementIcon, "Case Management", "Create rich data formats. Manage beneficiaries, families, households, groups, anything.")}
            {valueProposition(FormDesignerIcon, "Form Designer", "Design your forms with powerful in-built algorithmic support.", true)}
            {valueProposition(ReportDashboardIcon, "Reports and Dashboard", "Get insights into your program and share them.", true)}
            {valueProposition(WorkDiaryIcon, "Work diary", "Your fieldworkers will never miss any activity and their client interaction.")}
        </div>
        <SecondaryCTAButton text="See all features" link="/features"/>
        <br/>
        <h1 className="full-centered">All services you require</h1>
        <div className="columns is-mobile is-multiline has-text-centered">
            {valueProposition(CloudIcon, "Cloud hosting", "Secured and affordable cloud hosted service.")}
            {valueProposition(CustomisationIcon, "Customisation", "Customisation of the platform as per the needs of your project.")}
            {valueProposition(TrainingIcon, "Training", "Get trained in the product to customise it yourself.")}
            {valueProposition(TechnicalSupportIcon, "Technical support", "Annual maintenance support for your customisations.")}
        </div>
    </div>
);

ValuePropositions.propTypes = {};

export default ValuePropositions;