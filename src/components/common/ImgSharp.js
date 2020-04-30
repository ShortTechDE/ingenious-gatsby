import React from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"

const ImgSharp = ({ fluidClass, fluidImg, srcClass, srcImg, alt }) => (
  <>
    {fluidImg ? (
      <Img className={fluidClass} fluid={fluidImg} alt={alt} />
    ) : (
        srcImg && <img className={srcClass} src={srcImg} alt={alt} />
      )}
  </>
)

ImgSharp.propTypes = {
  fluidClass: PropTypes.string,
  fluidImg: PropTypes.object,
  srcClass: PropTypes.string,
  srcImg: PropTypes.string,
  alt: PropTypes.string.isRequired,
}

export default ImgSharp