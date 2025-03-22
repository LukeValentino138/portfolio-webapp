import project2Vid from "../assets/projects/FishAIVid.gif";
import project1Vid from "../assets/projects/DarkTidesVid.gif";

export const LINKS = [
  { href: "#work", label: "Projects" },
  { href: "#technologies", label: "Tech" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there!",
  introduction:
    "I'm Luke Valentino, a versatile software developer with a strong foundation in scalable application development, machine learning, and game development.",
  description:
    "My goal is to deliver impactful solutions that enhance user experiences and drive growth.",
  resumeLinkText: "Download Resume",
  resumeLink: "/LukeValentino_Resume.pdf",
};

export const ABOUT_TEXT = {
  paragraphs: [
    "I am a dedicated software developer with expertise spanning software engineering, machine learning, and game development. My experience includes impactful projects, from advancing object detection with procedural dataset augmentation to designing immersive gameplay in Unity.",
    "I graduated from Swinburne University of Technology with a Bachelor of Computer Science, majoring in Software Development. Always eager to tackle new challenges, I strive to create efficient, high-quality solutions. In my free time, I enjoy exploring new technologies and solving complex problems.",
  ],
};


export const EXPERIENCES = [
  {
    yearRange: "February 2025 - Now",
    title: "Software Engineer at Labourly",
    location: "Melbourne, Australia",
    description: [
      "Responsible for the whole software development lifecyle of the Labourly mobile application, from initial architecture to deployment.",
      "Defined architecture and networking for mobile application that allows for handling of sensitive tax and medical information in compliance with ISO27001 standard and Australian regulations.",
      "Designed and implemented APIs, authentication, and middleware in Django Rest Framework for deployment on AWS Fargate.",
      "Collaborated with UI/UX designer to create consistent and clear user interface and flows.",
    ],
  },
  {
    yearRange: "March 2024 — March 2025",
    title: "Research Assistant at Central Queensland University",
    location: "Melbourne, Australia",
    description: [
      "Collaborated with a team to design and develop a web application for processing and analysing video files using object detection models.",
      "Developed algorithm for procedural dataset augmentation, increasing object detection model accuracy from 39.2% to 75.4%. Generating 13,698 synthetic annotations and 2,211 synthetic images to improve model robustness.",
      "Creating innovative techniques for depth, length, and weight estimation of fish using point clouds and image segmentation models.",
    ],
  },
  {
    yearRange: "January 2022 - Now",
    title: "Disability Support Worker at Buttons Support Services",
    location: "Melbourne, Australia",
    description: [
      "Developed personalized cartaking plans in collaboration with parents and carers, leading to improved client satisfaction.",
      "Enhanced client learning abilities through targeted education in math, writing, and computer skills.",
      "Facilitated client participation in community activities, fostering social skill development.",
    ],
  },

];

export const PROJECTS = [
  {
    name: "Dark Tides",
    description: "Lead developer of a 2D pixel art game set in medieval times, featuring advanced lighting, dynamic shaders for water and fire effects, realistic AI behaviors, a Tetris-style inventory system, and a shop mechanic. Collaborated with a 7-member team using Unity.",
    image: project1Vid,
    link: "https://github.com/your-github/streamerzz",
  },
  {
    name: "FishAI",
    description: "A web application utilizing advanced machine learning models like YOLO and DETR for object detection and analysis of fish in video files. Features REST API integration, statistical reporting, and secure user accounts. Developed using Python, Django, and ReactJS.",
    image: project2Vid,
    link: "https://github.com/your-github/nutritrack",
  },
];


export const CONTACT_CONTENT = {
  // headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "LukeValentino138@gmail.com",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/LukeValentino138",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/luke-valentino-6412422a1/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Luke Valentino. All rights reserved.`,
};
