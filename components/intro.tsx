"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion} from 'framer-motion'
import profilePic from '@/public/pfp.jpg'
import Link from 'next/link'
import { BsArrowRight, BsGithub } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
    const { ref } = useSectionInView("Home",0.5);
  
  return (
    <section ref = {ref} id = "home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-48'>
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

        <motion.h1 className="mb-10 mt-[3rem] px-4 sm:leading-[4] leading-[2.5]  font-medium"
        initial = {{opacity:0, y:100}}
        animate={{opacity:1, y:0}}>
        <span className=' text-6xl sm:text-8xl font-extrabold text-stroke-white text-gray-900 drop-shadow-lg hover:text-gray-700 transition cursor-default'
        >Evan Leong </span><br></br>
        <span className='text-slate-500 sm:text-3xl text-1xl'>Full Stack Software Engineer</span>
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row font-medium items-center justify-center gap-4 px-4 text-lg drop-shadow-sm'
            initial = {{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.1,}}
        >
            <a className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer'
            href='/Leong_Evan_Resume.pdf' target="_blank" rel="noopener noreferrer">
                Resume 
                {/* <HiDownload /> {" "} */}
            </a>
            <Link href="#contact"
            className='bg-white text-gray-700  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-100 hover:text-gray-900 active:scale-105 transition'>
             Contact 
            {/* <BsArrowRight />{" "} */}
            </Link>     
            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-100 hover:text-gray-800 active:scale-105 transition cursor-pointer '
            href='https://www.linkedin.com/in/evanrleong/' target="_blank">
                <BsLinkedin />
            </a>
            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.25rem] rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-100 hover:text-gray-800 active:scale-105 transition cursor-pointer'
            href='https://github.com/EvLeong1' target="_blank">
                <FaGithubSquare />
            </a>
          
        </motion.div>
    </section>
    
  )
}

// function useSectionInView(arg0: string) {
//     throw new Error('Function not implemented.');
// }

