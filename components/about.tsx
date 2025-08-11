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
            I&apos;m a frontend-focused software engineer with 2+ years of experience building responsive, accessible, and high-performance web applications using{" "} <span>React.js, TypeScript, JavaScript (ES6+), HTML5, and CSS3</span>. I thrive on creating customer-facing features that are intuitive, engaging, and optimized for performance.

My background spans Agile team collaboration, test automation, and cloud-native deployments, with proven results in improving UI responsiveness, reducing page load times, and boosting user engagement. I enjoy taking complex problems and turning them into elegant, scalable solutions that work seamlessly across devices.


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
