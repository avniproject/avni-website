import React from 'react'
import PropTypes from 'prop-types'
import {StaticImage} from 'gatsby-plugin-image';

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <StaticImage style={imageStyle} src={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <StaticImage style={imageStyle} src={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <StaticImage style={imageStyle} src={image} alt={alt} />

  return null
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleImage
