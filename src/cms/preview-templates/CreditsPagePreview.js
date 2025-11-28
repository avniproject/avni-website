import React from 'react'
import PropTypes from 'prop-types'
import { CreditsPageTemplate } from '../../templates/credits-page'

const CreditsPagePreview = ({ entry, widgetFor }) => (
  <CreditsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

CreditsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CreditsPagePreview
