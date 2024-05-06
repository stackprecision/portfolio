"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

	return (
		<motion.section
            ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>

			<p className="mb-3">
				I am a software enthusiast and a fervent follower of the Cloud
				ecosystem, enjoying exploring and tinkering with
				infrastructures. Currently, I am pursuing a Master&apos;s degree
				in Computer Science at the University of Passau. My core stack
				is{" "}
				<span className="font-medium">
					React, Next.js, Typescript, Node.js, and MongoDB
				</span>
				. I am also familiar with Prisma. I am currently looking for a
				Working Student position as a{" "}
				<span className="font-bold text-xl">Full Stack Developer</span>.
			</p>

			<p>
				<span className="italic">When I&apos;m not coding</span>, I
				enjoy playing video games, watching movies, and going out on
				long walks. I also enjoy{" "}
				<span className="font-medium">watching documentaries</span>. I
				am currently learning about{" "}
				<span className="font-medium">ancient Indian history</span>.
				I&apos;m also learning how to play the guitar.
			</p>
		</motion.section>
	);
}
