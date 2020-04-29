import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PostList } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Author page (/autor/:slug)
*/

const Author = ({ data, location, pageContext }) => {
    const author = data.ghostAuthor
    const posts = data.allGhostPost.edges
    const twitterUrl = author.twitter ? `https://twitter.com/${author.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = author.facebook ? `https://www.facebook.com/${author.facebook.replace(/^\//, ``)}` : null

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="profile"
            />
            <Layout>
              <header className="page-header author"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(" + author.cover_image + ")  no-repeat center / cover, #111111" }}>
                <div class="content container">
                  <h1 class="headline">{author.name}</h1>
                  {author.bio && <aside class="bio">{author.bio}</aside>}
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

Author.propTypes = {
    data: PropTypes.shape({
        ghostAuthor: PropTypes.shape({
            name: PropTypes.string.isRequired,
            cover_image: PropTypes.string,
            profile_image: PropTypes.string,
            website: PropTypes.string,
            bio: PropTypes.string,
            location: PropTypes.string,
            facebook: PropTypes.string,
            twitter: PropTypes.string,
        }),
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
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
