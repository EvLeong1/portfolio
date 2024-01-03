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
                                background: theme === 'light' ? "#E5D9C5" : "#0F172A", 
                                color: theme === 'light' ? "black" : "white", 
                                border: theme === 'dark' ? "2px solid #FEF08A" : "2px solid #7F1D1D", 
                                boxShadow:"none", textAlign:"left", padding:"1.3rem 2rem"}}
                            contentArrowStyle={{ borderRight: theme === 'dark' ? "0.4rem solid #FEF08A" : "0.4rem solid #7F1D1D" }}
                            date={expItem.date}
                            icon={expItem.icon}
                            iconStyle={{
                                background: theme === 'light' ? "#E5D9C5" : "#0F172A",
                                fontSize: "1.5rem",
                                color: theme === 'dark' ? "#FEF08A" : "#7F1D1D", // "#D697FF",
                                boxShadow: theme === 'dark' ? "0 0 0 0.3rem #FEF08A" : "0 0 0 0.3rem #7F1D1D",
                                }}
                            
                        >
                            <h3 className="font-bold capitalize text-D697FF-500 text-2xl">{expItem.title}</h3>
                            <p className="!font-normal !mt-0">{expItem.location}</p>
                            <p className="font-normal !mt-1 text-gray-800 dark:text-gray-300">{expItem.description}</p>
                            <p>Relavent Coursework:</p>
                            <p className="!font-normal !mt-1 text-gray-700 dark:text-gray-300">{expItem.courses}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
}