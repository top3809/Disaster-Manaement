// QUe --> what is the difference between js and jsx
// --> vscode khud b khud detect kar lega , if we use jsx ... or agar hm js use karnege to hme batna padega vscode ko ki hm react use kar rhe !!
//prince kumar
import React from 'react'
import {motion} from "framer-motion";
// import Founder from "./Founder";
// import Menu from "./Menu";
const Home = () => {

  const options ={
    initial:{
      x:"-100%",
      opacity:0,
    },
    whileInView:{
      x:0,
      opacity:1,
    }
  }
  return (
    <>
      <section className='home'>
        <div className='div'>
        <motion.h1 {...options}>Sample Name</motion.h1>   
        <motion.p {...options} 
        transition={{
          delay:0.2,
        }} >some paragraph</motion.p>
        </div>
        <motion.a 
        initial={{
          y:"-100%",
          opacity:0,
        }}
        whileInView={{
          y:0,
          opacity:1, 
        }}
        transition={{
          delay:0.4,
        }}
        href='#menu'>
            Explore Menu
        </motion.a>
    </section>
    {/* <Founder/>
    <Menu/> */}
    </>
  )
}

export default Home
