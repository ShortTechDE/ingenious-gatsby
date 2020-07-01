import PropTypes from 'prop-types'
import React from 'react'

import { InfiniteScroll, Pagination, PostList } from '.'

class PostView extends React.Component {
  constructor(props) {
    super(props)
    props.globalState.initItems(props.pageContext, props.posts)
  }

  render() {
    const {
      globalState: g,
      pageContext,
      posts
    } = this.props

    const { iScrollEnabled } = pageContext
    const items = (iScrollEnabled && !g.isInitializing() ? g.getItems(pageContext) : posts)

    items.forEach(({ node }) => {
      node.collectionPath = pageContext.collectionPath || (pageContext.collectionPaths && pageContext.collectionPaths[node.id])
    })

    return (
      <>
        <main className="container overlap-with-header" id="content-view">
          <InfiniteScroll throttle={50} threshold={1000} isLoading={g.isLoading} hasMore={g.hasMore(pageContext)} onLoadMore={g.loadMore(pageContext)}>
            <PostList posts={items} />
          </InfiniteScroll>
        </main>

        {/* Fallback to Pagination for non JS users. */}
        {g.useInfiniteScroll &&
          <noscript>
            <Pagination pageContext={pageContext} />
          </noscript>
        }

        {/* Fallback to Pagination on error. */}
        {!g.useInfiniteScroll &&
          <Pagination pageContext={pageContext} />
        }
      </>
    )
  }
}

PostView.propTypes = {
  globalState: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired
}

export default PostView