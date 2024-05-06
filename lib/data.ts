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
        title: "Data Scientist",
        location: "Noosa, Australia (Remote)",
        company: "Tribes.AI",
        description: "Assisted in the development of ETL pipelines for a workplace analytics product. Extracted data from APIs from various providers such as Google, Microsoft, Hubspot etc. Transformed data using Neo4j graph database and used Airflow for automating the process. Loaded data into Google BigQuery for further usage by the data science team.",
        icon: React.createElement(BsDatabase),
        date: "09/2021 - 05/2022"
    },
    {
        title: "Software Engineer",
        location: "Bangalore, India",
        company: "Bridge Solutions Group",
        description: "Assisted in the frontend development of a Warehouse Management System for inventory management. Contributed as a junior software developer in technologies consisting of Javascript frameworks and libraries.",
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