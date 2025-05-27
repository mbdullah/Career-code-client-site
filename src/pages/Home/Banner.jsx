import React from "react";
import { motion } from "motion/react";
import team1 from '../../assets/media/media1.jpg'
import team2 from '../../assets/media/media2.jpg'

const Banner = () => {
  return (
    <div className="hero min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="flex-1">
         <motion.img
          src={team2}
          animate={{y:[80, 120, 80]}}
          transition={{duration:4, repeat:Infinity}}
          className="max-w-sm rounded-t-4xl  rounded-br-4xl  border-s-4 border-b-4 border-blue-500"
        />
         <motion.img
          src={team1}
          animate={{x:[100, 150, 100]}}
          transition={{duration:5, repeat:Infinity, delay:2}}
          className="max-w-sm h-48 w-full rounded-t-4xl  rounded-br-4xl  border-s-4 border-b-4 border-blue-500"
        />
       </div>
        <div className="flex-1">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 2 } }}
            className="text-5xl font-bold"
          >
            Recent  
             <motion.span 
            animate={{
              color:['#FFFFFF', '#1C1C', '#1c1c1c'],
              transition:{duration:2, repeat:Infinity} }}
            > Jobs </motion.span>
             For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
