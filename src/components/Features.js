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
    </div>
    {gridItems.map(item => (
      <div key={item.text} className="column is-one-third-tablet is-full-mobile">
        <section className="section">
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
          <h3>{item.title}</h3>
          <p>{item.text}</p>
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
