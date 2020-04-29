import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PostList } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Tag page (/tag/:slug)
*
* Loads all posts for the requested tag incl. pagination.
*
*/
const Tag = ({ data, location, pageContext }) => {
  const tag = data.ghostTag
  const posts = data.allGhostPost.edges

  return (
    <>
      <MetaData
        data={data}
        location={location}
        type="series"
      />
      <Layout>
        <header className="page-header category"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(" + tag.cover_image + ")  no-repeat center / cover, #111111" }}>
          <div class="content container">
            <h1 class="headline">{tag.name}</h1>
            {tag.description ? <aside class="bio">{tag.description}</aside> : null}
          </div>
          <figure class="wave"></figure>
        </header>
        <main className="container overlap-with-header">
          <PostList posts={posts} />
        </main>
      </Layout>
    </>
  )
}

Tag.propTypes = {
  data: PropTypes.shape({
    ghostTag: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
}

export default Tag

export const pageQuery = graphql`
  query GhostTagQuery($slug: String!, $limit: Int!, $skip: Int!) {
    ghostTag(slug: { eq: $slug }) {
      ...GhostTagFields
    }
    allGhostPost(
      sort: { order: DESC, fields: [published_at] },
      filter: {tags: {elemMatch: {slug: {eq: $slug}}}},
      limit: $limit,
      skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
