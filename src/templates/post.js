import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Single post view (/:slug)
*/
const Post = ({ data, location }) => {
  const post = data.ghostPost
  const readingTime = readingTimeHelper(post)

  return (
    <>
      <MetaData
        data={data}
        location={location}
        type="article"
      />
      <Helmet>
        <style type="text/css">{`${post.codeinjection_styles}`}</style>
      </Helmet>
      <Layout>
        <header className="page-header article"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(" + post.feature_image + ")  no-repeat center / cover, #111111" }}>
          <div className="content container">
            <div className="meta">
              <span className="date">{post.published_at_pretty}</span>
              {post.primary_tag && <span className="category">
                <Link to={post.primary_tag.slug}>{post.primary_tag.name}
                </Link>
              </span>}
              <span className="readingtime">{readingTime}</span>
            </div>
            <h1 className="headline">{post.title}</h1>
            <div className="authors">
              von Autoren
            </div>
          </div>
          <figure className="wave"></figure>
        </header>
        <section className="article container">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </section>
      </Layout>
    </>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`
