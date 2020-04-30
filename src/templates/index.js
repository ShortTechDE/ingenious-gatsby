import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { Layout, PostList, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'

const Index = ({ data, location, pageContext }) => {
  const posts = data.posts.edges
  const featuredPost = data.featured.edges || data.recent.edges

  return (
    <>
      <MetaData location={location} />
      <Layout isHome={true}>
        {featuredPost.map(({ node }) => (
          <header className="page-header top-story"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(" + node.feature_image + ")  no-repeat center / cover, #111111" }}>
            <div className="content container">
              <h1 className="headline">{node.title}</h1>
              <AniLink cover bg="#111111" direction="up" duration={1} className="button" to={`/${node.slug}/`}>Lesen</AniLink>
            </div>
            <figure className="wave"></figure>
          </header>
        ))}
        <main className="container overlap-with-header" id="content-view">
          <PostList posts={posts} />
        </main>
      </Layout>
    </>
  )
}

Index.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    featured: PropTypes.shape({
      allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    recent: PropTypes.shape({
      allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    posts: allGhostPost(
      sort: { order: DESC, fields: [published_at] },
      limit: $limit,
      skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
    featured: allGhostPost(
      filter: {featured: {eq: true}},
      limit: 1,
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
    recent: allGhostPost(
      sort: { order: DESC, fields: [published_at] },
      limit: 1
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`