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

    const { ref } = useSectionInView("Experience", 0.5);
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
                                background: theme === 'light' ? "#FDFBFF" : "#64748B", 
                                color: theme === 'light' ? "black" : "white", 
                                border:"2px solid #A6F9FF", 
                                boxShadow:"none", textAlign:"left", padding:"1.3rem 2rem"}}
                            contentArrowStyle={{ borderRight: "0.4rem solid  #A6F9FF" }}
                            date={expItem.date}
                            icon={expItem.icon}
                            iconStyle={{
                                background: theme === 'light' ? "#FDFBFF" : "#64748B",
                                fontSize: "1.5rem",
                                color: "#A6F9FF",
                                boxShadow: "0 0 0 0.3rem #A6F9FF",
                                }}
                            
                        >
                            <h3 className="font-bold capitalize text-D697FF-500">{expItem.title}</h3>
                            <p className="!font-normal !mt-0 dark:text-gray-200">{expItem.location}</p>
                            <p className="font-normal !mt-1 text-gray-700 dark:text-gray-300">{expItem.description}</p>
                        
                            {/* <p className="!font-normal !mt-1 text-gray-700 dark:text-gray-200">{expItem.courses}</p> */}
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
}