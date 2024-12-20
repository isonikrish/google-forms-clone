import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Authentication from "./pages/Authentication";
import Forms from "./pages/Forms";
import EditFormDisplay from "./pages/EditFormDisplay";
import Profile from "./pages/Profile";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./store/useAuth";
import { useEffect } from "react";
function App() {
  const {fetchMe} = useAuth()
  useEffect(()=>{
    fetchMe();
  },[])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/forms/:id" />
        <Route path="/forms/:id/edit" element={<EditFormDisplay />} />
        <Route path="/profile" element={<Profile />}/>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
