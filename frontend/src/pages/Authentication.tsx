import { useState } from "react"
import Signup from "../components/Signup"
import Login from "../components/Login"

function Authentication() {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  return (
    <div>
      {isLogin? <Login setIsLogin={setIsLogin}/> : <Signup setIsLogin={setIsLogin}/>}
    </div>
  )
}

export default Authentication