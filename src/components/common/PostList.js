import PropTypes from 'prop-types'
import React from 'react'

import { PostCard } from '.'

const PostList = ({ posts }) => {

  return (
    <>
      <div className="post-list post-list--three" id="p3">
        <div className="post-list-column" id="p31">
          {posts.filter(({ node }, i) => i % 3 === 3 - 3).map(({ node }, i) => (
            <PostCard key={node.id} post={node} />
          ))}        </div>
        <div className="post-list-column" id="p32">
          {posts.filter(({ node }, i) => i % 3 === 3 - 2).map(({ node }, i) => (
            <PostCard key={node.id} post={node} />
          ))}
        </div>
        <div className="post-list-column" id="p33">
          {posts.filter(({ node }, i) => i % 3 === 3 - 1).map(({ node }, i) => (
            <PostCard key={node.id} post={node} />
          ))}
        </div>
      </div>
      <div className="post-list post-list--two" id="p2">
        <div className="post-list-column" id="p21">
          {posts.filter(({ node }, i) => i % 2 === 2 - 2).map(({ node }, i) => (
            <PostCard key={node.id} post={node} />
          ))}          
        </div>
        <div className="post-list-column" id="p22">
          {posts.filter(({ node }, i) => i % 2 === 2 - 1).map(({ node }, i) => (
            <PostCard key={node.id} post={node} />
          ))}
        </div>
      </div>
      <div className="post-list post-list--one" id="p1">
        {posts.map(({ node }) => (
          <PostCard key={node.id} post={node} />
        ))}
      </div>
    </>
  )
}

PostList.propTypes = {
  posts: PropTypes.array,
}

export default PostList
