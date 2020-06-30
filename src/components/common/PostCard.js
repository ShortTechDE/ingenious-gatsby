import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'
import React from 'react'

import { ImgSharp } from '.'

const PostCard = ({ post }) => {
  const url = `/${post.slug}/`
  const fluidFeatureImg = post.featureImageSharp && post.featureImageSharp.thumbnail && post.featureImageSharp.thumbnail.fluid

  return (
    <article className="article">
      <AniLink cover bg="#111111" direction="up" duration={1} to={url}>
        <ImgSharp fluidClass="thumbnail" srcClass="thumbnail" fluidImg={fluidFeatureImg} srcImg={post.feature_image} alt={post.title} />
      </AniLink>
      <div className="content">
        {post.primary_tag ? <AniLink cover bg="#111111" direction="up" duration={1} to={`/tag/${post.primary_tag.slug}/`} className="category">{post.primary_tag.name}</AniLink> : null}
        <h1 className="title">{post.title}</h1>
        <p className="text-preview">
          {post.excerpt}
        </p>
      </div>
      <AniLink cover bg="#111111" direction="up" duration={1} to={url} className="button dark">Lesen</AniLink>
    </article>
    )
}

PostCard.propTypes = {
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

export default PostCard
