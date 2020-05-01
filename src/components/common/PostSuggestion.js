import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const PostSuggestion = ({ post }) => (
  <AniLink cover bg="#111111" direction="up" duration={1} to={`/${post.primary_tag.slug}/${post.slug}/`}>
    <article className="next-article {{post_class}}"
      style={{ background: "linear-gradient(to left, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(" + post.feature_image + ")  no-repeat center / cover, #111111" }}
      data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease">
      <div class="content">
        <span>{post.primary_tag.name}</span>
        <h1 class="title">{post.title}</h1>
      </div>
    </article>
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