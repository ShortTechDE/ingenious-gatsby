import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import { GlobalStateContext } from "../context/GlobalState"
import { Layout, PostView, WaveHeader } from '../components/common'
import { MetaData } from '../components/common/meta'

const Index = ({ data, location, pageContext }) => {
  const posts = data.posts.edges
  const featuredPost = data.featured.edges || data.recent.edges

  return (
    <GlobalStateContext.Consumer> 
      { g => {return (
        <>
          <MetaData location={location} />
          <Layout>
            <WaveHeader context={featuredPost[0].node} additionalClasses="top-story">
              <div className="content container">
                <h1 className="headline" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease">{featuredPost[0].node.title}</h1>
                <AniLink cover bg="#111111" direction="up" duration={1} className="button" to={`/${featuredPost[0].node.slug}/`} data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease" data-sal-delay="100">Lesen</AniLink>
              </div>
            </WaveHeader>
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