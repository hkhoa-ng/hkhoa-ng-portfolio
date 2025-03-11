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

export const gridItems = [
  {
    id: 1,
    title: "I prioritize collaboration and open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "My tech stack",
    description: "I always try to learn and sharpen my skills",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Beyond the code",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 4,
    title: "Beyond the code",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
];

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

export const aboutMe = [
  {
    title: "My tech stack 📚",
    description: "I'm always learning and sharpening my skills.",
    header: (
      <div className="pb-2">
        <InfiniteMovingCards
          items={techStack1}
          direction="right"
          speed="fast"
          className="py-0 pb-2 md:pb-4"
          itemClassName="w-auto md:w-auto h-auto md:h-auto p-2 px-4 md:p-4 md:px-8 rounded-lg border-0"
        />
        <InfiniteMovingCards
          items={techStack2}
          direction="right"
          speed="fast"
          className="py-0 pb-2 md:pb-4"
          itemClassName="w-auto md:w-auto h-auto md:h-auto p-2 px-4 md:p-4 md:px-8 rounded-lg border-0"
        />
        <InfiniteMovingCards
          items={techStack3}
          direction="right"
          speed="fast"
          className="py-0"
          itemClassName="w-auto md:w-auto h-auto md:h-auto p-2 px-4 md:p-4 md:px-8 rounded-lg border-0"
        />
      </div>
    ),
    className: "md:col-span-2",
  },
  {
    title: "",
    description: "",
    header: (
      <div className="flex flex-col justify-center items-center z-50 overflow-hidden rounded-xl relative h-[350px] md:h-full ">
        <Image
          src="/collab-animate.svg"
          alt="Vector artwork of people collaborating."
          width={300}
          height={300}
          className="absolute top-0 md:w-[250px] md:h-[250px] z-50"
        />
        <h1 className="text-xl font-bold text-white text-center px-4 group-hover/bento:translate-x-2 transition duration-100 absolute bottom-8 z-50">
          I value collaboration & open communication 💡
        </h1>
        <div className="h-full w-full dark:bg-dot-white/[0.5] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] bg-neutral-100 dark:bg-slate-950" />
      </div>
    ),
    className: "md:col-span-1 p-0",
  },
  {
    title: "",
    description: "",
    header: (
      <BackgroundGradientAnimation
        className="h-full"
        containerClassName="rounded-xl"
      >
        <div className="p-8 h-full flex flex-col justify-center items-center z-50 ">
          <h1 className="text-xl font-bold text-white text-center group-hover/bento:-translate-y-1 group-hover/bento:scale-110 transition duration-100">
            Let's start a project together?
          </h1>
          <div className="flex flex-col gap-4 mt-4">
            <MagicButton
              text="Get in touch "
              href="mailto:nhkhoa020400@gmail.com"
              icon={<IconMailForward className="h-5 w-5" />}
              className=""
            />
            <div className="flex flex-row w-full justify-between ">
              {socialMedia.map((item) => (
                <Link
                  href={item.link}
                  className="text-white p-2 md:p-3 border border-white/[0.2] rounded-md backdrop-blur-md dark:bg-transparent z-50 hover:transform hover:scale-110 transition duration-200 hover:border-white dark:hover:drop-shadow-[0_10px_10px_rgba(255,255,255,0.5)] "
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.id}
                >
                  {item.logo}
                </Link>
              ))}
            </div>{" "}
          </div>
        </div>
      </BackgroundGradientAnimation>
    ),
    className: "md:col-span-1 p-0 ",
  },
  {
    title: "Beyond the code ✨",
    description: "",
    header: (
      <div className="flex flex-wrap gap-4 justify-center items-center min-h-[200px] h-full">
        {hobbies.map((item, index) => (
          <div
            key={item}
            className="inline-flex animate-float"
            style={{
              animationDelay: `${-index * getRandomInt(7)}s`,
              animationDirection: "alternate",
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          >
            <BackgroundGradientAnimation containerClassName="rounded-full">
              <h1 className="text-white px-6 py-2 whitespace-nowrap">{item}</h1>
            </BackgroundGradientAnimation>
          </div>
        ))}
      </div>
    ),
    className: "md:col-span-2",
  },
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
