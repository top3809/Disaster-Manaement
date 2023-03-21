import React from 'react'
import {motion} from "framer-motion";

const Signup= () => {

  const options ={
    initial:{
      x:"-100%",
      opacity:0,
    },
    whileInView:{
      x:0,
      opacity:1,
    }}
  return (
    <>  
    <section className='signup-container'>
    <div className='signup-left'>
        <form className="signup">
        <motion.h2 {...options}>Sign Up</motion.h2>
        <motion.p {...options}
          transition={{
            delay:.2
          }}
        style={{fontSize:"20px"}}>Select Method to login :</motion.p>
        <span className="google"><button type="button">Google</button> <button type="button">Mobile Number</button></span>
        <input type="text" placeholder='name'/>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <span style={{display:"flex", justifyContent:"start",alignItems:"center"}}><input type="checkbox"/>Remember me  <a style={{marginLeft:"60px"}} href="#">Forgot password</a></span>
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