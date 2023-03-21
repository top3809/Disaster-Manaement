import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

import Login from './components/admin/Login';
import Nav from './components/utility/Nav';
import Home from './components/user/Home';

function App() {
  return (
    <div className='App'>
    <Router>
    <Nav/>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        
        
        
      </Routes>

    </Router>
    </div>
  );
}

export default App;
