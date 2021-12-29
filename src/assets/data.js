import React from "react";
import { FaPalette, FaReact, FaCode } from "react-icons/fa";
import { FaGithub, FaDiscord, FaTwitter, FaRegEnvelope, FaDev} from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Mallikarjun H T",
  title: "Full stack Developer/Photography/Tech Blogger",
  social: {
    "github": {
        "url" :"https://github.com/MallikarjunHt",
        "title": "Github",
        "iconName": <FaGithub/>
    },
    "discord": {
        "url" :"https://discord.gg/bYZaWnvf",
        "title": "Discord",
        "iconName": <FaDiscord/>
    },
    "twitter": {
        "url": "https://twitter.com/MallikarjunHt",
        "title": "Twitter",
        "iconName": <FaTwitter/>
    },
    "devdotto": {
        "url": "https://dev.to/mallikarjunht",
        "title": "Dev.to",
        "iconName": <FaDev/>
    },
    "email": {
        "url": "https://mail.google.com/mail/?view=cm&fs=1&to=marjunht@gmail.com",
        "title": "Gmail (Primarey)",
        "iconName": <FaRegEnvelope/>
    }
  },
  about: {
    title: "About my self",
    description:
      "Greetings!\r\n\r\n I'm a Engineering graduate in Computer Science and Engineering, with a passion for Nature and photography.\n I like programing and my area of intrest are Analytics, cyber security, robotic process automation.\r\n  sometimes don't know where to start, most of the time i end up picking the same project multiple times! .\r\n  If this is the case, I've got you covered!\r\n  I have dedicated to\r\n  learning python\r\n Application development.\r\n If there is anything you need, I'll be happy to help!\r\n Hppy Hcking",
  },
  skills: [
    {
      skillName: "java",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
      discription: ""
    },
    {
        skillName: "c#",
        skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
        discription: ""
      },
      {
        skillName: "python",
        skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
        discription: ""
      },
      {
        skillName: "rect",
        skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
        discription: ""
      },
      {
        skillName: "postman",
        skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
        discription: ""
      },
      {
        skillName: "markdown",
        skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
        discription: ""
      }
  ],
  projects: [
    {
      title: "React tailwind portfolio",
      description: "👨‍🎨 An open-source portfolio template built with React and Tailwind.",
      tags: [
        "template",
        "portfolio",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://github.com/braydentw/react-tailwind-portfolio"
    },
    {
        title: "TODO APP",
        description: "👨‍🎨 An open-source React and Firestore Application.",
        tags: [
          "ReactJs",
          "FireStore",
          "Material-Ui"
        ],
        link: "https://github.com/MallikarjunHt/todo"
      },
    {
      title: "C# Adobe Indesign Automation",
      description: "⚡ Automating Adobe InDesign using C# programing",
      tags: [
        "C#",
        "application development"
      ],
      link: "https://github.com/MallikarjunHt/Csharp-Adobe-Automation"
    },
    {
      title: "FileTransfer",
      description: "⚡ move file from one directory to another, record transactions in mysql, using spring boot and spring batch",
      tags: [
        "java",
        "micro service",
        "spring Boot",
        "mysql"
      ],
      link: "https://github.com/MallikarjunHt/FileTransfer"
    }
  ],
  github: {
      url: "https://api.github.com/users/MallikarjunHt/starred"
  }
};
export default data;