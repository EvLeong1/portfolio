"use client";

import React, { useEffect } from 'react'
import SectionHeading from './section-heading';
import { motion, useUnmountEffect } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { time } from 'console';
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';
import pfp from '@/public/grad_pic.jpg';

export default function About() {
  const { ref } = useSectionInView("About");
  
  return (
    <motion.section ref={ref} className='max-w-[45rem]  leading-8 scroll-mt-28 justify-center items-center flex flex-col'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175, }}
        id="about"
    >
      
      
        {/* <h2 className='text-3xl font-medium capitalize text-gray-950 mb-8'
        >About Me</h2> */}
        <div className='w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-end mb-10'>
          <SectionHeading>About Me</SectionHeading>
          <div className="relative inline-block">
            <div className=" absolute top-5 left-5 bg-[#C6B982] dark:bg-[#0F172A] w-full h-full shadow-md z-10 rounded-lg"></div>
            <Image 
                src={pfp}
                alt="Evan profile picture" 
                width="400"
                // height="400"
                draggable={false}
                className=" w-64 h-64 object-cover rounded-lg shadow-md relative z-20"
            />
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <p className='text-4xl font-bold  text-red-900/90 dark:text-yellow-200'>Hi I'm Evan!</p>
          <p className='w-full text-lg text-left mb-3 font-UnbuntuMono'>
          I recently finished my senior year at the UC, Irvine, with a Bachelor of Science in Computer Science!
          <br /> <br />
          Before this, I studied at Diablo Valley College, earning an Associate of Science in Computer Science with a 3.95 GPA. 
          <br /> <br /> 
          I am currently working as an Associate Performance Engineer at Veeva Systems as a part of the Generation Veeva program! I am learning a lot about navigating post grad life and how to create the foundation for a successful career in the tech insdustry.
          </p>
        </div>

        
    </motion.section>
    
  );
}
