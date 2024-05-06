import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "<Pratham.dev /> | Portfolio",
	description:
		"Prathamesh is a full-stack developer, currently pursuing a Master's in Computer Science at Universität Passau.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body
				className={`${inter.className} bg-gray-50 text-slate-800 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-opacity-90 dark:text-gray-50`}
			>
				<div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
				<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						<Header />
						{children}
                        <Footer />

                        <Toaster position="top-right" />
                        <ThemeSwitch />
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
