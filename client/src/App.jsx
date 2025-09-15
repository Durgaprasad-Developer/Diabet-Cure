import { Routes, Route } from "react-router-dom"
import Signup from "./pages/Signup.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Signin from "./pages/Signin.jsx"
import Landingpage from "./pages/Landingpage.jsx"
import Forgotpassword from "./pages/Forgotpassword.jsx"
import Profile from "./pages/Profile.jsx"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/landingpage" element={<Landingpage/>}/>
      <Route path="/forgot-password" element={<Forgotpassword/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  )
}

export default App
