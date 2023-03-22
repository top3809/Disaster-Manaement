import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import '../../styles/signup.scss'
import { AuthContext } from '../../context/AuthContext';
import { Alert } from '@mui/material';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [password2, confirmPassword] = useState('');
  const navigate = useNavigate();
  const { signup, googlesignin } = useContext(AuthContext);




  const handleGoogle = async (e) => {
    e.preventDefault();
    
    try {
      let userObj = await googlesignin();
      let uid = userObj.user.uid;
      console.log('this is user obj')
      console.log(userObj);
      navigate("/");
    } catch (err) {
      setError(err.message);

      setTimeout(() => {
        setLoading(false);
        setError('')
      }, 3000)
      return;
    }
  }

  const handlePhone = async (e) => {
    e.preventDefault();
    
    try {

      
      setError('success');

    } catch (err) {
      setError(err.message);

      setTimeout(() => {
        setLoading(false);
        setError('')
      }, 3000)
      return;
    }
  }

  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    }
  }
  return (
    <>
      <section className='signup-container'>
        <div className='signup-left'>
          <form className="signup">
            <motion.h2 {...options}>Sign Up</motion.h2>
            <motion.p {...options}
              transition={{
                delay: .2
              }}
              style={{ fontSize: "20px" }}>Select Method to login :</motion.p>
            {error != '' && <Alert style={{ width: '350px', margin: 'auto' }} severity='error'>{error}</Alert>}
            <span className="signup-method"><button onClick={handleGoogle}>Google</button> <button onClick={handlePhone} >Mobile Number</button></span>
            <input type="text" placeholder='name' />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <span style={{ display: "flex", justifyContent: "start", alignItems: "center" }}><input type="checkbox" />Remember me  <a style={{ marginLeft: "60px" }} href="#">Forgot password</a></span>
            <input type="submit" value="Create account" />
         
            <div class="links">
              <p>Already have an account?</p> <a href="/userlogin ">Log in</a>
            </div>
          </form>
        </div>
        <div className="signup-right">
        </div>
      </section>
    </>
  )
}

export default Signup