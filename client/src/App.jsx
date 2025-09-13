import { Routes, Route } from "react-router-dom"
import Signup from "./pages/Signup.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Signin from "./pages/Signin.jsx"
import Landingpage from "./pages/Landingpage.jsx"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/landingpage" element={<Landingpage/>}/>
    </Routes>
  )
}

export default App
