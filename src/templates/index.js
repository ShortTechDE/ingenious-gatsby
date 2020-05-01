import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { Layout, PostView, WaveHeader } from '../components/common'
import { MetaData } from '../components/common/meta'
import { GlobalStateContext } from "../context/GlobalState"

const Index = ({ data, location, pageContext }) => {
  const posts = data.posts.edges
  const featuredPost = data.featured.edges || data.recent.edges

  return (
    <GlobalStateContext.Consumer> 
      { g => {return (
        <>
          <MetaData location={location} />
          <Layout isHome={true}>
            {featuredPost.map(({ node }) => (
              <WaveHeader context={node} additionalClasses="top-story">
                <div className="content container">
                  <h1 className="headline" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease">{node.title}</h1>
                  <AniLink cover bg="#111111" direction="up" duration={1} className="button" to={`/${node.primary_tag.slug}/${node.slug}/`} data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease" data-sal-delay="100">Lesen</AniLink>
                </div>
              </WaveHeader>
            ))}
            <PostView posts={posts} globalState={g} pageContext={pageContext} />
          </Layout>
        </>
      )}}
    </GlobalStateContext.Consumer>
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