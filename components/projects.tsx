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
    const { ref } = useSectionInView("Projects", 0.1);
  

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
            className='bg-[#E5D9C5] dark:bg-slate-900 max-w-[60rem] border border-black/5 overflow-hidden
            sm:pr-8 relative sm:h-[26rem] mb-3 sm:mb-8 last:mb-0 even:pl-8
            hover:bg-[#D3C9B8] transition rounded-lg sm:group-even:pl-8 pl-4 '>
                <div className='pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 
                sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[18rem] justify-center '>
                    
                    <h3 className='text-2xl font-semibold'>{title} </h3>
                
                    <p className='mt-2 leading-relaxed text-gray-700 dark:text-gray-200'>{description}</p>
                    {title === "Lard Chat" && <a className=' ml-[1%]  w-[rem] dark:text-yellow-200 text-red-900/90 text-sm rounded-full outline-none  hover:text-red-950 italic transition cursor-pointer'
                        href={'https://lardchat.vercel.app/'} target="_blank">
                            Check it out here!
                    </a>}
                    
                    <ul className='flex flex-wrap mt-4 gap-2 '>
                        {
                        tags.map((tag, index) => (
                            <li className = 'bg-red-900/90 dark:bg-yellow-200 dark:text-slate-900 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full hover:scale-105 transition cursor-default' 
                            key = {index}>{tag}</li>
                        ))}
                        {/* <a className='bg-purple-300 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white font-bold rounded-full hover:bg-green-300 hover:scale-105 transition cursor-pointer'>Details</a> */}
                        <a className=' ml-[1%]  w-[rem] text-black dark:text-gray-300 text-[1.5rem] rounded-full outline-none focus:scale-110 dark:hover:text-gray-400 hover:text-black/90  transition cursor-pointer'
                        href={link} target="_blank">
                            <FaGithubSquare />
                        </a>
                            
                            
                    </ul>
                    
                    
                    
                    
                </div>
                
                <Image src={imageUrl} alt={title} 
                quality={100}
                className='absolute hidden sm:block top-8 -right-40
                w-[28.25rem] rounded-lg shadow-2xl 
                transition

                group-hover:scale-[1.15]
                group-hover:-translate-x-4
                group-hover:translate-y-3
                group-hover:-rotate-2

                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2

                group-even:-right-[initial] 
                group-even:-left-40
                
                click:scale-[1.25]
                '
                
                />
                
            </section>
            <Image src={imageUrl} alt={title} 
                quality={100}
                className='
                sm:hidden
                items-center justify-center
                object-center
                object-cover
                w-[100%] rounded-lg shadow-2xl 
                transition
                border-2 border-gray-500

                hover:scale-[1.04]
                mb-20'
                
                />
        </motion.div>
        
        )
}
