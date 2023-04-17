import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { privateRoutes, publicRoutes } from '../routes'
import { AuthContext } from "context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
  const { isAuth, isAuthLoading} = useContext(AuthContext)

  if (isAuthLoading) {
    return <Loader/>
  }

  return (
    isAuth
      ? 
        <Routes>
          {
            privateRoutes.map((route, index) =>
              <Route key={index} path={route.path} element={route.element}/>
            )
          }
          <Route path="*" element={<Navigate to="/posts"/>}/>
        </Routes>
      : 
        <Routes>
          {
            publicRoutes.map((route, index) =>
              <Route key={index} path={route.path} element={route.element}/>
            )
          }
          <Route path="*" element={<Navigate to="/login"/>}/>
        </Routes>
  )
}

export default AppRouter