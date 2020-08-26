import React from "react";
import PropTypes from 'prop-types';

const SecondaryCTAButton = ({link, text}) => (
    <p className="has-text-weight-bold control">
        <a href={link} className="button is-medium">{text}</a>
    </p>
);

SecondaryCTAButton.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default SecondaryCTAButton;