import MyButton from "components/UI/button/MyButton";
import MyInput from "components/UI/input/MyInput";
import { AuthContext } from "context";
import React, { useContext } from "react";

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const login = event => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Type nickname..."/>
        <MyInput type="password" placeholder="Type password..."/>
        <MyButton>Login</MyButton>
      </form>
    </div>
  )
}

export default Login