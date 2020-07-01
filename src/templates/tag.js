import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import { Layout, PostView, WaveHeader } from '../components/common'
import { MetaData } from '../components/common/meta'

import { GlobalStateContext } from "../context/GlobalState"

/**
* Tag page
*/

const Tag = ({ data, location, pageContext }) => {
  const tag = data.ghostTag
  const posts = data.allGhostPost.edges

  return (
    <GlobalStateContext.Consumer>
      {g => {
        return (
          <>
            <MetaData
              data={data}
              location={location}
              type="series"
            />
            <Layout>
              <WaveHeader context={tag} additionalClasses="category">
                <div className="content container">
                  <h1 className="headline">{tag.name}</h1>
                  {tag.description ? <aside className="bio">{tag.description}</aside> : null}
                </div>
              </WaveHeader>
              <PostView posts={posts} globalState={g} pageContext={pageContext} />
            </Layout>
          </>
        )
      }}
    </GlobalStateContext.Consumer>
  )
}

Tag.propTypes = {
  data: PropTypes.shape({
    ghostTag: PropTypes.object.isRequired,
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default Tag

export const pageQuery = graphql`
  query GhostTagQuery($postIds: [String!]!, $slug: String!, $limit: Int!, $skip: Int!) {
    ghostTag(slug: { eq: $slug }) {
      ...GhostTagFields
    }
    allGhostPost(
      filter: {id: { in: $postIds }, tags: {elemMatch: {slug: {eq: $slug}}}},
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
