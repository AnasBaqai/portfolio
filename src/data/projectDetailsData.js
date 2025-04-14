import {
  FaGithub,
  FaExternalLinkAlt,
  FaServer,
  FaReact,
  FaDatabase,
  FaTools,
  FaCar,
  FaWarehouse,
  FaCogs,
  FaChartLine,
  FaBarcode,
  FaUserCog,
  FaPrint,
  FaLock,
  FaDesktop,
  FaBox,
  FaShoppingCart,
  FaShoppingBag,
  FaStore,
  FaCreditCard,
  FaTags,
  FaUsers,
  FaSearch,
  FaFilter,
  FaShippingFast,
  FaFileAlt,
  FaRobot,
  FaCode,
  FaCloud,
  FaBook,
  FaFileUpload,
  FaTerminal,
  FaLink,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiMui,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiStripe,
  SiCss3,
  SiPython,
} from "react-icons/si";
import { createElement } from "react";

export const projectDetailsData = [
  {
    id: "1",
    title: "Car Parts Management System",
    description:
      "A comprehensive system for managing car parts inventory, orders, and sales, built with modern web technologies.",
    fullDescription: `
      The Car Parts Management System is a full-stack application designed to streamline the operations of automotive parts businesses. It features a robust set of functionalities including inventory management, order processing, sales reporting, and user authentication with role-based access control.
      
      The system provides an intuitive interface for managing car parts inventory, processing customer orders, generating reports, and more. It can be deployed as a web application or packaged as a desktop application using Electron.
    `,
    image: "/car-parts-system.png",
    github: "https://github.com/AnasBaqai/car-parts-system",
    live: "https://car-parts-system-ars.vercel.app/login",
    technologies: [
      { name: "React", icon: createElement(SiReact) },
      { name: "TypeScript", icon: createElement(SiTypescript) },
      { name: "Node.js", icon: createElement(SiNodedotjs) },
      { name: "Express", icon: createElement(SiExpress) },
      { name: "MongoDB", icon: createElement(SiMongodb) },
      { name: "Material-UI", icon: createElement(SiMui) },
    ],
    features: [
      {
        text: "User Authentication: Secure login and registration with admin approval",
        icon: createElement(FaLock),
      },
      {
        text: "Inventory Management: Track parts, categories, and stock levels",
        icon: createElement(FaWarehouse),
      },
      {
        text: "Order Processing: Create and manage customer orders",
        icon: createElement(FaBox),
      },
      {
        text: "Sales Reporting: Generate reports on sales and inventory",
        icon: createElement(FaChartLine),
      },
      {
        text: "Admin Dashboard: Manage users and system settings",
        icon: createElement(FaUserCog),
      },
      {
        text: "Barcode Scanning: Scan barcodes for quick part lookup",
        icon: createElement(FaBarcode),
      },
      {
        text: "Receipt Printing: Generate and print receipts for orders",
        icon: createElement(FaPrint),
      },
      {
        text: "Desktop Application: Run as Electron app for desktops",
        icon: createElement(FaDesktop),
      },
    ],
    architecture: [
      {
        text: "Frontend: Built with React and Material-UI for a modern, responsive interface",
        icon: createElement(FaReact),
      },
      {
        text: "Backend: Node.js with Express providing RESTful APIs",
        icon: createElement(FaServer),
      },
      {
        text: "Database: MongoDB for flexible, scalable data storage",
        icon: createElement(FaDatabase),
      },
      {
        text: "Authentication: JWT-based authentication with role-based access control",
        icon: createElement(FaLock),
      },
    ],
    credentials: {
      username: "demo@example.com",
      password: "demo123",
    },
    systemIcon: createElement(FaCar, { style: { fontSize: "38px" } }),
  },
  {
    id: "2",
    title: "Style Scape",
    description:
      "A modern e-commerce platform built with React JS, offering a clean UI and intuitive shopping experience.",
    fullDescription: `
      Style Scape is a responsive e-commerce platform designed to showcase products with a clean, modern interface. Built with React JS and styled-components, it features a user-friendly browsing experience with product categories, detailed product views, and a shopping cart system.
      
      The platform includes product browsing, category filtering, and a shopping cart implementation. The UI is designed to be responsive across all device sizes, providing an optimal shopping experience on both desktop and mobile devices.
    `,
    image: "/ecommerce.png",
    github: "https://github.com/AnasBaqai/style-scape",
    live: "https://sunny-smakager-7e75c2.netlify.app/",
    technologies: [
      { name: "React", icon: createElement(SiReact) },
      { name: "JavaScript", icon: createElement(SiJavascript) },
      { name: "CSS", icon: createElement(SiCss3) },
      { name: "Styled Components", icon: createElement(SiCss3) },
    ],
    features: [
      {
        text: "Product Catalog: Browse products with detailed information",
        icon: createElement(FaSearch),
      },
      {
        text: "Shopping Cart: Add, update, and remove items from cart",
        icon: createElement(FaShoppingCart),
      },
      {
        text: "Category Filtering: Browse products by category",
        icon: createElement(FaFilter),
      },
      {
        text: "Responsive Design: Optimized for all device sizes",
        icon: createElement(FaDesktop),
      },
      {
        text: "Product Details: View detailed product information",
        icon: createElement(FaTags),
      },
      {
        text: "Clean UI: Modern and intuitive user interface",
        icon: createElement(FaStore),
      },
    ],
    architecture: [
      {
        text: "Frontend: React JS with styled-components for a clean, responsive UI",
        icon: createElement(FaReact),
      },
      {
        text: "State Management: React Context API for cart and product state",
        icon: createElement(FaCogs),
      },
      {
        text: "Routing: React Router for seamless navigation",
        icon: createElement(FaServer),
      },
    ],
    systemIcon: createElement(FaStore, { style: { fontSize: "38px" } }),
  },
  {
    id: "3",
    title: "Intelligent Document RAG System",
    description:
      "A Retrieval-Augmented Generation (RAG) system that allows you to query PDF documents using natural language.",
    fullDescription: `
      The Intelligent Document RAG System is designed to enhance document search and question-answering capabilities using advanced AI techniques. It combines the power of Large Language Models with efficient document retrieval to provide accurate answers based on the content of your PDF documents.
      
      The system uses LangChain for orchestration, ChromaDB for vector storage, and supports multiple embedding providers including Ollama for local use and AWS Bedrock for cloud-based implementations. Users can query documents in natural language and receive contextually relevant responses extracted from the documents.
    `,
    image: "/rag_system.png",
    github: "https://github.com/AnasBaqai/Intelligent_Document_RAG_System",
    live: null,
    technologies: [
      { name: "Python", icon: createElement(SiJavascript) }, // Using JS icon as placeholder for Python
      { name: "LangChain", icon: createElement(FaLink) },
      { name: "AWS Bedrock", icon: createElement(FaAws) },
      { name: "ChromaDB", icon: createElement(FaDatabase) },
      { name: "Ollama", icon: createElement(FaRobot) },
    ],
    features: [
      {
        text: "PDF Document Ingestion: Process and chunk PDF documents for analysis",
        icon: createElement(FaFileAlt),
      },
      {
        text: "Vector Storage: Store and retrieve document embeddings using ChromaDB",
        icon: createElement(FaDatabase),
      },
      {
        text: "Semantic Search: Find relevant document sections based on meaning",
        icon: createElement(FaSearch),
      },
      {
        text: "Natural Language Querying: Ask questions in plain language",
        icon: createElement(FaRobot),
      },
      {
        text: "Multi-provider Support: Use Ollama locally or AWS Bedrock in the cloud",
        icon: createElement(FaCloud),
      },
      {
        text: "Automated Testing: Framework for validating response quality",
        icon: createElement(FaCode),
      },
    ],
    architecture: [
      {
        text: "Document Processing: PDF parsing and chunking for effective storage",
        icon: createElement(FaFileUpload),
      },
      {
        text: "Vector Database: ChromaDB for efficient similarity search",
        icon: createElement(FaDatabase),
      },
      {
        text: "Embedding Generation: Multiple models for text vectorization",
        icon: createElement(FaBook),
      },
      {
        text: "Query Engine: LangChain for orchestrating the RAG pipeline",
        icon: createElement(FaTerminal),
      },
    ],
    systemIcon: createElement(FaRobot, { style: { fontSize: "38px" } }),
  },
];
