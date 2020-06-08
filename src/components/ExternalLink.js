import React from "react";
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class ExternalLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <a href={this.props.href} target="_blank" rel="noopener noreferrer">{_.isNil(this.props.text) ? this.props.children : this.props.text}</a>;
    }
}

ExternalLink.propTypes = {
    text: PropTypes.string,
    href: PropTypes.string
};