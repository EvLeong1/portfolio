"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationData, experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import exp from "constants";
import { useTheme } from "@/context/theme-context";


//experience section //
export default function Experience() {

    const { ref } = useSectionInView("Experience", 0.1);
    const { theme } = useTheme();

    return <section id="experience" ref={ref} className='scroll-mt-28 '>
        {/* <div className="bg-[#e2c5ff] -z-10 absolute 
        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]">
        </div> */}
        <SectionHeading>Experience</SectionHeading>
        <VerticalTimeline  lineColor=""> 
            {
                experiencesData.map((expItem, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{ 
                                background: theme === 'light' ? "#E5D9C5" : "#0F172A", 
                                color: theme === 'light' ? "black" : "white", 
                                border:theme === 'light' ? "2px solid #7F1D1D" : "2px solid #FEF08A", 
                                boxShadow:"none", textAlign:"left", padding:"1.3rem 2rem"}}
                            contentArrowStyle={{ borderRight: theme === 'light' ? "0.4rem solid #7F1D1D" : "0.4rem solid  #FEF08A" }}
                            date={expItem.date}
                            icon={expItem.icon}
                            iconStyle={{
                                background: theme === 'light' ? "#E5D9C5" : "#0F172A",
                                fontSize: "1.5rem",
                                color: theme === 'light' ? "#7F1D1D" : "#FEF08A",
                                boxShadow: theme === 'light' ? "0 0 0 0.3rem #7F1D1D" : "0 0 0 0.3rem #FEF08A",
                                }}
                            
                        >
                            <h3 className="font-bold capitalize text-D697FF-500 text-2xl">{expItem.title}</h3>
                            <p className="font-normal !mt-0 dark:text-gray-200 text-xl ">{expItem.location}</p>
                            <p className="font-normal  text-gray-800 dark:text-gray-300">{expItem.description}</p>
                            <div className="flex flex-wrap w-[100%] gap-2 mt-[1rem] items-center">
                                {
                                expItem.tags.map((tag, index) => (
                                    <li className = 'bg-red-900/90 dark:bg-[#FEF08A] dark:text-black px-3 py-1  text-[0.7rem] uppercase tracking-wider text-white rounded-full hover:scale-105 transition cursor-default list-none' 
                                    key = {index}>{tag}</li>
                                ))}

                            </div>
                            
                        
                            {/* <p className="!font-normal !mt-1 text-gray-700 dark:text-gray-200">{expItem.courses}</p> */}
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
}