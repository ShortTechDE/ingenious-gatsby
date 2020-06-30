import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

import { Layout, PostSuggestion, WaveHeader } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Single post view
*/

const Post = ({ data, location }) => {
  const post = data.ghostPost
  const readingTime = readingTimeHelper(post, {minute: 'Nur eine Minute Lesezeit', minutes: '% Minuten Lesezeit'})

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
        <WaveHeader context={post} additionalClasses="article">
         <div className="content container">
            <div className="meta" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease" data-sal-delay="100">
              <span className="date">{post.published_at_pretty}</span>
              {post.primary_tag && <span className="category">
                <AniLink cover bg="#111111" direction="up" duration={1} to={`/tag/${post.primary_tag.slug}/`}>
                  {post.primary_tag.name}
                </AniLink>
              </span>}
              <span className="readingtime">{readingTime}</span>
            </div>
            <h1 className="headline" data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease" data-sal-delay="100">{post.title}</h1>
            <div className="authors" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease" data-sal-delay="500">
              von&nbsp;
              {post.authors.map((author, i) =>
                <> 
                  <AniLink cover bg="#111111" direction="up" duration={1} to={`/author/${author.slug}/`}>
                    {author.name}
                  </AniLink>
                  {post.authors[i+1] ? <>&nbsp;&amp;&nbsp;</> : null}
                </>
              )}
            </div>
          </div>
        </WaveHeader>
        <section className="article container">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </section>
        <aside className="post-suggestions">
          <div className="container">
            {data.next ? <PostSuggestion post={data.next} /> : null}
            {data.prev ? <PostSuggestion post={data.prev} /> : null}
          </div>
        </aside>
      </Layout>
    </>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      codeinjection_styles: PropTypes.string,
      url: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      custom_excerpt: PropTypes.string,
      feature_image: PropTypes.string,
      featured: PropTypes.bool,
      tags: PropTypes.arrayOf(
        PropTypes.object.isRequired,
      ),
      authors: PropTypes.arrayOf(
        PropTypes.object.isRequired,
      ).isRequired,
      primary_tag: PropTypes.shape({
        name: PropTypes.string,
        slug: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
      published_at: PropTypes.string.isRequired,
      published_at_pretty: PropTypes.string.isRequired,
      featureImageSharp: PropTypes.object,
      childHtmlRehype: PropTypes.shape({
        html: PropTypes.string,
        tableOfContents: PropTypes.arrayOf(
          PropTypes.object,
        ),
      }),
    }).isRequired,
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object,
}

export default Post

export const postQuery = graphql`
  query($slug: String!, $prev: String!, $next: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
    prev: ghostPost(slug: { eq: $prev }) {
      ...GhostPostFields
    }
    next: ghostPost(slug: { eq: $next }) {
      ...GhostPostFields
    }
  }
`
