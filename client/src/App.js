import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

import Home from "./components/admin/login";
import "./styles/admin.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

    </Router>
  );
}

export default App;
