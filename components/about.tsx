"use client";
import React from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section className='mb-24 max-w-[45rem] text-center leading-8'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175, }}
    >
        {/* <h2 className='text-3xl font-medium capitalize text-gray-950 mb-8'
        >About Me</h2> */}
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>
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
