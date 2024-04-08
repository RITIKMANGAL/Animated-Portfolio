import React, { useRef } from 'react';
import "./parallal.css";
import { motion ,useScroll, useTransform } from 'framer-motion';

const Parallal = (props) => {
  const ref = useRef();

  // Correct the offset parameter
  const {scrollProgress} = useScroll({
    target: ref.current,
    offset: [0,1] // Set offset to numerical values
  });
  

  // Ensure scrollProgress is properly defined before using it
  const yText = scrollProgress ? useTransform(scrollProgress, [0, 1], ["0%", "500%"]) : null;
  const yBg = scrollProgress ? useTransform(scrollProgress, [0, 1], ["0%", "100%"]) : null;

  return (
    <div className='parallax' ref={ref} style={{background: props.type === "services" ? "linear-gradient(180deg,#0c0c1d,#111132)" : "linear-gradient(180deg,#505064,#111132)"}}>
      <motion.h1 style={{ y: yText }}>{props.type === "services" ? "What We Do?" : "What We Did?"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: yBg,backgroundImag: `url(${props.type === "services" ? "/public/images/planets.png" :"/public/images/sun.png" })` }} className="planets"></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
}

export default Parallal;
