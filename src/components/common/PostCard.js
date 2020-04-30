import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const PostCard = ({ post }) => {
  const url = `/${post.slug}/`

  return (
    <article className="article" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-cubic"
      data-aos-delay="100">
      {post.feature_image ? <AniLink cover bg="#111111" direction="up" duration={0.8} to={url}><img className="thumbnail" src={post.feature_image} alt={post.title} /></AniLink> : null}
      <div className="content">
        {post.primary_tag ? <AniLink cover bg="#111111" direction="up" duration={0.8} to={post.primary_tag.slug} className="category">{post.primary_tag.name}</AniLink> : null}
        <h1 className="title">{post.title}</h1>
        <p className="text-preview">
          {post.excerpt}
        </p>
      </div>
      <AniLink cover bg="#111111" direction="up" duration={0.8} to={url} className="button dark">Lesen</AniLink>
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
  }).isRequired,
}

export default PostCard
