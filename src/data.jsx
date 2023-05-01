
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

import SkillImg1 from "./assets/img/html.png";
import SkillImg2 from "./assets/img/css3.png";
import SkillImg3 from "./assets/img/javascript.png";
import SkillImg4 from "./assets/img/react.png";
import SkillImg5 from "./assets/img/java.png";
import SkillImg6 from "./assets/img/sql.png";
import SkillImg7 from "./assets/img/python.png";


export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "habilidades",
    href: "habilidades",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
];

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

export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
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