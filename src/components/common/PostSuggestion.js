import AniLink from 'gatsby-plugin-transition-link/AniLink'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'

const PostSuggestion = ({ post: {slug, featureImageSharp, title, primary_tag } }) => {
  const fluidFeatureImg = featureImageSharp && featureImageSharp.childImageSharp && featureImageSharp.childImageSharp.fluid

  return (
    <AniLink cover bg="#111111" direction="up" duration={1} to={`/${slug}/`}>
      <BackgroundImage
        Tag="article"
        className="next-article"
        fluid={[`linear-gradient(to left, rgba(0,0,0,0.2), rgba(0,0,0,0.7))`, fluidFeatureImg]}
        backgroundColor={`#111111`}
        data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease">
        <div className="content">
          <span>{primary_tag.name}</span>
          <h1 className="title">{title}</h1>
        </div>
      </BackgroundImage>
    </AniLink>
  )
}

export default PostSuggestion