import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandItch,
  IconHome,
  IconUser,
  IconMessage,
  IconContract,
} from "@tabler/icons-react";

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
    quote: "SQL",
  },
  {
    quote: "MongoDB",
  },
  { quote: "Firease" },
  { quote: "Redis" },
  { quote: "nginx" },
  {
    quote: "Python",
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

export const projectsData = [
  {
    id: 12,
    name: "Personal Portfolio",
    description:
      "My personal developer portfolio, fully responsive. Made with NextJS & TailwindCSS.",
    img: "/images/portfolio.png",
    source: "https://github.com/hkhoa-ng/hkhoa-ng-portfolio",
    url: "https://khoa-ng.vercel.app/",
  },
  {
    id: 9,
    name: "EventGo",
    description:
      "A prototype of a event-promotion web service. Made as a group project for university.",
    img: "/images/event-go.png",
    source:
      "https://www.figma.com/file/CDJGvGFspXlKytnXK2wAYx/EventGo-Prototype?node-id=0%3A1",
    url: "https://www.behance.net/gallery/134056463/EventGo-Web-Service",
  },
  {
    id: 10,
    name: "Student Dashboard",
    description:
      "A Sisu student dashboard clone, made with Java as the final project for my Programming 3 course.",
    img: "/images/sisu.png",
    source: "https://github.com/hkhoa-ng/tie-prog3-sisu-clone",
    url: "https://sis-tuni.funidata.fi/student/login",
  },
  {
    id: 11,
    name: "Nginx Web Service w/ CI/CD",
    description:
      "Minimal web-service: GUI, load-balanced REST API, CI/CD pipeline. Python + JS, Redis, JWT, Nginx, Docker.",
    img: "/images/nginx.png",
    source: "https://github.com/hkhoa-ng/comp-se-140/tree/project",
    url: "http://86.50.169.142:8198/",
  },
  {
    id: 1,
    name: "Quizzical",
    description:
      "A trivial quiz app that fetches questions from an API, so that every game is different.",
    img: "/images/quizzical.png",
    source: "https://github.com/hkhoa-ng/quizzical",
    url: "https://hkhoa-ng.github.io/quizzical/",
  },
  {
    id: 3,
    name: "Real-time Chat",
    description:
      "A minimal real-time chat application. Made with React.js and Firebase.",
    img: "/images/realtime-chat.png",
    source: "https://github.com/hkhoa-ng/react-realtime-chat",
    url: "https://hkhoa-ng.github.io/react-realtime-chat/",
  },
  {
    id: 4,
    name: "Wordle Clone",
    description:
      "Yet another clone of the popular game, Wordle, made with React.js",
    img: "/images/wordle.png",
    source: "https://github.com/hkhoa-ng/yet-another-wordle-clone/",
    url: "https://hkhoa-ng.github.io/yet-another-wordle-clone/",
  },
  {
    id: 5,
    name: "CLI Pomodoro",
    description:
      "A simple Pomodoro-like app runs in the terminal, made with Node.js",
    img: "/images/pomodoro.png",
    source: "https://github.com/hkhoa-ng/cli-pomodoro/",
    url: "https://www.npmjs.com/package/cli-pomodoro/",
  },
  {
    id: 7,
    name: "Smoof",
    description:
      "UI design for a smart food delivery service. Made as the final project for my Introduction to SE course.",
    img: "/images/smoof.png",
    source: "N/A",
    url: "https://www.behance.net/gallery/131783703/Smoof-Smart-Food-Website",
  },
  {
    id: 6,
    name: "Fire Out!",
    description:
      "A retro twin-sticks shooter. Made with Unity, Aseprite, and Bosca Ceoil.",
    img: "/images/fire-out.png",
    source: "https://github.com/hkhoa-ng/fire-out",
    url: "https://hkhoa.itch.io/fire-out",
  },
  {
    id: 8,
    name: "Karik",
    description:
      "A shooter game developed in 5 days for a Game Jam. Made with a friend in Unity.",
    img: "/images/karik.png",
    source: "https://github.com/hkhoa-ng/game-jam-july-2022",
    url: "https://nhoxkien.itch.io/karik",
  },
];
