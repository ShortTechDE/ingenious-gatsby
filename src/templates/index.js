import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import { GlobalStateContext } from "../context/GlobalState"
import { Layout, PostView, WaveHeader } from '../components/common'
import { MetaData } from '../components/common/meta'

const Index = ({ data, location, pageContext }) => {
  const posts = data.allGhostPost.edges
  const featuredPost = data.featured.edges || data.recent.edges

  return (
    <GlobalStateContext.Consumer> 
      {g => (
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
      )}
    </GlobalStateContext.Consumer>
  )
}

Index.propTypes = {
  data: PropTypes.shape({
    allGhostPost: PropTypes.object.isRequired,
    file: PropTypes.object,
  }).isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default Index

export const pageQuery = graphql`
  query GhostPostQuery($postIds: [String!]!, $limit: Int!, $skip: Int!) {
    allGhostPost(
        filter: {id: {in: $postIds}, featured: {eq: false}},
        limit: $limit,
        skip: $skip,
        sort: { fields: [published_at], order: [DESC, DESC] }
    ) {
      edges {
        node {
          ...GhostPostFieldsForIndex
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
  }
`