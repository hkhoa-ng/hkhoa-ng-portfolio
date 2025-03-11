import { MagicButton } from "@/components/MagicButton";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandItch,
  IconMailForward,
  IconHome,
  IconUser,
  IconMessage,
  IconContract,
} from "@tabler/icons-react";
import Link from "next/link";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { getRandomInt } from "@/lib/utils";

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "During our time working together, Khoa demonstrated exceptional skill with Angular, quickly advancing to deliver clean, declarative code, master complex CSS, and produce high-quality components. He also delved deeply into the core aspects of front-end engineering, including building features that managed complex state with thorough testing. His ability to grasp and execute challenging tasks, combined with his positive attitude and dedication, made him an invaluable team member.",
    name: "Anthony Griffith",
    title: "Lead Frontend Developer @ Kempower Oyj",
  },
  {
    quote:
      "During our time working together, Khoa demonstrated exceptional skill with Angular, quickly advancing to deliver clean, declarative code, master complex CSS, and produce high-quality components. He also delved deeply into the core aspects of front-end engineering, including building features that managed complex state with thorough testing. His ability to grasp and execute challenging tasks, combined with his positive attitude and dedication, made him an invaluable team member.",
    name: "Anthony Griffith",
    title: "Lead Frontend Developer @ Kempower Oyj",
  },
  {
    quote:
      "During our time working together, Khoa demonstrated exceptional skill with Angular, quickly advancing to deliver clean, declarative code, master complex CSS, and produce high-quality components. He also delved deeply into the core aspects of front-end engineering, including building features that managed complex state with thorough testing. His ability to grasp and execute challenging tasks, combined with his positive attitude and dedication, made him an invaluable team member.",
    name: "Anthony Griffith",
    title: "Lead Frontend Developer @ Kempower Oyj",
  },
  {
    quote:
      "During our time working together, Khoa demonstrated exceptional skill with Angular, quickly advancing to deliver clean, declarative code, master complex CSS, and produce high-quality components. He also delved deeply into the core aspects of front-end engineering, including building features that managed complex state with thorough testing. His ability to grasp and execute challenging tasks, combined with his positive attitude and dedication, made him an invaluable team member.",
    name: "Anthony Griffith",
    title: "Lead Frontend Developer @ Kempower Oyj",
  },
];

export const workExperience = [
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-3xl font-bold mb-4">
          Cloud Software Developer
        </p>
        <p className="dark:text-neutral-200 text-md font-extralight">
          Kempower Oyj, Finland.
        </p>
      </div>
    ),
  },
  {
    title: "May 2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-3xl font-bold mb-4">
          Cloud Software Developer Trainee
        </p>
        <p className="dark:text-neutral-200 text-md font-extralight">
          Kempower Oyj, Finland.
        </p>
      </div>
    ),
  },
];

export const socialMedia = [
  {
    id: 1,
    logo: <IconBrandGithub className="h-6 w-6" />,
    link: "https://github.com/hkhoa-ng",
  },
  {
    id: 2,
    logo: <IconBrandLinkedin className="h-6 w-6" />,
    link: "https://www.linkedin.com/in/khoahng/",
  },
  {
    id: 3,
    logo: <IconBrandItch className="h-6 w-6" />,
    link: "https://hkhoa.itch.io/",
  },
];

export const techStack1 = [
  {
    quote: "AngularJS",
  },
  {
    quote: "ReactJS",
  },
  {
    quote: "NextJS",
  },
  {
    quote: "VueJS",
  },
  {
    quote: "HTML5",
  },
  {
    quote: "CSS3",
  },
  {
    quote: "JavaScript",
  },
  {
    quote: "TypeScript",
  },
  {
    quote: "SASS",
  },
];

export const techStack2 = [
  {
    quote: "NodeJS",
  },
  {
    quote: "AWS",
  },
  {
    quote: "Microservices",
  },
  {
    quote: "Serverless",
  },
  {
    quote: "Docker",
  },
  {
    quote: "Python",
  },
  {
    quote: "SQL",
  },
  {
    quote: "MongoDB",
  },
  {
    quote: "C#",
  },
  {
    quote: "C++",
  },
];

export const techStack3 = [
  {
    quote: "Jest",
  },
  {
    quote: "Cypress",
  },
  {
    quote: "Storybook",
  },
  {
    quote: "Jira",
  },
  {
    quote: "NX MonoRepo",
  },
  {
    quote: "GitHub Actions",
  },
  { quote: "CI/CD" },
];

export const hobbies = [
  "Retro Gaming 🎮",
  "Game Development 🕹️",
  "Boardgames ♠️",
  "Guitar 🎸",
  "Badminton 🏸",
  "Painting 🎨",
  "Origami 🇯🇵",
];

export const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <IconContract className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];
