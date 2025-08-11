import ecommerce from "@/public/ecommerce-admin.png";
import papermate from "@/public/papermate-login.png";
import React from "react";
import { BsDatabase } from "react-icons/bs";
import { SiJirasoftware } from "react-icons/si";

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
        name: "Projects",
        hash: "#projects",
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
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Data Engineer",
        location: "Noosa, Australia (Remote)",
        company: "Tribes.AI",
        description: "Developed React.js and TypeScript dashboards for a real-time analytics platform, improving UI responsiveness and boosting user engagement by 25%. Implemented responsive, accessible UI components with Tailwind CSS and JavaScript (ES6+), ensuring mobile-first design and WCAG compliance. Resolved UI/UX bugs with a 95%+ issue resolution rate, maintaining high client satisfaction. Containerized applications with Docker and Kubernetes, improving deployment efficiency by 60%. Collaborated in an Agile environment with cross-functional teams to deliver performant customer-facing features.",
        icon: React.createElement(BsDatabase),
        date: "09/2021 - 05/2022"
    },
    {
        title: "Software Engineer",
        location: "Bangalore, India",
        company: "Bridge Solutions Group",
        description: "Optimized React.js and TypeScript applications via code-splitting and performance profiling, reducing page load times by 15%. Built a React-based internal tool for API documentation, reducing developer onboarding time by 40%.Created automated unit and integration tests with Jest and React Testing Library, reducing regression bugs by 23%.Delivered rapid bug fixes with a 95%+ resolution rate within 24 hours.",
        icon: React.createElement(SiJirasoftware),
        date: "03/2021 - 08/2021"
    },
    {
        title: "Software Engineer Intern",
        location: "Hubballi, India",
        company: "Transil Technologies",
        description: "Assisted in the frontend development of a Channel Management System for retail businesses. Contributed as a junior developer in technologies consisting of Javascript frameworks and libraries, also UI/UX. Developed 3 websites using HTML, Javascript (React) and SCSS. Created UI mockups for client websites using Figma.",
        icon: React.createElement(SiJirasoftware),
        date: "02/2020 - 10/2020"
    }
] as const;

export const projectsData = [
    {
        title: "E-Commerce Website",
        description: "A full-stack e-commerce website built using Next.js, Prisma, and PostgreSQL. Features include user authentication using Clerk, product listing, cart functionality, and order placement.",
        tags: ["Next.js", "Prisma", "PostgreSQL", "Clerk"],
        imageUrl: ecommerce
    },
    {
        title: "Papermate",
        description: "A PDF AI tool that helps students and professionals to summarize and extract important information from research papers. It uses NLP techniques to summarize the paper and extract important keywords.",
        tags: ["Next.js", "Clerk", "PineconeDB", "Langchain"],
        imageUrl: papermate
    }
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
  ] as const;