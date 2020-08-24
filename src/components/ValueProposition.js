import React from 'react';
import CaseManagementIcon from '../img/value-prop/case-management.png';
import FormDesignerIcon from '../img/value-prop/form-designer.png';
import ReportDashboardIcon from '../img/value-prop/report-dashboard.png';
import WorkDiaryIcon from '../img/value-prop/work-diary.png';
import CloudIcon from '../img/value-prop/cloud.png';
import CustomisationIcon from '../img/value-prop/customisation.png';
import TrainingIcon from '../img/value-prop/training.png';
import TechnicalSupportIcon from '../img/value-prop/technical-support.png';

//https://www.salesforce.com/in/?ir=1

const ValueProposition = ({}) => (
    <div className="container">
        <h1 className="full-centered">COMPLETE SOLUTION</h1>
        <div className="columns is-mobile is-multiline has-text-centered">
            <div className="column is-one-quarter-desktop is-10-mobile is-offset-1-mobile">
                <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                    <img src={CaseManagementIcon} alt="Case Management" width="64px"/>
                    <h4>Case Management</h4>Create rich data formats. Manage beneficiaries, families, households, anything.<br/>
                </div>
            </div>
            <div className="column is-one-quarter-desktop is-10-mobile is-offset-1-mobile">
                <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                    <img src={FormDesignerIcon} alt="Form Designer" width="64px"/>
                    <h4>Form Designer</h4>Design your forms with powerful in-built algorithmic support<br/><br/>
                </div>
            </div>
            <div className="column is-one-quarter-desktop is-10-mobile is-offset-1-mobile">
                <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                    <img src={ReportDashboardIcon} alt="Reports and Dashboard" width="64px"/>
                    <h4>Reports & Dashboard</h4>Get insights into your program and share them<br/><br/>
                </div>
            </div>
            <div className="column is-one-quarter-desktop is-10-mobile is-offset-1-mobile">
                <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                    <img src={WorkDiaryIcon} alt="Work diary" width="64px"/>
                    <h4>Work schedule diary</h4>Your fieldworkers will never miss any activity and beneficiary interaction<br/>
                </div>
            </div>
        </div>
        <br/>
        <h1 className="full-centered">WITH ALL SERVICES</h1>
        <div className="columns is-mobile is-multiline has-text-centered">
            <div className="column is-one-quarter-desktop is-10-mobile is-offset-1-mobile">
                <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                    <img src={CloudIcon} alt="Cloud hosting" width="64px"/>
                    <h4>Cloud hosting</h4>Secured and affordable cloud hosted service<br/>
                </div>
            </div>
            <div className="column is-one-quarter-desktop is-10-mobile is-offset-1-mobile">
                <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                    <img src={CustomisationIcon} alt="Customisation" width="64px"/>
                    <h4>Customisation</h4>Customisation of the platform as per the needs of your project<br/>
                </div>
            </div>
            <div className="column is-one-quarter-desktop is-10-mobile is-offset-1-mobile">
                <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                    <img src={TrainingIcon} alt="Training" width="64px"/>
                    <h4>Product training</h4>Get trained in the product to customise it yourself<br/>
                </div>
            </div>
            <div className="column is-one-quarter-desktop is-10-mobile is-offset-1-mobile">
                <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                    <img src={TechnicalSupportIcon} alt="Technical support" width="64px"/>
                    <h4>Technical support</h4>Annual maintenance support for your customisations<br/>
                </div>
            </div>
        </div>
    </div>
);

ValueProposition.propTypes = {
};

export default ValueProposition;