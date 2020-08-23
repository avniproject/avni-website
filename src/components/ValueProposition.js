import React from 'react';
import PropTypes from 'prop-types';
import CaseManagementIcon from '../img/value-prop/case-management.png';
import FormDesignerIcon from '../img/value-prop/form-designer.png';
import ReportDashboardIcon from '../img/value-prop/report-dashboard.png';
import WorkDiaryIcon from '../img/value-prop/work-diary.png';
import CloudIcon from '../img/value-prop/cloud.png';
import CustomisationIcon from '../img/value-prop/customisation.png';
import TrainingIcon from '../img/value-prop/training.png';
import TechnicalSupportIcon from '../img/value-prop/technical-support.png';

const ValueProposition = ({gridItems}) => (
    <div className="container">
        <h1 className="full-centered">Complete Solution</h1>
        <div className="columns is-mobile is-multiline has-text-centered">
            <div className="column is-one-quarter-desktop is-10-mobile is-offset-1-mobile">
                <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                    <img src={CaseManagementIcon} alt="Case Management" width="64px"/>
                    <h4>Case Management</h4>Create rich data formats<br/>
                </div>
            </div>
            <div className="column is-one-quarter-desktop is-10-mobile is-offset-1-mobile">
                <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                    <img src={FormDesignerIcon} alt="Form Designer" width="64px"/>
                    <h4>Form Designer</h4>Community support<br/>
                </div>
            </div>
            <div className="column is-one-quarter-desktop is-10-mobile is-offset-1-mobile">
                <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                    <img src={ReportDashboardIcon} alt="Reports and Dashboard" width="64px"/>
                    <h4>Reports & Dashboard</h4>Community support<br/>
                </div>
            </div>
            <div className="column is-one-quarter-desktop is-10-mobile is-offset-1-mobile">
                <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                    <img src={WorkDiaryIcon} alt="Work diary" width="64px"/>
                    <h4>Work schedule diary</h4>Community support<br/>
                </div>
            </div>
        </div>
        <br/>
        <h1 className="full-centered">All Associated Services</h1>
        <div className="columns is-mobile is-multiline has-text-centered">
            <div className="column is-one-quarter-desktop is-10-mobile is-offset-1-mobile">
                <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                    <img src={CloudIcon} alt="Cloud hosting" width="64px"/>
                    <h4>Cloud hosting</h4>Create rich data formats<br/>
                </div>
            </div>
            <div className="column is-one-quarter-desktop is-10-mobile is-offset-1-mobile">
                <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                    <img src={CustomisationIcon} alt="Customisation" width="64px"/>
                    <h4>Customisation</h4>Create rich data formats<br/>
                </div>
            </div>
            <div className="column is-one-quarter-desktop is-10-mobile is-offset-1-mobile">
                <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                    <img src={TrainingIcon} alt="Training" width="64px"/>
                    <h4>Product training</h4>Create rich data formats<br/>
                </div>
            </div>
            <div className="column is-one-quarter-desktop is-10-mobile is-offset-1-mobile">
                <div className="content has-background-grey-lighter" style={{padding: '2em'}}>
                    <img src={TechnicalSupportIcon} alt="Technical support" width="64px"/>
                    <h4>Technical support</h4>Create rich data formats<br/>
                </div>
            </div>
        </div>
    </div>
);

ValueProposition.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            title: PropTypes.string,
            text: PropTypes.string,
        })
    ),
};

export default ValueProposition;