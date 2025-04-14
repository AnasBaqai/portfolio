import {
  FaCar,
  FaTools,
  FaWarehouse,
  FaChartLine,
  FaBarcode,
  FaUserCog,
  FaShoppingCart,
  FaShoppingBag,
  FaStore,
  FaTags,
  FaFilter,
  FaDesktop,
  FaFileAlt,
  FaSearch,
  FaDatabase,
  FaRobot,
  FaCode,
  FaCloud,
  FaLink,
  FaAws,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiMui,
  SiTypescript,
  SiJavascript,
  SiCss3,
} from "react-icons/si";
import { createElement } from "react";

// Placeholder project image URL
export const PROJECT_IMAGE = "https://via.placeholder.com/600x400";

export const projectData = [
  {
    id: 1,
    title: "Car Parts Management System",
    description:
      "A comprehensive system for managing car parts inventory, orders, and sales with secure authentication, inventory tracking, and reporting features.",
    image: "/car-parts-system.png",
    github: "https://github.com/AnasBaqai/car-parts-system",
    live: "https://car-parts-system-ars.vercel.app/login",
    technologies: [
      { name: "React", icon: createElement(SiReact) },
      { name: "Node.js", icon: createElement(SiNodedotjs) },
      { name: "MongoDB", icon: createElement(SiMongodb) },
      { name: "Express", icon: createElement(SiExpress) },
      { name: "Material-UI", icon: createElement(SiMui) },
      { name: "TypeScript", icon: createElement(SiTypescript) },
    ],
    link: "/projects/1",
    icons: [
      createElement(FaCar, { key: "car" }),
      createElement(FaTools, { key: "tools" }),
      createElement(FaWarehouse, { key: "warehouse" }),
      createElement(FaChartLine, { key: "chart" }),
      createElement(FaBarcode, { key: "barcode" }),
      createElement(FaUserCog, { key: "admin" }),
    ],
  },
  {
    id: 2,
    title: "Style Scape",
    description:
      "A modern e-commerce platform built with React JS, offering a clean UI and intuitive shopping experience.",
    image: "/ecommerce.png",
    github: "https://github.com/AnasBaqai/style-scape",
    live: "https://sunny-smakager-7e75c2.netlify.app/",
    technologies: [
      { name: "React", icon: createElement(SiReact) },
      { name: "JavaScript", icon: createElement(SiJavascript) },
      { name: "CSS", icon: createElement(SiCss3) },
      { name: "Styled Components", icon: createElement(SiCss3) },
    ],
    link: "/projects/2",
    icons: [
      createElement(FaStore, { key: "store" }),
      createElement(FaShoppingCart, { key: "cart" }),
      createElement(FaShoppingBag, { key: "bag" }),
      createElement(FaTags, { key: "products" }),
      createElement(FaFilter, { key: "filter" }),
      createElement(FaDesktop, { key: "responsive" }),
    ],
  },
  {
    id: 3,
    title: "Intelligent Document RAG System",
    description:
      "A Retrieval-Augmented Generation (RAG) system that allows you to query PDF documents using natural language.",
    image: "/rag_system.png",
    github: "https://github.com/AnasBaqai/Intelligent_Document_RAG_System",
    live: null,
    technologies: [
      { name: "Python", icon: createElement(SiJavascript) }, // Using JS icon as placeholder for Python
      { name: "LangChain", icon: createElement(FaLink) },
      { name: "AWS Bedrock", icon: createElement(FaAws) },
      { name: "ChromaDB", icon: createElement(FaDatabase) },
    ],
    link: "/projects/3",
    icons: [
      createElement(FaFileAlt, { key: "pdf" }),
      createElement(FaSearch, { key: "search" }),
      createElement(FaDatabase, { key: "vector" }),
      createElement(FaRobot, { key: "ai" }),
      createElement(FaCode, { key: "nlp" }),
      createElement(FaCloud, { key: "cloud" }),
    ],
  },
  {
    id: 4,
    title: "Project Name",
    description: "A short description of the project and its features.",
    image: PROJECT_IMAGE,
    github: "#",
    live: "#",
    technologies: [
      { name: "React", icon: createElement(SiReact) },
      { name: "CSS", icon: createElement(SiCss3) },
      { name: "JavaScript", icon: createElement(SiJavascript) },
    ],
    link: "/projects/4",
  },
];
