import React from 'react'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'

const WaveHeader = ({ context, children, additionalClasses }) => {
  const localImage = context.featureImageSharp && context.featureImageSharp.large && context.featureImageSharp.large.fluid ||
    context.coverImageSharp && context.coverImageSharp.large && context.coverImageSharp.large.fluid;
  const externalImage = context.feature_image || context.cover_image;

  return (
    <>
      {localImage ? 
        <BackgroundImage
          Tag="header"
          className={`page-header ${additionalClasses}`}
          fluid={[`linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.3))`, localImage]}
          backgroundColor={`#111111`}
        >
          {children}
          <figure className="wave"></figure>
        </BackgroundImage> :
        <header 
          className={`page-header ${additionalClasses}`}
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(" + externalImage + ")  no-repeat center / cover, #111111" }}
        >
          {children}
          <figure className="wave"></figure>          
        </header>
      }
    </>
  )
}

WaveHeader.propTypes = {
  context: PropTypes.object.isRequired,
  additionalClasses: PropTypes.string,
}

export default WaveHeader
