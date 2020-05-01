import React from 'react'
import PropTypes from 'prop-types'
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
            <Layout isTag={true}>
              <WaveHeader context={data} additionalClasses="category">
                <div class="content container">
                  <h1 class="headline">{tag.name}</h1>
                  {tag.description ? <aside class="bio">{tag.description}</aside> : null}
                </div>
              </WaveHeader>
              <main className="container overlap-with-header">
                <PostView posts={posts} globalState={g} pageContext={pageContext} isTag={true} />
              </main>
            </Layout>
          </>
        )
      }}
    </GlobalStateContext.Consumer>
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
