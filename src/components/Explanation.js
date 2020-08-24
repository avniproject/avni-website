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

const Explanation = ({gridItems}) => (
    <div className="container">
        <h1 className="full-centered">In-house data collection applications are unsustainable</h1>
        <p>While development of in-house data collections applications seem feasible and even exciting in the beginning - they become difficult to sustain. We have come across these situations so many times and that is partly the reason we developed Avni.</p>
        <p>Organisations requirements both increase and evolve over time. This requires constant improvements to the software and hence regular funds. It is difficult to retain the software developers after initial development of application. After initial success NGOs often struggle.</p>
        <p>An open source platform like Avni, being a shared public good - effectively utilises limit resources, adds features, and becomes robust as more organisations use it.</p>
    </div>
);

Explanation.propTypes = {
};

export default Explanation;