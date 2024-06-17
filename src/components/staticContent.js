import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNode,
} from "react-icons/fa";
import {
  SiAxios,
  SiFirebase,
  SiGit,
  SiHeroku,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiFramer 
} from "react-icons/si";
import { FaBootstrap, FaSass, FaNpm } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";

export const sections = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Resume", to: "resume" },
  { name: "Contact", to: "contact" },
];

export const skills = [
  { name: "HTML5", icon: FaHtml5, iconColor: "#e34f26" },
  { name: "CSS3", icon: FaCss3, iconColor: "#002561" },
  { name: "JavaScript", icon: SiJavascript, iconColor: "#f7df1e" },
  { name: "React", icon: FaReact, iconColor: "#00d8ff" },
  { name: "Redux", icon: SiRedux, iconColor: "#764abc" },
  { name: "Bootstrap", icon: FaBootstrap, iconColor: "#7952b3" },
  { name: "Sass", icon: FaSass, iconColor: "#c76494" },
  { name: "TailwindCSS", icon: SiTailwindcss, iconColor: "#06b6d4" },
  { name: "Framer Motion", icon: SiFramer , iconColor: "#000" },
  { name: "Responsive Design", icon: CiMobile3, iconColor: "#06b6d4" },
  { name: "NPM", icon: FaNpm, iconColor: "#c53635" },
  { name: "Git", icon: SiGit, iconColor: "#f05032" },
  { name: "Github", icon: FaGithub, iconColor: "#181717" },
  { name: "Axios", icon: SiAxios, iconColor: "#61dafb" },
  { name: "Firebase", icon: SiFirebase, iconColor: "#ffca28" },
  { name: "Supabase", icon: SiSupabase, iconColor: "#06b6d4" },
];

export const socialMedia = [
  {
    name: "Github",
    url: "https://github.com/saeedsayed",
    icon: FaGithub,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/SAEIDSAUED",
    icon: FaFacebookF,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/saeed-sayed-35b07b25a/",
    icon: FaLinkedinIn,
  },

  {
    name: "Instagram",
    url: "https://www.instagram.com/saeed_sayed1/",
    icon: FaInstagram,
  },
  {
    name: "Whatsapp",
    url: "https://wa.me/+201159278628",
    icon: FaWhatsapp,
  },
  {
    name: "Telegram",
    url: "https://t.me/+201159278628",
    icon: FaTelegramPlane,
  },
];

export const apiProjects = {
  url: "https://xiqdbsjorquorlgojezr.supabase.co/rest/v1/my-projects?select=*",
  apikey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpcWRic2pvcnF1b3JsZ29qZXpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwOTc3NzEsImV4cCI6MjAyMDY3Mzc3MX0.LHLdB2_aYIr6cq1bfVMBFsDcvC-LOs19oGcchJYIV8o",
};
