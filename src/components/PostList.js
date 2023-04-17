import React from "react";
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group"

const PostList = ({posts, title, remove}) => {

  if(!posts.length) {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>No posts</h1>
      </div>
    )
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        {title}
      </h1>
      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={(300)}
            classNames="post"
          >
            <PostItem remove={remove} post={post} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}

export default PostList