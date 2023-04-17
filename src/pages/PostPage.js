import PostService from "API/PostService";
import Loader from "components/UI/loader/Loader";
import { useFetching } from "hooks/useFetching";
import React, { useEffect, useState } from "react";
import  {useParams} from 'react-router-dom'

const PostPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})

  const [fetchPostById, isPostLoading, error] = useFetching(async () => {
    // console.log(id);

    const response = await PostService.getById(params.id)
    setPost(response.data)
  })

  useEffect(() => {
    // console.log(params);
    fetchPostById()
  }, [])

  return (
    <div>
      Post Page
      {params.id}
      {/* {
        isPostLoading
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>
      } */}
    </div>
  )
}

export default PostPage