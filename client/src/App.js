import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Login from './components/admin/Login';
import Nav from './components/utility/Nav';
import Home from './components/user/Home';
import Footer from './components/layout/Footer'
import UserLogin from './components/users/UserLogin';
import Signup from './components/users/Signup';
import { AuthProvider } from './context/AuthContext';
import AlertsForm from './components/user/AlertsForm';
import DonationForm from './components/user/DonationForm'
import Donation from './components/home/Donation'
import VolunteerForm from './components/user/VolunteerForm'
import Maps from "./components/utility/Maps";

import "./styles/login.scss";
import "./styles/signup.scss";
import "./styles/maps.scss";

function App() {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Nav />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/userlogin" element={<UserLogin />} />
            <Route path="/usersignup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/alertsform" element={<AlertsForm/>} />
            <Route path="/maps" element={<Maps/>}/>
            <Route path="/donationform" element={<DonationForm/>} />
            <Route path="/volunteerform" element={<VolunteerForm/>} />
            <Route path="/donation" element={<Donation/>} />
            
          </Routes>
        </AuthProvider>
      </Router>
      <Footer></Footer>

    </div>
  );
}

export default App;
