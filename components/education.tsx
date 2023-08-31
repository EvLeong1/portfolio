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
import { motion } from "framer-motion";
//import { useTheme } from "@/context/theme-context";
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
    return <section id="education" ref={ref} className='scroll-mt-28'>
        <SectionHeading>Education</SectionHeading>
        <VerticalTimeline lineColor=""> 
            {
                educationData.map((expItem, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{ background: "#FDFBFF", color: "black", border:"2px solid #D697FF", boxShadow:"none", textAlign:"left", padding:"1.3rem 2rem"}}
                            contentArrowStyle={{ borderRight: "0.4rem solid  #D697FF" }}
                            date={expItem.date}
                            icon={expItem.icon}
                            iconStyle={{
                                background: "#F1F2F5",
                                fontSize: "1.5rem",
                                color: "#D697FF",
                                boxShadow: "0 0 0 0.3rem #D697FF",
                                }}
                            
                        >
                            <h3 className="font-bold capitalize text-D697FF-500">{expItem.title}</h3>
                            <p className="!font-normal !mt-0">{expItem.location}</p>
                            <p className="font-normal !mt-1 text-gray-700">{expItem.description}</p>
                            <p>Courses:</p>
                            <p className="!font-normal !mt-1 text-gray-700">{expItem.courses}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
}