//  icons
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

// skills images
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiMysql,
  DiReact,
  DiJava,
  DiPython,
  DiAndroid
} from "react-icons/di";

//import SkillImg1 from "./assets/img/html.png";
//import SkillImg2 from "./assets/img/javascript.png";
//import SkillImg3 from "./assets/img/typescript.png";
//import SkillImg4 from "./assets/img/react.png";
//import SkillImg5 from "./assets/img/java.png";
//import SkillImg6 from "./assets/img/sql.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/tyujigi/",
    color: "text-fuchsia-700",
    colorHover: "hover:text-red-900",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/yujiichikawa",
    color: "text-white",
    colorHover: "hover:text-gray-500",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/thiago-ichikawa-0bba07205/",
    color: "text-blue-500",
    colorHover: "hover:text-blue-900",
  },
];

// skill
export const skills = [
  {
    image: DiHtml5,
  },
  {
    image: DiCss3,
  },
  {
    image: DiJsBadge,
  },
  {
    image: DiMysql,
  },
  {
    image: DiReact,
  },
  {
    image: DiJava,
  },
  {
    image: DiPython,
  },
  {
    image: DiAndroid,
  },
];

export const sections = [
  {
    title: "Backend Developer",
    content:
      "I have experience developing backends using Express, Node.js, Java Spring, and SQL databases such as MySQL and PostgreSQL.",
  },
  {
    title: "Frontend Developer",
    content:
      "I am proficient in HTML, CSS, JavaScript, React, and TypeScript and have experience developing responsive and user-friendly web applications.",
  },
];