import About from "pages/About";
import Error from "pages/Error";
import PostPage from "pages/PostPage";
import Posts from "pages/Posts";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/posts" element={<Posts/>} />
      <Route path="/posts/:id" element={<PostPage/>} />
      <Route path="/error" element={<Error/>} />
      <Route path="*" element={<Navigate to="/error"/>}/>
    </Routes>
  )
}

export default AppRouter