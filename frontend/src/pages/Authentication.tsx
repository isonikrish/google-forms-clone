import { useEffect, useState } from "react"
import Signup from "../components/Signup"
import Login from "../components/Login"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/useAuth";

function Authentication() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const {user} = useAuth();
  useEffect(()=>{
    if(user){
      navigate("/forms")
    }
  },[user])
  return (
    <div>
      {isLogin? <Login setIsLogin={setIsLogin}/> : <Signup setIsLogin={setIsLogin}/>}
    </div>
  )
}

export default Authentication