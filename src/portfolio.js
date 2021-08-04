import emoji from "react-easy-emoji";

import infostride from "./assets/img/icons/common/infostride.jpg";
import venturepact from "./assets/img/icons/common/venturepact.jpg";
import calance from "./assets/img/icons/common/calance.png";
import paxcom from "./assets/img/icons/common/paxcom.jpg";

export const greetings = {
	name: "Javaid Ahmad Ganaie",
	title: "Hi all, I'm Javaid",
	description:
		"A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Angular and some other cool libraries and frameworks and Cross Platform Mobile Apps With React native.",
	resumeLink: "https://docs.google.com/document/d/1jKnO6dsNB4FhO6-0fCmNaLrHohvOva6tYkn7Wp0e8Kw/edit?usp=sharing",
};

export const openSource = {
	githubUserName: "JavaidAhmad",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/rahi.javaid.44",
	instagram: "https://www.instagram.com/javaid_maqbool/",
	twitter: "https://twitter.com/RahiJavaid4",
	github: "https://github.com/JavaidAhmad",
	linkedin: "https://www.linkedin.com/in/javaid-ganaie-39ab42104/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
		
		{
			skillName: "kubernetes",
			fontAwesomeClassname: "logos:cloud",
		},

		{
			skillName: "terraform",
			fontAwesomeClassname: "logos:dev",
		},
		{
			skillName: "kafka",
			fontAwesomeClassname: "logos:dev",
		},
		{
			skillName: "microservices",
			fontAwesomeClassname: "logos:dev",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "90",
	},
	{
		Stack: "Programming",
		progressPercentage: "85",
	},
];

export const educationInfo = [
	{
		schoolName: "Lovely Professional University",
		subHeader: "Master of Computer Applications(MCA)",
		duration: "2016-2018",
		desc: "Participated in the multiple workshops.",
		descBullets: [
		],
	},
	{
		schoolName: "Subharti Institute of Technology and Engineering",
		subHeader: "Bachelor of Computer Applications",
		duration: "2012-2015",
		desc: "Participated in the multiple software engineering related workshops.",
		descBullets: [
		],
	}
];

export const experience = [
	{
		role: "Senior Full Stack Developer",
		company: "Paxcom (A Paymentus Company)",
		companylogo: paxcom,
		date: "Dec 2020 – Present",
		desc: "Responsible to create and add new feature to the existing product Paymentus.",
		descBullets: [
			"Working on both frontend and backend in React and node.",
			"Reviewed code, debugged problems and corrected issues.",
		],
	},
	{
		role: "Full Stack Developer",
		company: "Infostride",
		companylogo: infostride,
		date: "June-2019 to December-2020",
		desc: "Worked on Nomis Deal Manager projects using ReactJs, Meteor, MongoDB, Express, Node JS, Typescript.",
	},
	{
		role: "Full Stack Developer",
		company: "Venturepact",
		companylogo: venturepact,
		date: "January-2018 to June-2019",
		desc: "Developed two scalable Single Page web applications and two chat application using MEAN stack technologies. https://neta.co.in/,  http://f.rely.co/.",
	},
	{
		role: "Consultant Technology",
		company: "Calance Software Pvt. Ltd",
		companylogo: calance,
		date: "Aug 2015 – Aug 2016",
		desc: "Used various technologies, including Html, CSS, Java script, PHP, Word press, and Java, to make repairs and optimize the corporate website.",
	},
];

export const projects = [
	{
		name: "Neta",
		desc: "To increase transparency in Indian Politics. Neta is a cross party platform which is aimed at increasing transparency, strengthen participatory governance and ensure accountability of our leaders. It is one stop solution for citizens, political parties, government and leaders to establish direct connect with each other, understand the behavior, discuss issues, provide solutions and highlight achievements. ",
		link: "https://neta.co.in/",
	},
	{
		name: "Paymentus",
		desc: "Paymentus was born from a desire to improve the way bills get paid. Vision, innovation and exemplary service have propelled Paymentus to become the leading paperless electronic billing and payment solution on the market, resulting in 1,300 clients including some of the largest billers in North America. ",
		link: "https://www.paymentus.com/",
	},
	{
		name: "Outgrow",
		desc: "Outgrow is a growth marketing platform that enables marketers to build interactive content/tools to increase customer engagement and boost demand generation with no custom design or development.",
		link: "https://outgrow.co/",
	},
	{
		name: "NDM - Nomis Deal Manager",
		desc: "NDM is a vertical agnostic presentment and negotiation solution that enables banks to deploy complex pricing/business strategies in a simplified format to front-line representatives while capturing data points (such as salesforce behavior and negotiation history) necessary for banks to make quicker and smarter decisions.",
		link: "https://www.nomissolutions.com/products/nomis-deal-manager",
	}
];

export const feedbacks = [
	{
		name: "Ajay Rathore",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Javaid has been great. He handle things very efficiently and are available for any questions we have. He also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose Javaid web developer services for u.",
	},
	{
		name: "Tanveera Hassan",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
