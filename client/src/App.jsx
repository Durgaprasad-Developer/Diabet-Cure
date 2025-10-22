bro when I am refresing it goes to index so if there is token then it will direct to this page import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Signin from "./pages/Signin.jsx";
import Landingpage from "./pages/Landingpage.jsx";
import Forgotpassword from "./pages/Forgotpassword.jsx";
import ProfileSetup from "./pages/ProfileSetup.jsx";
import { useSelector } from "react-redux";
import useCurrentUser from "./hooks/useCurrentUser.jsx";
import { Navigate } from "react-router-dom";
import Glucosereadings from "./pages/Glucosereadings.jsx";
import AIReport from "./pages/AIReport.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  useCurrentUser();
  const userData = useSelector((state) => state.user.user);
  console.log("App.jsx", userData);
  return (
    <Routes>
      <Route
        path="/"
        element={userData ? <Dashboard /> : <Navigate to="/landingpage" />}
      />
      <Route
        path="/signup"
        element={!userData ? <Signup /> : <Navigate to="/" />}
      />
      {/* <Route path="/signin" element={<Signin/>}/> */}
      <Route
        path="/signin"
        element={!userData ? <Signin /> : <Navigate to="/" />}
      />
      <Route
        path="/landingpage"
        element={!userData ? <Landingpage /> : <Navigate to="/" />}
      />
      <Route
        path="/forgot-password"
        element={!userData ? <Forgotpassword /> : <Navigate to="/" />}
      />
      <Route path="/profileSetup" element={<ProfileSetup />} />
      <Route
        path="/glucose-readings"
        element={
          userData ? <Glucosereadings /> : <Navigate to="/landingpage" />
        }
      />
      <Route
        path="/aiReport"
        element={userData ? <AIReport /> : <Navigate to="/landingpage" />}
      />
      <Route
        path="/profile"
        element={userData ? <Profile /> : <Navigate to="/landingpage" />}
      />
    </Routes>
  );
}

export default App;