import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuApple, LuDatabase, LuGraduationCap, LuKeyboard, LuLaptop, LuMusic } from "react-icons/lu";
import { BiNetworkChart } from "react-icons/bi";
import acraffle1Png from "@/public/acraffle1.png";
import acraffle2Png from "@/public/acraffle2.png";
import acraffle3Png from "@/public/acraffle4.png";
import prosperPng from "@/public/prosperSearch.png";
import uciPng from "@/public/uci.png";
import lardchatPng from "@/public/lardchat.png";
import chocPng from "@/public/CHOC.png";
import fabflixPng from "@/public/fabflix.png";
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
    tags: ["Python", "Leadership", "Teaching"],
  },
  {
    title: "Software Engineer Intern",
    location: "First American | Santa Ana, CA",
    description:
      "Contributed to a custom-built data analyticstool using the .NET framework, C#, LINQ, and MS SQL Server as a backend engineer. Also generated reports for international teams using SQL through Hue and Apache Impala",
    icon: React.createElement(LuLaptop),
    date: "Jun 2023 - Aug 2023",
    tags: ["C#", ".NET", "SQL", "MS SQL Server", "Hue"],

  },
  {
    title: "Student Machine Learning Intern",
    location: "Children's Hospital of Orange County | Orange, CA",
    description:
      "Contributed to AI medical research by predicting if blunt trauma patients require medical intervention. Implemented various machine learning models such as kNN, Neural Network, and Random Forest using PyTorch.",
    icon: React.createElement(BiNetworkChart),
    date: "Jun 2024 - Aug 2024",
    tags: ["Machine Learning", "Neural Network", "Python", "PyTorch", "React"],

  },
  {
    title: "Associate Systems Developer",
    location: "First American | Santa Ana, CA",
    description:
      "Developed a user facing report archive system with TypeScript frontend utilizing jQuery, connected to a C# and MS SQL Server backend as a full stack engineer. Focused on creating an adaptive, responsive, and highly accessible user interface using Kendo UI",
    icon: React.createElement(LuLaptop),
    date: "Oct 2023 - Aug 2024",
    tags: ["TypeScript", "jQuery", "C#", "MS SQL Server", "SQL"],
  },
  {
    title: "Associate Performance Engineer",
    location: "Veeva Systems | Pleasanton, CA",
    description:
      "",
    icon: React.createElement(LuLaptop),
    date: "Aug 2024 - present",
    tags: ["Performace Engineering"],
  },
] as const;

export const educationData = [
  
  {
    title: "Diablo Valley College",
    location: "Pleasant Hill, CA",
    description:
      "Computer Science, A.S. | GPA: 3.95",
      courses: "Calculus I-III, Physics for Engineers A-C, Discrete Mathematics, Linear Algebra, Assembly Language Programming",
    icon: React.createElement(LuGraduationCap),
    pic: uciPng,
    date: "Jun 2020 - May 2022",
  },
  {
    title: "UC Irvine",
    location: "Irvine, CA",
    description:
      "Computer Science, B.S. | GPA: 3.84",
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
    "A Python-coded Discord bot, hosted on Heroku, combines user-friendly commands and advanced search techniques in MongoDB to offer an engaging and efficient social experience. Used in over 1500 servers worldwide!",
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
      "An AI-powered search engine made with Python using the OpenAI API for site summaries, tf-idf ranking, and a user-friendly Flask web GUI, achieving sub-150 ms query responses.",
    tags: ["Python", "OpenAI API", "Flask", "HTML / CSS"],
    imageUrl: prosperPng,
    link: 'https://github.com/EvLeong1/prosperSearchEngine',
  },
  {
    title: "FabFlix",
    description:
      "Fabflix allows users to search for, add, and purchase movies. The project involved setting up AWS, MySQL, JDBC, and Tomcat, as well as implementing features like reCAPTCHA, HTTPS, XML parsing, full-text search, and utilizing Docker and Kubernetes for microservices and containerization.",
    tags: ["HTML/CSS","JavaScript", "MySQL", "AWS", "Docker", "Java", "Tomcat"],
    imageUrl: fabflixPng,
    link: 'https://github.com/EvLeong1/',
  },
  {
    title: "Predicting Surgery with Machine Learning - CHOC",
    description:
      "Contributed to AI medical research by predicting if blunt trauma patients require medical intervention. Implemented various machine learning models such as kNN, Neural Network, and Random Forest using PyTorch. Also created a React web interface connected to a Flask backend to display the results of our model.",
    tags: ["Machine Learning", "Python", "PyTorch", "scikit-learn", "React", "TypeScript"],
    imageUrl: chocPng,
    link: 'https://github.com/EvLeong1/CS180A_CHOC',
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
    "React Native",
    "Next.js",
    "Git",
    "SQL",
    "SQL Server",
    "PostgreSQL",
    "Firebase",
    "MongoDB",
    "PySpark",
    "PyTorch",
    "Machine Learning"
] as const;