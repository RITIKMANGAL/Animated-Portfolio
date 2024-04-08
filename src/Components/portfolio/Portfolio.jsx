import React, { useRef } from 'react'
import "./portfolio.css"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";




const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magni rem cumque soluta praesentium sed minima maxime amet beatae, fugit esse excepturi, odit mollitia molestiae hic. Ex eveniet alias mollitia!"
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magni rem cumque soluta praesentium sed minima maxime amet beatae, fugit esse excepturi, odit mollitia molestiae hic. Ex eveniet alias mollitia!"
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magni rem cumque soluta praesentium sed minima maxime amet beatae, fugit esse excepturi, odit mollitia molestiae hic. Ex eveniet alias mollitia!"
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/13003485/pexels-photo-13003485.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magni rem cumque soluta praesentium sed minima maxime amet beatae, fugit esse excepturi, odit mollitia molestiae hic. Ex eveniet alias mollitia!"
  },
]


const Single = ({ item }) => {// direct destructuring.
  const ref = useRef();


  const { scrollYProgress } = useScroll({ target: ref ,
    //  offset:["start start"  , "end start"] 
    });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section  className="container">
      <div className="wrapper">
        <div className="imageContainer" ref={ref}>
          <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer" style={{y}}
        >
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button>See Demo</button>
        </motion.div>
      </div>

    </section>
  )

}
const Portfolio = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30

  })

  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}

    </div>
  )
}

export default Portfolio
