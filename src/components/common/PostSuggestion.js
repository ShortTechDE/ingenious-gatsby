import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import BackgroundImage from 'gatsby-background-image'

const PostSuggestion = ({ post }) => (
  <AniLink cover bg="#111111" direction="up" duration={1} to={`/${post.primary_tag.slug}/${post.slug}/`}>
    <BackgroundImage
      Tag="article"
      className="next-article"
      fluid={[`linear-gradient(to left, rgba(0,0,0,0.2), rgba(0,0,0,0.7))`, post.featureImageSharp.childImageSharp.fluid]}
      data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease">
      <div class="content">
        <span>{post.primary_tag.name}</span>
        <h1 class="title">{post.title}</h1>
      </div>
    </BackgroundImage>
  </AniLink>
)

PostSuggestion.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    feature_image: PropTypes.string,
    featured: PropTypes.bool,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    excerpt: PropTypes.string.isRequired,
    primary_author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_image: PropTypes.string,
    }).isRequired,
    featureImageSharp: PropTypes.object.isRequired,
  }).isRequired,
}

export default PostSuggestion