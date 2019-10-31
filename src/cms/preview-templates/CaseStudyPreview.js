import React from 'react'
import PropTypes from 'prop-types'
import { CaseStudyTemplate } from '../../templates/case-study'

const CaseStudyPreview = ({ entry, widgetFor }) => (
  <CaseStudyTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

CaseStudyPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CaseStudyPreview
