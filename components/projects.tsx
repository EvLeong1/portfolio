import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { FaGithubSquare } from 'react-icons/fa';


export default function Projects() {
  return (
    <section>
        <SectionHeading>My Projects</SectionHeading>
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
    return <section className='group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden
    sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8
    hover:bg-gray-200 transition rounded-md'>
        <div className='pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10
        sm:max-w-[55%] flex flex-col h-full group-even:ml-[18rem]'>
            
            <h3 className='text-2xl font-semibold'>{title} </h3>
           
            <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
            
            <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                {
                    tags.map((tag, index) => (
                        <li className = 'bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full hover:bg-blue-300 hover:scale-105 transition cursor-default' 
                        key = {index}>{tag}</li>
                    ))}
                     <a className=' ml-[1%]  w-[rem] text-blue-400 text-[1.5rem] rounded-full outline-none focus:scale-110 hover:text-blue-600 hover:scale-105 transition cursor-pointer'
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
    </section>;
}
