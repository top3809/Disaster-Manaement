import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

import Login from "./components/admin/Login";
import Signup from "./components/users/Signup";
import "./styles/login.scss";
import "./styles/signup.scss"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>

    </Router>
  );
}

export default App;
