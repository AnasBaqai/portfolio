import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
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
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiMui,
  SiReact,
} from "react-icons/si";

const projects = [
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
      { name: "React", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Material-UI", icon: <SiMui /> },
    ],
    features: [
      {
        text: "User Authentication: Secure login and registration with admin approval",
        icon: <FaLock />,
      },
      {
        text: "Inventory Management: Track parts, categories, and stock levels",
        icon: <FaWarehouse />,
      },
      {
        text: "Order Processing: Create and manage customer orders",
        icon: <FaBox />,
      },
      {
        text: "Sales Reporting: Generate reports on sales and inventory",
        icon: <FaChartLine />,
      },
      {
        text: "Admin Dashboard: Manage users and system settings",
        icon: <FaUserCog />,
      },
      {
        text: "Barcode Scanning: Scan barcodes for quick part lookup",
        icon: <FaBarcode />,
      },
      {
        text: "Receipt Printing: Generate and print receipts for orders",
        icon: <FaPrint />,
      },
      {
        text: "Desktop Application: Run as Electron app for desktops",
        icon: <FaDesktop />,
      },
    ],
    architecture: [
      {
        text: "Frontend: Built with React and Material-UI for a modern, responsive interface",
        icon: <FaReact />,
      },
      {
        text: "Backend: Node.js with Express providing RESTful APIs",
        icon: <FaServer />,
      },
      {
        text: "Database: MongoDB for flexible, scalable data storage",
        icon: <FaDatabase />,
      },
      {
        text: "Authentication: JWT-based authentication with role-based access control",
        icon: <FaLock />,
      },
    ],
    credentials: {
      username: "demo@example.com",
      password: "demo123",
    },
    systemIcon: <FaCar style={{ fontSize: "38px" }} />,
  },
  // Other projects can be added here with similar structure
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id) || {
    id,
    title: `Project ${id}`,
    description: "This project details will be added soon.",
    fullDescription: "",
    image: "https://via.placeholder.com/600x400",
    technologies: [],
    features: [],
    architecture: [],
  };

  return (
    <StyledProjectDetails>
      <div className="container">
        <Motion.div
          className="project-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="project-header">
            <div className="title-with-icon">
              {project.systemIcon && (
                <div className="system-icon">{project.systemIcon}</div>
              )}
              <h1>{project.title}</h1>
            </div>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FaGithub /> View Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>

          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="project-description">
            <h2>Overview</h2>
            <p>{project.description}</p>
            {project.fullDescription && <p>{project.fullDescription}</p>}
          </div>

          {project.credentials && (
            <div className="project-credentials">
              <h3>Demo Credentials</h3>
              <p>
                Username: <strong>{project.credentials.username}</strong>
              </p>
              <p>
                Password: <strong>{project.credentials.password}</strong>
              </p>
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div className="project-technologies">
              <h2>Technologies Used</h2>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <div className="tech-icon">{tech.icon}</div>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div className="project-features">
              <h2>Key Features</h2>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    {feature.icon && (
                      <div className="feature-icon">{feature.icon}</div>
                    )}
                    <span>{feature.text || feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.architecture && project.architecture.length > 0 && (
            <div className="project-architecture">
              <h2>Architecture</h2>
              <ul className="architecture-list">
                {project.architecture.map((item, index) => (
                  <li key={index} className="architecture-item">
                    {item.icon && (
                      <div className="architecture-icon">{item.icon}</div>
                    )}
                    <span>{item.text || item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="project-navigation">
            <Link to="/projects" className="btn btn-back">
              Back to Projects
            </Link>
          </div>
        </Motion.div>
      </div>
    </StyledProjectDetails>
  );
};

const StyledProjectDetails = styled.section`
  min-height: 100vh;
  padding: 10rem 0 5rem;

  .project-content {
    max-width: 900px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    padding: 2.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .title-with-icon {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .system-icon {
    color: var(--primary);
    background-color: rgba(255, 255, 255, 0.1);
    padding: 12px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 2.5rem;
    color: var(--primary);
  }

  h2 {
    font-size: 1.8rem;
    margin: 2.5rem 0 1.2rem;
    color: var(--primary);
    position: relative;
    padding-bottom: 0.5rem;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 3px;
      width: 60px;
      background-color: var(--primary);
    }
  }

  h3 {
    font-size: 1.3rem;
    margin: 1.5rem 0 1rem;
    color: var(--primary);
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: var(--light-text);
  }

  .project-image {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 2.5rem;

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  .project-links {
    display: flex;
    gap: 1rem;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.7rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    font-size: 1rem;
    transition: var(--transition);
    cursor: pointer;
  }

  .btn-primary {
    background-color: var(--primary);
    color: var(--dark-bg);

    &:hover {
      background-color: #e0e0e0;
      transform: translateY(-3px);
    }
  }

  .btn-secondary {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--light-text);

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-3px);
    }
  }

  .btn-back {
    background-color: transparent;
    color: var(--light-text);
    border: 1px solid var(--light-text);
    margin-top: 2rem;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-3px);
    }
  }

  .project-technologies {
    margin: 2.5rem 0;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  .tech-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    padding: 1.2rem;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    min-width: 110px;
    transition: var(--transition);

    &:hover {
      transform: translateY(-5px);
      background-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
  }

  .tech-icon {
    font-size: 2.2rem;
    color: var(--primary);
  }

  .project-features,
  .project-architecture {
    margin: 2.5rem 0;

    ul {
      margin-left: 0;
      margin-top: 1.5rem;
      list-style: none;
    }
  }

  .features-list,
  .architecture-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 1.2rem;
  }

  .feature-item,
  .architecture-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 1.2rem;
    transition: var(--transition);

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
  }

  .feature-icon,
  .architecture-icon {
    color: var(--primary);
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 10px;
    border-radius: 50%;
  }

  .project-credentials {
    background-color: rgba(255, 255, 255, 0.05);
    padding: 1.8rem;
    border-radius: 8px;
    margin: 2.5rem 0;
    border-left: 3px solid var(--primary);

    h3 {
      margin-top: 0;
    }

    p {
      margin-bottom: 0.5rem;
    }
  }

  .project-navigation {
    margin-top: 3.5rem;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding: 8rem 0 3rem;

    .project-content {
      padding: 1.5rem;
    }

    .project-header {
      flex-direction: column;
      align-items: flex-start;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    .tech-stack {
      gap: 1rem;
    }

    .tech-item {
      min-width: 90px;
      padding: 1rem;
    }

    .features-list,
    .architecture-list {
      grid-template-columns: 1fr;
    }
  }
`;

export default ProjectDetails;
