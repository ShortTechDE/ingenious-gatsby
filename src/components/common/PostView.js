import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from "styled-components"
import { FaSpinner } from 'react-icons/fa/'

import { PostList, Pagination, InfiniteScroll } from '.'

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`

const Spinner = styled.div`
    margin: -4vw 0vw 4.5vw;
    font-size: 30px;
    text-align: center;
    display: ${props => (props.infiniteScroll ? `block` : `none`)};
    & > svg {
        fill: rgba(46, 46, 46, 0.6);
        animation: ${rotate} 3s linear infinite;

        @media (prefers-color-scheme: dark) {
          fill: rgba(255, 255, 255, 0.3);
        }
    }
`

class PostView extends React.Component {
  constructor(props) {
    super(props)
    if (props.globalState.isInitializing() || !props.globalState.useInfiniteScroll) {
      props.globalState.updateState({
        items: props.posts,
        cursor: props.pageContext.humanPageNumber + 1,
      })
    }
  }

  render() {
    const {
      globalState: g,
      pageContext,
      posts,
    } = this.props

    const items = (!g.isInitializing() ? g.items : posts)

    return (
      <>
        <main className="container overlap-with-header" id="content-view">
          <InfiniteScroll throttle={300} threshold={600} isLoading={g.isLoading} hasMore={g.hasMore(pageContext)} onLoadMore={g.loadMore}>
            <PostList posts={items} />
          </InfiniteScroll>
        </main>

        {/* Loading spinner. */}
        {g.isLoading &&
          <Spinner infiniteScroll={g.useInfiniteScroll} >
            <FaSpinner />
          </Spinner>
        }

        {/* Fallback to Pagination for non JS users. */}
        {g.useInfiniteScroll &&
          <noscript>
            <style>
              {`.spinner { display: none !important; }`}
            </style>
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
  posts: PropTypes.array.isRequired,
  isHome: PropTypes.bool,
  isAuthor: PropTypes.bool,
}

export default PostView