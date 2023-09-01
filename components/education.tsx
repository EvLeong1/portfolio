"use client";

import React, { useContext } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationData, experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import exp from "constants";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";
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

export default function Education() {
    const { ref } = useSectionInView("Education", 0.5);
    const { theme } = useTheme();
    
    return <section id="education" ref={ref} className='scroll-mt-28'>
        <SectionHeading>Education</SectionHeading>
        <VerticalTimeline lineColor=""> 
            {
                educationData.map((expItem, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{ 
                                background: theme === 'light' ? "#FDFBFF" : "#64748B", 
                                color: theme === 'light' ? "black" : "white", 
                                border: theme === 'light' ? "2px solid #D697FF" : "2px solid #542375", 
                                boxShadow:"none", textAlign:"left", padding:"1.3rem 2rem"}}
                            contentArrowStyle={{ borderRight: theme === 'light' ? "0.4rem solid #D697FF" : "0.4rem solid #542375" }}
                            date={expItem.date}
                            icon={expItem.icon}
                            iconStyle={{
                                background: theme === 'light' ? "#FDFBFF" : "#64748B",
                                fontSize: "1.5rem",
                                color: theme === 'light' ? "#D697FF" : "#542375", // "#D697FF",
                                boxShadow: theme === 'light' ? "0 0 0 0.3rem #D697FF" : "0 0 0 0.3rem #542375",
                                }}
                            
                        >
                            <h3 className="font-bold capitalize text-D697FF-500">{expItem.title}</h3>
                            <p className="!font-normal !mt-0">{expItem.location}</p>
                            <p className="font-normal !mt-1 text-gray-700 dark:text-gray-300">{expItem.description}</p>
                            <p>Relavent Coursework:</p>
                            <p className="!font-normal !mt-1 text-gray-700 dark:text-gray-300">{expItem.courses}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
}