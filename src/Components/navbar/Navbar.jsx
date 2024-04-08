import React from 'react'
import "./Navbar.css";
import { motion } from 'framer-motion';
// import { duration } from '@mui/material';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>Portfolio</motion.span>
        <div className="social">
          <a href=""><img src="/images/facebook.png" alt="" /></a>
          <a href=""><img src="/images/instagram.png" alt="" /></a>
          <a href=""><img src="/images/youtube.png" alt="" /></a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
