"use client";
import React, { useEffect, useRef } from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { FaGithubSquare } from 'react-icons/fa';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';



export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);
  

  return (
    <section ref = {ref} id= "projects" className='scroll-mt-28'>
        <SectionHeading>Projects</SectionHeading>
        <div>
            {
                projectsData.map((project, index) => (
                    <React.Fragment key = {index}>
                    <Project {...project}/>
                    </React.Fragment>
                ))
            }
        </div>
    </section>
  )
}



type ProjectProps = (typeof projectsData)[number];

function Project({title, description, tags, imageUrl,link,}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProg = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProg = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        

        <motion.div
            ref={ref}
            style={{
                scale: scaleProg,
                opacity: opacityProg,
            }}
            className='group mb-3 sm:mb-8 last:mb-0'>

            <section 
            className='bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden
            sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8
            hover:bg-gray-200 transition rounded-lg group-even:pl-8'>
                <div className='pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 
                sm:max-w-[55%] flex flex-col h-full group-even:ml-[18rem]'>
                    
                    <h3 className='text-2xl font-semibold'>{title} </h3>
                
                    <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
                    
                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                        {
                            tags.map((tag, index) => (
                                <li className = 'bg-blue-300 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full hover:scale-105 transition cursor-default' 
                                key = {index}>{tag}</li>
                            ))}
                            {/* <a className='bg-purple-300 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white font-bold rounded-full hover:bg-green-300 hover:scale-105 transition cursor-pointer'>Details</a> */}
                            <a className=' ml-[1%]  w-[rem] text-purple-300 text-[1.5rem] rounded-full outline-none focus:scale-110 hover:text-purple-400 hover:scale-105 transition cursor-pointer'
                            href={link} target="_blank">
                                <FaGithubSquare />
                            </a>
                            
                    </ul>
                    
                    
                    
                    
                </div>
                
                <Image src={imageUrl} alt={title} 
                quality={95}
                className='absolute top-8 -right-40
                w-[28.25rem] rounded-lg shadow-2xl 
                transition

                group-hover:scale-[1.04]
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2

                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2

                group-even:-right-[initial] 
                group-even:-left-40'
                />
            </section>
        </motion.div>
        
        )
}
