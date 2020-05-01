import React from 'react'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'

const WaveHeader = ({ context, children, additionalClasses }) => {
  const Image = context.featureImageSharp && context.featureImageSharp.large && context.featureImageSharp.large.fluid ||
    context.coverImageSharp && context.coverImageSharp.large && context.coverImageSharp.large.fluid;
  const localImage = context.feature_image || context.cover_image;

  return (
    <>
      {Image ? 
        <BackgroundImage
          Tag="header"
          className={`page-header ${additionalClasses}`}
          fluid={[`linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.3))`, Image]}
          backgroundColor={`#111111`}
        >
          {children}
          <figure className="wave"></figure>
        </BackgroundImage> :
        <header 
          className={`page-header ${additionalClasses}`}
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(" + localImage + ")  no-repeat center / cover, #111111" }}
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
