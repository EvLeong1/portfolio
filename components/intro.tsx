"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import profilePic from '@/public/pfp.jpg'


export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{scale: 0, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{
                        duration: 0.1,
                        type: "tween",
                        
                    }}
                >
                    <Image 
                        src= {profilePic}
                        alt="Evan profile picture" 
                        width="200"
                        height="200"
                        quality="95"
                        priority={true}
                        className="h-24 w-24 rounded-full 
                        object-cover border-[0.1rem] border-white scale-150
                        shadow-xl"// hover:border-[#7762ffda] transition duration-300 ease-in-out"
                    />
                </motion.div>
                
            </div>

        </div>

        <motion.p className="mb-10 mt-[3rem] px-4 sm:leading-[4] leading-[2.5]  font-medium"
        initial = {{opacity:0, y:100}}
        animate={{opacity:1, y:0}}>
        <span className=' text-6xl sm:text-8xl font-extrabold text-stroke-white text-blue-300 drop-shadow-lg hover:text-blue-400 transition duration-300 ease-in-out'>Evan Leong </span><br></br>
        <span className='text-slate-500 sm:text-3xl text-1xl'>Full Stack Software Engineer</span>
        </motion.p>

        <div>
            
        </div>
    </section>
    
  )
}

// My name is Evan Leong and I am entering my senior year at the University of California, Irvine, on the path to attain a Bachelor of Science in Computer Science. 
//         Prior to this, I studied at Diablo Valley College and earned an Associate of Science in Computer Science, achieving a 3.95 GPA. 
//         My skill set includes C++, Python, JavaScript, and SQL, alongside several other programming languages. 
//         I am eagerly looking forward to the prospect of delving into more practical experiences, launching my career into the field after my 
//         college journey.