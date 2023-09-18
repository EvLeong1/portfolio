import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuApple, LuDatabase, LuGraduationCap, LuKeyboard, LuLaptop, LuMusic } from "react-icons/lu";
import acraffle1Png from "@/public/acraffle1.png";
import acraffle2Png from "@/public/acraffle2.png";
import acraffle3Png from "@/public/acraffle4.png";
import prosperPng from "@/public/prosperSearch.png";
import uciPng from "@/public/uci.png";
import lardchatPng from "@/public/lardchat.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";




export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Coding Instructor",
    location: "BrickSpace | Benicia, CA",
    description:
      "Instructed coding to a diverse range of K-12 students in the Benicia Unified School District, fostering strong communication and leadership abilities, while collaboratively designing computer science and problem-solving curriculum with credentialed educators.",
    icon: React.createElement(LuApple),
    date: "Jan 2021 - Aug 2022",
  },
  {
    title: "Software Engineer Intern - Database",
    location: "21st Century Sounds | Pleasant Hill, CA",
    description:
      "Conducted thorough requirements analysis, utilized React for frontend development, and implemented an optimized MySQL database for client and event data storage.",
    icon: React.createElement(LuDatabase),
    date: "May 2022 - Aug 2022",
  },
  {
    title: "Software Engineer Intern",
    location: "First American | Santa Ana, CA",
    description:
      "I developed a full stack system for automated report generation, reduced research costs by optimizing SQL-based reporting for international teams, and created internal tools to enhance data analysis efficiency.",
    icon: React.createElement(LuLaptop),
    date: "Jun 2023 - present",
  },
] as const;

export const educationData = [
  
  {
    title: "Diablo Valley College",
    location: "Pleasant Hill, CA",
    description:
      "Associate of Science in Computer Science, 3.95 GPA",
      courses: "Calculus I-III, Physics for Engineers A-C, Discrete Mathematics, Linear Algebra, Assembly Language Programming",
    icon: React.createElement(LuGraduationCap),
    pic: uciPng,
    date: "Jun 2020 - May 2022",
  },
  {
    title: "University of California, Irvine",
    location: "Irvine, CA",
    description:
      "Bachelor of Science in Computer Science, specialization in Information Systems",
    courses: "Data Structures and Algorithms, Information Retrevial, Introduction to Data Management (SQL), Beyond SQL (NoSQL), Machine Learning and Data-Mining, System Design, Software Testing ",
    icon: React.createElement(LuGraduationCap),
    pic: uciPng,
    date: "Aug 2022 - Jun 2024",
  },
  
] as const;

export const projectsData = [
  {
    title: "ACraffle",
    description:
    "A Python-coded Discord bot, hosted on Heroku, combines user-friendly commands and advanced search tecniques in MongoDB to offer an engaging and efficient social experience. Used in over 1500 servers worldwide!",
    tags: ["Python", "MongoDB", "Discord API", "Heroku"],
    imageUrl: acraffle3Png,
    link: 'https://github.com/EvLeong1/acraffle2',
  },
  {
    title: "Lard Chat",
    description:
      "A real-time chat application built with React, Firebase, Tailwind CSS, and hosted on Vercel, featuring email authentication, a live chatroom, and a user-friendly UI.",
    tags: ["JavaScript", "React", "Firebase", "Tailwind CSS", "Vercel"],
    imageUrl: lardchatPng,
    link: 'https://github.com/EvLeong1/chat-app',
    //site: 'https://lardchat.vercel.app/',
  },
  {
    title: "ProsperSearch",
    description:
      " An AI-powered search engine made with Python using the OpenAI API for site summaries, tf-idf ranking, and a user-friendly Flask web GUI, achieving sub-150 ms query responses.",
    tags: ["Python", "OpenAI API", "Flask", "HTML / CSS"],
    imageUrl: prosperPng,
    link: 'https://github.com/EvLeong1/prosperSearchEngine',
  },
  
  
] as const;

export const skillsData = [
    "C++",
    "C#",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind",
    "React",
    "Next.js",
    "Git",
    "SQL",
    "SQL Server",
    "MySQL",
    "PostgreSQL",
    "NoSQL",
    "MongoDB",
    "PySpark",
] as const;