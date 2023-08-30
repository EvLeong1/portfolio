import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuApple, LuDatabase, LuGraduationCap, LuKeyboard, LuLaptop, LuMusic } from "react-icons/lu";
import acraffle1Png from "@/public/acraffle1.png";
import acraffle2Png from "@/public/acraffle2.png";
import prosperPng from "@/public/prosperSearch.png";
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
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuApple),
    date: "Jan 2021 - Aug 2022",
  },
  {
    title: "Software Engineer Intern",
    location: "21st Century Sounds | Pleasant Hill, CA",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
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
      courses: "Data Structures and Algorithms, Data Management Information Retrevial",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2020 - May 2022",
  },
  {
    title: "University of California, Irvine",
    location: "Irvine, CA",
    description:
      "Bachelor of Science in Computer Science, Specialization in Information Systems",
    courses: "Data Structures and Algorithms, Data Management Information Retrevial Bachelor of Science in Computer Science, Specialization in Information Systems",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2022 - Jun 2024",
  },
  
] as const;

export const projectsData = [
  {
    title: "ACraffle",
    description:
    "A Python-coded Discord bot, hosted on Heroku, combines user-friendly commands and advanced search tecniques in MongoDB to offer an engaging and efficient social experience.",
    tags: ["Python", "MongoDB", "Discord API", "Heroku"],
    imageUrl: acraffle2Png,
    link: 'https://github.com/EvLeong1/acraffle2',
  },
  {
    title: "ProsperSearch",
    description:
      " An AI-powered search engine made with Python using the OpenAI API for site summaries, tf-idf ranking, and a user-friendly Flask web GUI, achieving sub-150 ms query responses.",
    tags: ["Python", "OpenAI API", "Flask", "HTML / CSS"],
    imageUrl: prosperPng,
    link: 'https://github.com/EvLeong1/prosperSearchEngine',
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   // imageUrl: wordanalyticsImg,
  // },
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