import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import { GlobalStateContext } from "../context/GlobalState"
import { Layout, PostView, WaveHeader } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Author page (/autor/:slug)
*/

const Author = ({ data, location, pageContext }) => {
  const author = data.ghostAuthor
  const posts = data.allGhostPost.edges

  return (
    <GlobalStateContext.Consumer>
      {g => {
        return (
          <>
            <MetaData
              data={data}
              location={location}
              type="profile"
            />
            <Layout isAuthor>
              <WaveHeader context={author} additionalClasses="author">
                <div className="content container">
                  <h1 className="headline" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease">{author.name}</h1>
                  {author.bio && <aside className="bio" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease" data-sal-delay="200">{author.bio}</aside>}
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

Author.propTypes = {
  data: PropTypes.shape({
    ghostAuthor: PropTypes.object.isRequired,
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default Author

export const pageQuery = graphql`
  query GhostAuthorQuery($slug: String!, $limit: Int!, $skip: Int!) {
    ghostAuthor(slug: { eq: $slug }) {
      ...GhostAuthorFields
    }
    allGhostPost(
      sort: { order: DESC, fields: [published_at] },
      filter: {authors: {elemMatch: {slug: {eq: $slug}}}},
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
