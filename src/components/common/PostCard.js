import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const PostCard = ({ post }) => {
  const url = `/${post.slug}/`

  return (
    <article className="article" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-cubic"
      data-aos-delay="100">
      {post.feature_image && <Link to={url}><img className="thumbnail" src={post.feature_image} alt={post.title} /></Link>}
      <div className="content">
        {post.primary_tag && <Link to={post.primary_tag.url} className="category">{post.primary_tag.name}</Link>}
        <h1 className="title">{post.title}</h1>
        <p className="text-preview">
          {post.excerp}
        </p>
      </div>
      <Link to={url} className="button dark">Lesen</Link>
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
