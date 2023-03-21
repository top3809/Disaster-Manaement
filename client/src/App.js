import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

import Login from "./components/admin/Login";
import Signup from "./components/users/Signup";
import UserLogin from "./components/users/UserLogin";
import Footer from "./components/layout/Footer";

import "./styles/login.scss";
import "./styles/signup.scss";
import "./styles/userlogin.scss";
import "./styles/footer.scss";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/userlogin" element={<UserLogin/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
