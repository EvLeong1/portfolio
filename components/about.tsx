"use client";

import React, { useEffect } from 'react'
import SectionHeading from './section-heading';
import { motion, useUnmountEffect } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { time } from 'console';
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';
import pfp from '@/public/pfp.png';

export default function About() {
  const { ref } = useSectionInView("About");
  

  return (
    <motion.section ref={ref} className='max-w-[45rem] text-center leading-8 scroll-mt-28 justify-center items-center flex flex-col'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175, }}
        id="about"
       
    >
      
      
        {/* <h2 className='text-3xl font-medium capitalize text-gray-950 mb-8'
        >About Me</h2> */}
        <SectionHeading>About Me</SectionHeading>
        <Image 
            src= {pfp}
            alt="Evan profile picture" 
            width="200"
            height="200"
            quality="95"
            priority={true}
            className="h-32 w-32 rounded-lg 
            object-cover border-[0.1rem] border-white scale-150 mb-[3rem] mt-[1rem]
            shadow-xl justify-center items-center"// hover:border-[#7762ffda] transition duration-300 ease-in-out"
        />
        <p className='mb-3 bg-gray-100 dark:bg-slate-500 border border-black/5 rounded-xl p-5 drop-shadow-lg'>
        My name is Evan Leong and I am entering my senior year at the <span className='font-bold underline decoration-yellow-500/90 '>University of California, Irvine</span>, 
        on the path to attain a <span className='font-bold underline decoration-sky-500 '>Bachelor of Science in Computer Science. </span>
        Prior to this, I studied at <span className='font-bold underline decoration-yellow-500/90'>Diablo Valley College</span> and earned an <span className='font-bold underline decoration-sky-500'>Associate of Science in Computer Science,</span> achieving a 3.95 GPA. 
        My skill set includes <span className='font-bold underline decoration-indigo-500'>C++, Python, JavaScript, and SQL,</span> alongside several other programming languages. 
        I am eagerly looking forward to the prospect of delving into more practical experiences, launching my career into the field after my 
        college journey.
        </p>

        <p></p>
    </motion.section>
    
  );
}
