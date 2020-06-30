import Img from "gatsby-image"
import PropTypes from 'prop-types'
import React from 'react'

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