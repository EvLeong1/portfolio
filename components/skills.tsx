"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeIn = {
    initial: { 
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView("Skills");
  
    return (
        <section ref = {ref} id = "skills" className=' max-w-[53rem] scroll-mt-28 '>
            <SectionHeading>Skills</SectionHeading>
            <ul className='flex flex-wrap justify-center gap-2 text-lg'>
                {
                    skillsData.map((skill, index) => (
                        <motion.li 
                            className='bg-white border border-black/[0.1] rounded-xl px-5 py-3 hover:bg-blue-100 ease transition cursor-default'
                            key={index}
                            variants={fadeIn}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                            >{skill}
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    )
}