"use client";

import React, { useEffect } from 'react'
import SectionHeading from './section-heading';
import { motion, useUnmountEffect } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { time } from 'console';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About");
  

  return (
    <motion.section ref={ref} className='mb-24 max-w-[45rem] text-center leading-8 scroll-mt-28'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175, }}
        id="about"
       
    >
        {/* <h2 className='text-3xl font-medium capitalize text-gray-950 mb-8'
        >About Me</h2> */}
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3 bg-gray-100 border border-black/5 rounded-xl p-5 drop-shadow-lg'>
        My name is <b>Evan Leong</b> and I am entering my senior year at the <span className='font-medium'>University of California, Irvine</span>, on the path to attain a Bachelor of Science in Computer Science. 
        Prior to this, I studied at Diablo Valley College and earned an Associate of Science in Computer Science, achieving a 3.95 GPA. 
        My skill set includes <span className='font-medium'>C++, Python, JavaScript, and SQL</span>, alongside several other programming languages. 
        I am eagerly looking forward to the prospect of delving into more practical experiences, launching my career into the field after my 
        college journey.
        </p>

        <p></p>
    </motion.section>
  );
}
