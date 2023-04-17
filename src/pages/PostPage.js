import PostService from "API/PostService";
import Loader from "components/UI/loader/Loader";
import { useFetching } from "hooks/useFetching";
import React, { useEffect, useState } from "react";
import  {useParams} from 'react-router-dom'

const PostPage = () => {
  const {id} = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  const [fetchPostById, isPostLoading, postError] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })

  const [fetchPostComments, areCommentsLoading, commentsError] = useFetching(async (id) => {
    const response = await PostService.getPostComments(id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostById(id)
    fetchPostComments(id)
  }, [])

  return (
    <div>
      {
        isPostLoading
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>
      }

      <hr style={{width: '70vw'}}/>

      {
        areCommentsLoading
        ? <Loader/>
        : <div>
            {comments.map((com, index) => 
              <div key={index}>
                <h4>{com.email}</h4>
                <div>{com.body}</div>
              </div>
            )}
          </div>
      }
    </div>
  )
}

export default PostPage