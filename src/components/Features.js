import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Link } from 'gatsby'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline is-mobile">
    <div className="column is-12 has-text-centered">
      <h2
        className="is-size-3-mobile is-size-3-tablet is-size-2-widescreen"
      >
        Features
      </h2>
        <p>
            Avni allows you to describe your fieldwork program onto the platform and create an app to use in the field and for program coordination.
        </p>
    </div>
    {gridItems.map(item => (
      <div key={item.text} className="column is-one-third-tablet is-full-mobile">
        <section>
          <div className="has-text-centered">
            <div
              style={{
                width: '50%',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <h3 className="has-text-centered">{item.title}</h3>
          <p className="has-text-centered">{item.text}</p>
        </section>
      </div>
    ))}
    <div className="column is-12 has-text-centered">
      <Link className="btn" to="/features">
        See all features
      </Link>
    </div>
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
